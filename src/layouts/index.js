import React from 'react';
import Helmet from 'react-helmet';
import './styles/index.less';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';
import Title from '../partials/title';
import { site } from '../config';
import { parse as urlParse } from 'url';

import Link from '../components/link';
import AnnouncementBar from '../components/announcement-bar';

export default class extends React.Component {
  state = {};

  componentDidMount() {
    this.trackSignupSource();
  }

  trackSignupSource() {
    const url = urlParse(document.location.href, true);

    // Override signup source with ref non matter what
    if (url.query.ref) {
      localStorage.signupSource = url.query.ref;
      return;
    }

    // Fallback to referrer but don't track self-referrals. Also don't set referrer
    // if signupSource already exists. We don't want to accidentally overwrite the ref
    if (
      !localStorage.signupSource &&
      document.referrer &&
      document.referrer.indexOf('https://insomnia.rest') !== 0
    ) {
      localStorage.signupSource = document.referrer;
    }
  }

  render() {
    const { children, location } = this.props;
    return (
      <React.Fragment>
        <Title />
        <Helmet>
          <meta name="description" content={site && site.description} />
          <body data-pathname={location.pathname} />
        </Helmet>
        <AnnouncementBar>
          <Link to="/blog/sunsetting-legacy-sync/">
            Legacy Sync is going away! &rarr;
          </Link>
        </AnnouncementBar>
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}
