import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SiReact, SiIos } from 'react-icons/si';
import { FaTelegramPlane } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import {
  MdLaptopMac,
  MdAndroid,
  MdAccessibleForward,
  MdInvertColors,
} from 'react-icons/md';

const Home: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  // Define positions for each icon
  const positions = [
    { left: 80, top: '20%' },
    { bottom: 200, right: '5%' },
    { left: 20, top: '70%' },
    { right: '40%', bottom: 90 },
    { left: '40%', top: 180 },
    { right: 270, top: 140 },
  ];
  return (
    <section>
      <header className="hero">
        <div className="container  padding-vert--xl">
          <div
            className="row padding-vert--md"
            style={{ alignItems: 'center' }}
          >
            <div className="col col--3 col--offset-1">
              <RiTelegram2Fill className="rne-hero-logo" size={300} color="#0088cc" />
            </div>
            <div className="col col--6 col--offset-1">
              <h1 className="hero__title">
                Introducing <span className="gradient clip-text">TelegrApp</span>
              </h1>
              <h3 className="">
                A new GoHighLevel integration for Telegram
              </h3>
              <div>
                <Link
                  className={
                    'button button--primary margin-vert--sm margin-right--md '
                  }
                  style={{ color: 'white' }}
                  to={useBaseUrl('/docs/welcome')}
                >
                  Install Now
                </Link>

                <Link
                  className={
                    'button button--secondary button--outline margin-vert--sm heroButton margin-right--md'
                  }
                  to={'https://github.com/sponsors/react-native-elements'}
                >
                  More Information
                </Link>
                <Link
                  className={
                    'button button--secondary button--outline  margin-vert--sm heroButton margin-right--md'
                  }
                  to={'https://react-native-elements.js.org'}
                >
                  Quick Setup Guide
                </Link>
              </div>
              {/* Dynamically render the FaTelegramPlane icons */}
              {positions.map((style, index) => (
                <div key={index} className="ball" style={style}>
                  <FaTelegramPlane />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <svg
        className="hero-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
      >
        <path
          fill-opacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      {/* <div className="bubble bubble-left gradient" /> */}
    </section>
  );
};

export default Home;
