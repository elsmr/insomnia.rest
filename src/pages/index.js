import React from 'react';
import DownloadLink from '../components/download-link';
import DownloadButton from '../components/download-button';
import SocialCards from '../components/social-cards';
import Link from '../components/link';
import Companies from '../partials/companies';
import Helmet from 'react-helmet';
import { site as config } from '../config';

// SVGs
import iconDownload from '../assets/icons/icn-download.svg';
import logoCore from '../assets/logos/logo-core-hero-28x.svg';
import logoDesigner from '../assets/logos/logo-designer-hero-28x.svg';
import illustrationCore from '../assets/illustration-insomnia-client.svg';
import illustrationDesigner from '../assets/illustration-insomnia-designer.svg';

export default () => (
  <React.Fragment>
    <Helmet>
      <title>{config.name} | The API Design Platform and REST Client</title>
      <body data-navbar="floating" />
    </Helmet>

    <SocialCards
      title="Insomnia"
      summary="Design & Debug APIs like a human, not a robot"
      isBanner
    />

    <div className="jumbotron">
      <div className="jumbotron-inner">
        <div className="slogan container">
          <div className="row">
            <div className="col-12">
              <h1 className="font-regular">
                Design, and test APIs like a <u>human</u>, not a robot.
              </h1>
              <h2 className="font-light">
                Finally, API workflows you'll love.
              </h2>
            </div>
          </div>
        </div>

        <div className="product-offerings container">
          <div className="row">
            <div className="col-6 offering">
              <div className="graphic">
                <DownloadLink>
                  <img src={illustrationDesigner} />
                </DownloadLink>
              </div>
              <h3 className="font-regular">
                <img src={logoDesigner} className="icon" />
                <span>Insomnia Designer</span>
              </h3>
              <p>
                The Collaborative API Design Tool for designing, testing and
                managing OpenAPI specifications.
              </p>
              <DownloadButton>
                <img src={iconDownload} className="icon" alt="Download" />{' '}
                Latest Release
                <span className="badge">New</span>
              </DownloadButton>
              <p className="latest-version">
                <small>
                  <Link to={`/changelog`}>Changelog</Link>
                </small>
              </p>
            </div>

            <div className="col-6 offering">
              <div className="graphic">
                <DownloadLink>
                  <img src={illustrationCore} />
                </DownloadLink>
              </div>
              <h3 className="font-regular">
                <img src={logoCore} className="icon" />
                <span>Insomnia Core</span>
              </h3>
              <p>
                The Desktop API client for REST and GraphQL. Make requests,
                inspect responses.
              </p>
              <DownloadButton>
                <img src={iconDownload} className="icon" alt="Download" />{' '}
                Latest Release
              </DownloadButton>
              <p className="latest-version">
                <small>
                  <Link to={`/changelog`}>Changelog</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main role="main">
      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2 className="text-xl">Design, Test, and Deploy APIs</h2>
              <p>Workflows and Tools to make API Development Easier</p>
            </div>
          </div>
          <div className="row row-center-y">
            <div className="col-4">
              <img src={logoCore} className="icon icon-bg" />
              <h3 className="text-md">Create Requests</h3>
              <p>
                Quickly create and group requests, specify environment
                variables, authentication, generate code snippets, and more...
              </p>
              <p>
                <Link to={`/products/core`}>Insomnia Core &rarr;</Link>
              </p>
            </div>

            <div className="col-4">
              <img src={logoCore} className="icon icon-bg" />
              <h3 className="text-md">View Responses</h3>
              <p>
                Get all the details on responses. View the whole request
                timeline, status codes, body, headers, cookies, and more.
              </p>
              <p>
                <Link to={`/products/core`}>Insomnia Core &rarr;</Link>
              </p>
            </div>

            <div className="col-4">
              <img src={logoCore} className="icon icon-bg" />
              <h3 className="text-md">Organize Everything</h3>
              <p>
                Create workspaces, folders, environments, drag-and-drop
                requests, and easily import and export your data.
              </p>
              <p>
                <Link to={`/products/core`}>Insomnia Core &rarr;</Link>
              </p>
            </div>
          </div>

          <div className="row row-center-y">
            <div className="col-4">
              <img src={logoDesigner} className="icon icon-bg" />
              <h3 className="text-md">Design APIs</h3>
              <p>
                Create, edit, lint, debug, preview, and manage all of your
                OpenAPI specs in one collaborative API design editor.
              </p>
              <p>
                <Link to={`/products/designer`}>Insomnia Designer &rarr;</Link>
              </p>
            </div>

            <div className="col-4">
              <img src={logoDesigner} className="icon icon-bg" />
              <h3 className="text-md">Configure Gateways</h3>
              <p>
                Generate configuration for common API gateways such as the Kong
                API Gateway, and Kong for Kubernetes.
              </p>
              <p>
                <Link to={`/products/designer`}>Insomnia Designer &rarr;</Link>
              </p>
            </div>

            <div className="col-4">
              <img src={logoDesigner} className="icon icon-bg" />
              <h3 className="text-md">Deploy Specs</h3>
              <p>
                Sync your API designs with source control such as Github /
                Gitlab, and deploy directly to API Gateways such as Kong with
                one click.
              </p>
              <p>
                <Link to={`/products/designer`}>Insomnia Designer &rarr;</Link>
              </p>
            </div>
          </div>
          <div className="row row-center-y">
            <div className="col-4">
              <img src={logoDesigner} className="icon icon-bg" />
              <h3 className="text-md">Test APIs</h3>
              <p>
                Write unit tests for your Insomnia debug requests using
                JavaScript, to be ran in app or terminal using Inso.
              </p>
              <p>
                <Link to={`/products/designer`}>Insomnia Designer &rarr;</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="light no-margin padding-bottom-lg padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2>More than 800,000 developers trust Insomnia</h2>
              <div className="padding-top">
                <Companies />
                <br />
                <br />
                <DownloadButton className="button--big">
                  Download
                </DownloadButton>
                &nbsp;&nbsp;
                <Link
                  to="/teams"
                  className="button button--big button--no-outline">
                  Teams Edition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark no-margin padding-bottom-lg padding-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-12 center">
              <h2 className="text-xl">Still not convinced?</h2>
              <p>Maybe this big ol' list of features will help</p>
            </div>
          </div>
          <div className="row feature-list">
            <div className="col-6">
              <ul>
                <li>
                  <span className="badge--new">New</span>{' '}
                  <Link to="/grpc/">gRPC</Link> support
                </li>
                <li>
                  <Link to="/graphql/">GraphQL</Link> support
                </li>
                <li>OAuth 1.0 and 2.0 auth</li>
                <li>Multipart form builder</li>
                <li>Query parameter builder</li>
                <li>Plugin System</li>
                <li>SSL client certificates</li>
                <li>JSONPath and XPath</li>
                <li>Response history</li>
                <li>Data import/export</li>
                <li>Rendered HTML preview</li>
                <li>Image and SVG preview</li>
                <li>AWS authentication</li>
                <li>Configurable proxy</li>
                <li>Color themes</li>
                <li>Cloud sync and sharing</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Import from <code style={{ color: '#333' }}>curl</code>
                </li>
                <li>Digest, Basic, NTLM Auth</li>
                <li>Nunjucks templating</li>
                <li>Configurable timeout</li>
                <li>HAR import</li>
                <li>Swagger import</li>
                <li>Request filtering</li>
                <li>Toggle SSL validation</li>
                <li>Keyboard shortcuts</li>
                <li>Usable at almost all sizes</li>
                <li>NTLM authentication</li>
                <li>Responsive interface</li>
                <li>Autocomplete Hints</li>
                <li>Redirect chain visualization</li>
                <li>Mac, Windows and Linux</li>
              </ul>
            </div>
          </div>
          <br />
          <div className="center">
            <p>Go on, give it a try. You won't regret it.</p>
            <br />
            <DownloadButton className="button--big" />
          </div>
          <br />
        </div>
      </section>
    </main>
  </React.Fragment>
);
