const siteMetadata = {
  title: 'Insomnia',
  description:
    'A powerful REST API Client with cookie management, ' +
    'environment variables, code generation, and authentication for Mac, ' +
    'Window, and Linux',
  siteUrl: 'https://insomnia.rest/',
  shortName: 'Insomnia',
  name: 'Insomnia',
  author: 'Gregory Schier',
  copyright: 'Kong, Inc.',
  copyrightURL: 'https://floatingkeyboard.com'
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-npm-plugin',
      options: {
        query: 'insomnia',
        filter: 'insomnia-plugin-',
        perFetch: 20
      }
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        theme: {
          // Override Less variables here
        }
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'changelog',
        path: `${__dirname}/content/changelog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page',
        path: `${__dirname}/content/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`
      }
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Insomnia REST Client',
        short_name: 'Insomnia',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#675BC0',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup: function setup({ query }) {
          const { site, ...rest } = query;
          // NOTE: We should be getting siteMetadata from the query results
          // but the feed plugin is too shitty to work with multiple feeds.
          // Check on this later

          return {
            ...siteMetadata,
            ...rest
          };
        },
        feeds: [feedOptions('blog'), feedOptions('changelog')]
      }
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'eqIeHoa1lca59RxSJxVkX4KZcjkCiOxk',
        devKey: 'ElyV0mC4kgulsMKddO4CmcOn4MQeVFFb',
        trackPage: true,
        trackPageDelay: 0
      }
    }
  ]
};

function feedOptions(name) {
  return {
    output: `/${name}/index.xml`,
    site_url: siteMetadata.siteUrl,
    title: 'Insomnia Feed',
    serialize: result => {
      const {
        query: { site, allFile }
      } = result;
      // NOTE: We should be getting siteMetadata from the query results
      // but the feed plugin is too shitty to work with multiple feeds.
      // Check on this later
      return allFile.edges
        .sort((a, b) => {
          const tsA = new Date(a.node.childMarkdownRemark.frontmatter.date);
          const tsB = new Date(b.node.childMarkdownRemark.frontmatter.date);
          return tsB.getTime() - tsA.getTime();
        })
        .map(({ node: { childMarkdownRemark: { html, frontmatter } } }) => {
          let urlPath = `${name}/${frontmatter.slug}`;

          if (frontmatter.app === 'com.insomnia.app') {
            urlPath = `${name}/core/${frontmatter.slug}`;
          } else if (frontmatter.app === 'com.insomnia.designer') {
            urlPath = `${name}/designer/${frontmatter.slug}`;
          }

          return {
            ...frontmatter,
            description: html,
            url: siteMetadata.siteUrl + urlPath,
            guid: urlPath
          };
        });
    },
    query: `
      {
        allFile(filter: {sourceInstanceName: {eq: "${name}"}}) {
          edges {
            node {
              childMarkdownRemark {
                html
                frontmatter {
                  app
                  date
                  slug
                  title
                }
              }
            }
          }
        }
      }
    `
  };
}
