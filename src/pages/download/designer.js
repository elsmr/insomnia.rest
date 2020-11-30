import React from 'react';
import SocialCards from '../../components/social-cards';
import Contributors from '../../partials/contributors';
import Title from '../../partials/title';
import Link from '../../components/link';
import DownloadIcon from '../../components/download-icon';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: ''
    };
  }

  componentDidMount() {
    const ref = encodeURIComponent(localStorage.signupSource || '');
    this.setState({ ref });
  }

  render() {
    const { ref } = this.state;

    const coreMacLink = `https://updates.insomnia.rest/downloads/mac/latest?ref=${ref}&app=com.insomnia.designer&source=website`;
    const coreWinLink = `https://updates.insomnia.rest/downloads/windows/latest?ref=${ref}&app=com.insomnia.designer&source=website`;
    const coreLinuxLink = `https://updates.insomnia.rest/downloads/ubuntu/latest?ref=${ref}&app=com.insomnia.designer&source=website`;

    return (
      <React.Fragment>
        <Title>Download</Title>
        <SocialCards
          title="Downloads | Insomnia"
          summary="Download Insomnia Applications"
          isBanner
        />
        <div className="row">
          <article className="col-12">
            <header className="container header--big">
              <div className="row">
                <div className="col-12">
                  <h1>Download Insomnia Designer</h1>
                  <p className="text-lg">Collaborative API Design Editor</p>
                </div>
              </div>
            </header>
            <section className="container padding-bottom">
              <div className="row center">
                <div className="col-4 platform-download padding-bottom">
                  <i className="platform-download__icon apple" />
                  <p>
                    <Link
                      to={coreMacLink}
                      event={{
                        event: `App Download`,
                        properties: {
                          app: 'Insomnia Designer',
                          platform: 'Mac',

                          // For GA
                          category: `Download (Insomnia Designer)`,
                          label: `Insomnia Designer for Mac`
                        }
                      }}
                      className="button">
                      <DownloadIcon /> macOS 10.12+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    or <code>brew cask install insomnia-designer</code>
                  </p>
                </div>
                <div className="col-4 platform-download padding-bottom">
                  <i className="platform-download__icon windows" />
                  <p>
                    <Link
                      to={coreWinLink}
                      event={{
                        event: `App Download`,
                        properties: {
                          app: 'Insomnia Designer',
                          platform: 'Windows',

                          // For GA
                          category: `Download (Insomnia Designer)`,
                          label: `Insomnia Designer for Windows`
                        }
                      }}
                      className="button">
                      <DownloadIcon /> Windows 7+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    (64-bit only)
                  </p>
                </div>
                <div className="col-4 platform-download padding-bottom">
                  <i className="platform-download__icon linux bg-linux" />
                  <p>
                    <Link
                      to={coreLinuxLink}
                      event={{
                        event: `App Download`,
                        properties: {
                          app: 'Insomnia Designer',
                          platform: 'Linux',

                          // For GA
                          category: `Download (Insomnia Designer)`,
                          label: `Insomnia Designer for Linux`
                        }
                      }}
                      className="button">
                      <DownloadIcon /> Ubuntu 14.04+
                    </Link>
                  </p>
                  <p
                    className="subtle small"
                    style={{ maxWidth: '12rem', margin: 'auto' }}>
                    or <code>sudo snap install insomnia-designer</code>
                    or view&nbsp;
                    <Link
                      to="https://support.insomnia.rest/article/90-installation#linux"
                      event={{
                        event: `App Download`,
                        properties: {
                          app: 'Insomnia Designer',
                          platform: 'Linux (Other)',

                          // For GA
                          category: `Download (Insomnia Designer)`,
                          label: `Insomnia Designer for Linux (Other Methods)`
                        }
                      }}>
                      other methods
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
        <Contributors />
      </React.Fragment>
    );
  }
}
