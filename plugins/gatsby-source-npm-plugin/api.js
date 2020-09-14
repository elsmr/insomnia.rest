const axios = require('axios');
const marked = require('marked');
const gurl = {
  gh: require('parse-github-url'),
  gl: require('gitlab-url-parse'),
  g: require('giturl').parse
};

const NPM_REG_INFO = name =>
  `http://registry.npmjs.com/${encodeURIComponent(name)}`;

const NPM_JS_API_SEARCH = (query, size, offset) =>
  `https://npmjs.com/search?q=${encodeURIComponent(
    query
  )}&page=${offset}&perPage=${size}`;

const NPM_API_DWNINFO = (period, pkg) =>
  `https://api.npmjs.org/downloads/point/${period}/${pkg}`;

function getLastYearRange() {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDay = now.getDate();

  const daysToLookBack = 365;
  const msToLookBack = daysToLookBack * 24 * 60 * 60 * 1000;
  const pastDate = new Date(now.getTime() - msToLookBack);
  const pastYear = pastDate.getFullYear();
  const pastMonth = pastDate.getMonth() + 1;
  const pastDay = pastDate.getDate();

  return `${pastYear}-${pastMonth}-${pastDay}:${nowYear}-${nowMonth}-${nowDay}`;
}

function getPluginMeta(pkgJson) {
  let meta = pkgJson.insomnia || {};
  let publisher = meta.publisher || {};
  let applications = meta.applications || {};
  let images = meta.images || {};

  return {
    name: meta.name || '',
    displayName: meta.displayName || '',
    description: meta.description || '',
    bundle: meta.bundle || false,
    deprecated: meta.deprecated || false,
    unlisted: meta.unlisted || false,
    categories: meta.categories || ['Other'],
    publisher: {
      name: publisher.name || '',
      icon: publisher.icon || ''
    },
    applications: {
      core: applications.core || '',
      designer: applications.designer || '',
      cli: applications.cli || ''
    },
    images: {
      icon: images.icon
        ? `https://unpkg.com/${pkgJson.name}/${images.icon}`
        : '',
      cover: images.cover
        ? `https://unpkg.com/${pkgJson.name}/${images.cover}`
        : ''
    }
  };
}

async function getDetail(pkg) {
  const npm = await axios(NPM_REG_INFO(pkg.name));

  const currentVersion = npm.data['dist-tags'].latest;
  const currentPkg = npm.data.versions[currentVersion];
  const git = {
    isGitlab: false,
    cdn: '',
    username: '',
    project: '',
    gh: {},
    gl: {}
  };

  // Webify git url
  if (npm.data.repository && npm.data.repository.url) {
    git.url = gurl.g(npm.data.repository.url);
  }

  // Determine github username / cdn url based off repository url
  const repo = npm.data.repository || {};
  const repoUrl = typeof repo.url === 'string' ? repo.url : '';

  if (repoUrl.indexOf('github') > -1) {
    const gh = gurl.gh(git.url);
    git.cdn = `https://raw.githubusercontent.com/${gh.repo}/HEAD/`;
    git.username = gh.owner;
    git.project = gh.name;
    git.isGithub = true;
    git.gh = gh;
  }

  // Gitlab requires parsing the git url into web format, then parsing for data
  if (repoUrl.indexOf('gitlab') > -1) {
    let url = gurl.g(repoUrl);
    let isPackage = url.indexOf('/packages/') > -1;
    if (isPackage) {
      url = url.replace('packages/', '');
    }

    const gl = gurl.gl(url);
    gl.project = isPackage ? `packages/${gl.project}` : gl.project;
    git.cdn = `https://gitlab.com/${gl.user}/${gl.project}/-/raw/master/`;
    git.username = gl.user;
    git.project = gl.project;
    git.isGitlab = true;
    git.gl = gl;
  }

  // Remove initial header from readme to create nicer pages
  if (npm.data.readme) {
    let lines = npm.data.readme.split('\n');

    if (lines[0][0] === '#') {
      lines.shift();
    }

    npm.data.readme = lines.join('\n');
  }

  return {
    name: npm.data.name,
    readme: npm.data.readme,
    released: npm.data.time.created,
    repository: npm.data.repository,
    git,
    meta: {
      core: false,
      ...getPluginMeta(currentPkg)
    }
  };
}

