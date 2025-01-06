import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiExpo, SiReact } from 'react-icons/si';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section id="demo">
      <div className="container">
        <SectionHeader
          color="#5c5cbd"
          header="TelegrApp Demo"
          subheader="See in action how the TelegrApp works "
          icon={SiExpo}
        />
      </div>
      <div className="container text--center  ">
        <div className="row margin-horiz--lg">
          <div className="col col--8">
          <video
            src="/img/DemoTelegrapp_red.mp4" // Path to your video file
            style={{
              width: '100%', // Make the video responsive to the column width
              borderRadius: '12px', // Softer corners
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Soft shadow effect
              overflow: 'hidden', // Ensure content respects rounded corners
            }}
            controls // Adds play/pause controls
            autoPlay={true} // Optional: Start playing automatically
            loop={true} // Optional: Loop the video
            muted={true} // Optional: Mute the video by default
          >
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="col col--4 " style={{ alignSelf: 'center' }}>
            <div className="padding-vert--lg">
              <h1>Try yourself!</h1>
              <p
                    className="p--desc"
                    style={{ lineHeight: 1.4, fontSize: '1.1rem' }}
                  >
                    <a href="https://expo.dev/client">Install now</a> the app and check how easy it is.
                  </p>
              <br />
              {/*
              <div className="padding-vert--lg hide-on-small">
                <SiReact style={{ fontSize: 128, opacity: 0.3 }} />
                <img
                  src="https://qr.expo.dev/expo-go?owner=rneui&slug=react-native-elements&releaseChannel=default&host=exp.host"
                  alt="Expo QR Code"
                  width={128}
                  className="margin-horiz--lg"
                />
                <SiExpo style={{ fontSize: 128, opacity: 0.3 }} />
              </div>
              <div>
                <Link
                  className={
                    'button button--secondary button--outline button--sm  margin-horiz--sm margin-vert--sm'
                  }
                  to={'https://expo.dev/@rneui/react-native-elements'}
                >
                  Run on Expo Go
                </Link>
                <Link
                  className={
                    'button button--secondary button--sm margin-horiz--sm margin-vert--sm'
                  }
                  to={
                    'https://github.com/react-native-elements/react-native-elements/tree/next/example'
                  }
                >
                  View on Github
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
