import React from 'react';
import classnames from 'classnames';
import Link from './link';

const LINKS = {
  'com.insomnia.app': {
    mac:
      'https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.app',
    win:
      'https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.app',
    other: '/download/core/?'
  },
  'com.insomnia.designer': {
    mac:
      'https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.designer',
    win:
      'https://updates.insomnia.rest/downloads/windows/latest?app=com.insomnia.designer',
    other: '/download/designer/?'
  }
};

const NAMES = {
  'com.insomnia.app': 'Insomnia Core',
  'com.insomnia.designer': 'Insomnia Designer'
};

class DirectDownloadButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platform: '__UNSET__',
      ref: ''
    };
  }

  componentDidMount() {
    const ref = encodeURIComponent(localStorage.signupSource || '');
    const isMobile = window.innerWidth <= 800 && window.innerHeight <= 600;
    this.setState({
      ref,
      platform: isMobile ? 'Mobile' : navigator.platform.toLowerCase()
    });
  }

  getDownloadInfo() {
    const { platform } = this.state;
    const { app } = this.props;

    let download = {};

    if (platform.indexOf('mac') !== -1) {
      download.platformName = 'Mac';
      download.link = LINKS[app].mac;
    } else if (platform.indexOf('win') !== -1) {
      download.platformName = 'Windows';
      download.link = LINKS[app].win;
    } else {
      download.platform = 'Unknown';
      download.link = LINKS[app].other;
    }

    return download;
  }

  render() {
    const { ref } = this.state;
    const { className, children, app } = this.props;

    const downloadInfo = this.getDownloadInfo();
    const appName = NAMES[app];

    let message = 'Download for Desktop';
    if (children) {
      message = children;
    } else if (downloadInfo.platformName) {
      message = `${appName} for ${downloadInfo.platformName}`;
    }

    return (
      <div>
        <Link
          to={`${downloadInfo.link}&ref=${ref}`}
          event={{
            category: `Download (${appName})`,
            action: `${downloadInfo.platformName}`,
            label: message
          }}
          className={classnames('button', className)}>
          {message}
        </Link>
        <br />
        <div className="small pt-4">
          Not your OS? <Link to={LINKS[app].other}>All Downloads</Link>
        </div>
      </div>
    );
  }
}

export default DirectDownloadButton;
