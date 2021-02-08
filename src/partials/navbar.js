import React from 'react';
import Link from '../components/link';
import { site, menus } from '../config';
import iconSrc from '../assets/logos/logo-32x--insomnia-core.svg';

class Navbar extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-12 navbar__container items-center">
              <div className="flex flex-row">
                <Link to="/" className="navbar__icon">
                  <img src={iconSrc} alt="Insomnia REST Client" />
                </Link>

                <Link to="/" className="navbar__title">
                  <h1>{site.shortName}</h1>
                </Link>
              </div>

              <ul className="navbar__items navbar__items-center">
                {menus.header.center
                  .map(item => (
                    <li key={item.key} data-menu-item={item.key}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  ))}
              </ul>

              <ul className="navbar__items">
                {menus.header.right
                  .map(item => (
                    <li key={item.key} data-menu-item={item.key}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                  ))}

                  <li data-menu-item="download">
                    <div>
                      <Link to={'/pricing'} className="button">
                        Get Started
                      </Link>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
