import Link from '@docusaurus/Link';
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { SiX } from 'react-icons/si';

export default function () {
  const { colorMode } = useColorMode();
  const darkFooter = colorMode === 'dark' ? 'footer-dark' : '';
  return (
    <footer
      className={'footer text--sm ' + darkFooter}
    >
      <div className="container container-fluid">
        <div className="row footer__links">

          <div className="col footer__col">
            <div className="footer__title"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Documentation</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/welcome">
                  Introduction to TelegrApp
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/Getting Started/HowToInstall.md">
                  How to Install
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/Getting Started/TriggersActions.md">
                  Triggers & Actions
                </a>
              </li>
            </ul>
          </div>

          <div className="col footer__col">
            <div className="footer__title">FAQs</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/FAQ/Messages">
                  Messages
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/FAQ/Services">
                  Services
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link-item" href="/docs/FAQ/Subscriptions">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col footer__col">
            <div className="footer__title">About Us</div>
            <ul className="footer__items clean-list">
              <li className="footer__item">
                <a
                  href="https://discord.com/invite/e9RBHjkKHa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  Contact
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://twitter.com/rn_elements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link-item"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

        </div>
        <div className="footer__bottom text--center">
          <div className="margin-bottom--sm">
            <Link
              to="https://twitter.com/rn_elements"
              className="button button--primary button--md  margin-horiz--sm margin-vert--sm "
              style={{ backgroundColor: '#1DA1F2', color: 'white' }}
            >
              Follow us on Twitter <SiX />
            </Link>
            <Link
              to="https://github.com/sponsors/react-native-elements"
              className="button button--secondary button--outline button--md margin-horiz--sm margin-vert--sm "
            >
              Sponsor us
              <svg
                style={{ margin: '0 5px -3px 8px ' }}
                width={16}
                fill="#EA4AAA"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Sponsor us</title>
                <path d="M17.625 1.499c-2.32 0-4.354 1.203-5.625 3.03-1.271-1.827-3.305-3.03-5.625-3.03C3.129 1.499 0 4.253 0 8.249c0 4.275 3.068 7.847 5.828 10.227a33.14 33.14 0 0 0 5.616 3.876l.028.017.008.003-.001.003c.163.085.342.126.521.125.179.001.358-.041.521-.125l-.001-.003.008-.003.028-.017a33.14 33.14 0 0 0 5.616-3.876C20.932 16.096 24 12.524 24 8.249c0-3.996-3.129-6.75-6.375-6.75zm-.919 15.275a30.766 30.766 0 0 1-4.703 3.316l-.004-.002-.004.002a30.955 30.955 0 0 1-4.703-3.316c-2.677-2.307-5.047-5.298-5.047-8.523 0-2.754 2.121-4.5 4.125-4.5 2.06 0 3.914 1.479 4.544 3.684.143.495.596.797 1.086.796.49.001.943-.302 1.085-.796.63-2.205 2.484-3.684 4.544-3.684 2.004 0 4.125 1.746 4.125 4.5 0 3.225-2.37 6.216-5.048 8.523z" />
              </svg>
            </Link>
          </div>
          {/* <div className="margin-bottom--sm">
            <img
              src="/img/logo.png"
              alt=""
              className="themedImage_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module themedImage--dark_node_modules-@docusaurus-theme-classic-lib-next-theme-ThemedImage-styles-module footer__logo"
            />
          </div> */}
        {/* Add the attribution statement */}
        <p style={{ marginTop: '20px', fontSize: 'small', color: '#666' }}>
            Icons provided by <a href="https://remixicon.com/" target="_blank" rel="noopener noreferrer">Remix Icon</a>. Telegram and its logo are trademarks of Telegram FZ-LLC.
          </p>
        </div>
      </div>
      <div className="text--center"></div>
    </footer>
  );
}
