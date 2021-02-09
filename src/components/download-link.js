import React from 'react';
import classnames from 'classnames';
import { links } from '../config';
import Link from './link';

class DownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: '__UNSET__'
    };
  }

  componentDidMount() {
    const isMobile = window.innerWidth <= 800 && window.innerHeight <= 600;
    this.setState({
      platform: isMobile ? 'Mobile' : navigator.platform.toLowerCase()
    });
  }

  render() {
    const { platform } = this.state;
    const { className, children } = this.props;

    let href = links.download;

    let platformName = 'Desktop';
    if (platform.indexOf('mac') !== -1) {
      platformName = 'Mac';
      href = '/download/#mac';
    } else if (platform.indexOf('win') !== -1) {
      platformName = 'Windows';
      href = '/download/#windows';
    } else if (platform.indexOf('linux') !== -1) {
      platformName = 'Ubuntu';
      href = '/download/#linux';
    }

    const message = children || `Download for ${platformName}`;

    return (
      <Link to={href} className={classnames(className)}>
        {message}
      </Link>
    );
  }
}

export default DownloadButton;
