import React from 'react';
import { graphql } from 'gatsby';
import DownloadButton from '../components/download-button';
import SocialCards from '../components/social-cards';
import Title from '../partials/title';
import Img from 'gatsby-image';
import Link from '../components/link';
import Companies from '../partials/companies';

// SVGs & Gifs
import iconDownload from '../assets/icons/icn-download.svg';
import grpcUnaryGif from '../assets/screens/grpc-unary.gif';
import grpcClientStreamingGif from '../assets/screens/grpc-client-streaming.gif';
import grpcServerStreamingGif from '../assets/screens/grpc-server-streaming.gif';
import grpcBidiGif from '../assets/screens/grpc-bidi.gif';

export default ({ data }) => (
  <React.Fragment>
    <Title>gRPC Desktop Client</Title>
    <SocialCards
      title="gRPC + Insomnia | Get Started Today!"
      summary="Rapidly debug gRPC services with the cross-platform Insomnia API client!"
      isBanner
    />

    <header className="header--wide">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1>Insomnia + gRPC</h1>
            <p className="subheader">
              <strong>The most advanced API client just learned gRPC.</strong>{' '}
              Define gRPC service calls along with HTTP, REST and GraphQL, and
              easily share them across devices and with team members.
            </p>
            <DownloadButton className="button-download">
              <img src={iconDownload} className="icon" alt="Download" /> Start
              Free Today!
            </DownloadButton>
            <p className="latest-version">
              <small>
                <Link to={`https://support.insomnia.rest/article/145-grpc`}>
                  Documentation &rarr;
                </Link>
              </small>
            </p>
          </div>
          <div className="col-5">
            <Img sizes={data.grpcLogo.childImageSharp.sizes} alt="gRPC Logo" />
          </div>
        </div>
      </div>
    </header>

    <main role="main">
      <section className="no-margin padding-top-lg padding-bottom-lg">
        <div className="container container--statement">
          <div className="row text-center">
            <div className="col-12">
              <h3 className="text-xl">Design APIs?</h3>
              <p>
                Check out{' '}
                <strong>
                  <a href="/products/designer">Insomnia Designer</a>
                </strong>
                , and start documenting your APIs using OpenAPI today.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-center-y">
            <div className="col-7">
              <img src={grpcUnaryGif} alt="gRPC Unary Animation" />
            </div>
            <div className="col-5">
              <h3 className="text-xl">Unary Support</h3>
              <p>
                Define and send gRPC calls directly from Insomnia just like you
                would REST, or GraphQL requests.{' '}
                <Link to="https://support.insomnia.rest/article/145-grpc#unary">
                  Learn more &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Client Streaming Support</h3>
              <p>
                Define and intiate a gRPC client stream by sending multiple
                messages directly from Insomnia to your gRPC services.{' '}
                <Link to="https://support.insomnia.rest/article/145-grpc#client-streaming">
                  Learn more &rarr;
                </Link>
              </p>
            </div>
            <div className="col-7">
              <img
                src={grpcClientStreamingGif}
                alt="gRPC Client Streaming Animation"
              />
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-7">
              <img
                src={grpcServerStreamingGif}
                alt="gRPC Server Streaming Animation"
              />
            </div>
            <div className="col-5">
              <h3 className="text-xl">Server Streaming Support</h3>
              <p>
                Define and intiate a gRPC server stream by sending and recieving
                multiple messages directly from Insomnia API Client.{' '}
                <Link to="https://support.insomnia.rest/article/145-grpc#server-streaming">
                  Learn more &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-5">
              <h3 className="text-xl">Bi-Directional Streaming Support</h3>
              <p>
                Define and intiate a gRPC bi-directional stream by sending and
                recieving multiple messages seamlessly from Insomnia API Client.{' '}
                <Link to="https://support.insomnia.rest/article/145-grpc#bidirectional-streaming">
                  Learn more &rarr;
                </Link>
              </p>
            </div>
            <div className="col-7">
              <img
                src={grpcBidiGif}
                alt="gRPC Bi-Directional Streaming Animation"
              />
            </div>
          </div>
          <div className="row row-center-y padding-top">
            <div className="col-7">
              <Img
                sizes={data.grpcTlsSupport.childImageSharp.sizes}
                alt="gRPC TLS Support"
              />
            </div>
            <div className="col-5">
              <h3 className="text-xl">TLS Support</h3>
              <p>
                Make calls against gRPC services secured by SSL / TLS.{' '}
                <Link to="https://support.insomnia.rest/article/145-grpc#tls">
                  Learn more &rarr;
                </Link>
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
                  Download App
                </DownloadButton>
                &nbsp;&nbsp;
                <Link
                  to="/teams"
                  className="button button--big button--no-outline">
                  Team Edition
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

export const pageQuery = graphql`
  query GatsbyImageQueryGrpc {
    grpcTlsSupport: file(relativePath: { eq: "screens/grpc-tls-support.png" }) {
      childImageSharp {
        sizes(maxWidth: 880) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    grpcLogo: file(relativePath: { eq: "screens/grpc-horizontal-color.png" }) {
      childImageSharp {
        sizes(maxWidth: 800) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`;