async function getDownload(period, pkg) {
  let response;
  try {
    response = await axios(NPM_API_DWNINFO(period, pkg));
  } catch (e) {
    response = { data: { downloads: 0 } };
  }
  return response.data;
}

async function getDownloads(period, pkgs) {
  const pkgNames = pkgs.map(obj => obj.package.name);
  const bulkPkgs = pkgNames.filter(name => name[0] !== '@');
  const scopedPkgs = pkgNames.filter(name => name[0] === '@');
  const bulkQuery = bulkPkgs.join(',');
  let bulkResults = await getDownload(period, bulkQuery);

  bulkResults = bulkResults || {};

  for (var scopedName of scopedPkgs) {
    bulkResults[scopedName] = await getDownload(period, scopedName);
  }

  return bulkResults;
}

async function getDetails(pkgs) {
  const results = [];

  for (var obj of pkgs) {
    results.push(await getDetail(obj.package));
  }

  return results;
}

function buildMarkdownRenderer(pkgDetails) {
  const renderer = new marked.Renderer();
  const originalRendererImage = renderer.image.bind(renderer);

  renderer.image = (href, title, text) => {
    if (href.indexOf('://') < 0) {
      href = pkgDetails.git.cdn + href;
    }

    return originalRendererImage(href, title, text);
  };

  return renderer;
}

function buildPkg(pkg, detailsMap, downloads) {
  const details = detailsMap[pkg.name];
  const readme = marked(details.readme || '', {
    renderer: buildMarkdownRenderer(details)
  });
  const readmeRaw = details.readme;
  const meta = details.meta;

  const lastDay = downloads.lastDay[pkg.name];
  const lastWeek = downloads.lastWeek[pkg.name];
  const lastMonth = downloads.lastMonth[pkg.name];
  const lastYear = downloads.lastYear[pkg.name];

  // We do this to ensure that the date is ALWAYS of type date
  // and to avoid a GraphQL Int value too large error
  const date = new Date(pkg.date.ts);
  delete pkg.date;

  return {
    name: pkg.name,
    downloads: {
      lastDay: lastDay ? lastDay.downloads : 0,
      lastWeek: lastWeek ? lastWeek.downloads : 0,
      lastMonth: lastMonth ? lastMonth.downloads : 0,
      lastYear: lastYear ? lastYear.downloads : 0
    },
    meta,
    npm: {
      ...pkg,
      git: details.git,
      repository: details.repository,
      released: details.released,
      date,
      readme,
      readmeRaw
    }
  };
}

async function fetch(query, allowDeprecated, filter, offset, size) {
  // Fetch packages
  const pkgsResp = await axios(NPM_JS_API_SEARCH(query, size, offset), {
    headers: {
      'x-spiferack': 1
    }
  });

  const pkgs = pkgsResp.data;
  let results = pkgs.objects;

  // Filter out packages when value exists
  if (filter) {
    results = results.filter(obj => obj.package.name.indexOf(filter) > -1);
  }

  // Filter out deprecated when not allowed
  if (!allowDeprecated) {
    results = results.filter(obj => !obj.package.deprecated);
  }

  // Fetch plugin details
  // Readme, Plugin Meta Info
  const detailsResults = await getDetails(results);
  const detailsMap = {};

  for (const details of detailsResults) {
    detailsMap[details.name] = details;
  }

  // Fetch aggregated downloads for a period
  // TODO: fetch range for sparkline
  const downloadMap = {
    lastDay: await getDownloads('last-day', results),
    lastWeek: await getDownloads('last-week', results),
    lastMonth: await getDownloads('last-month', results),
    lastYear: await getDownloads(getLastYearRange(), results)
  };

  return {
    packages: results.map(obj =>
      buildPkg(obj.package, detailsMap, downloadMap)
    ),
    totalResults: pkgs.total
  };
}

module.exports = {
  getPackages: async function (
    query,
    { filter, allowDeprecated = false, perFetch = 20 }
  ) {
    let results = await fetch(query, allowDeprecated, filter, 0, perFetch);
    let pages = Math.ceil(results.totalResults / perFetch);

    if (process.env.NODE_ENV === 'development') {
      pages = 1
    }

    let page = 0;

    while (page < pages) {
      page += 1;

      let nextPage = await fetch(
        query,
        allowDeprecated,
        filter,
        page,
        perFetch
      );

      results.packages = results.packages.concat(nextPage.packages);
    }

    return results;
  }
};
