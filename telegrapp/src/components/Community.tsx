import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiX, SiStackoverflow, SiDiscord } from 'react-icons/si';
import { MdOutlinePeopleAlt } from 'react-icons/md';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl" id="community">
        <div className="container">
          <SectionHeader
            color="#00A98F"
            header="Community"
            subheader="We are a community of developers who love React Native."
            icon={MdOutlinePeopleAlt}
          />
        </div>
        <div className="container">
          <div className="row margin-horiz--lg is-multiline">
            <div className="col col--4">
              <Link
                style={{
                  height: '100%',
                  backgroundColor: '#1DA1F2',
                  color: 'white',
                }} 
                href="https://discord.com/invite/e9RBHjkKHa"
                className="card shadow--md"
              > 
                <div className="card__body padding--lg">
                  <h3 className="margin-bottom--sm ">
                    <SiX fill="#fff" />
                  </h3>
                  <h4>GoHighLevel Approved</h4>
                  <b>Download our application through the official Marketplace</b>
                </div>
              </Link>
            </div>
            <div className="col col--4">
              <Link
                style={{ backgroundColor: '#5865F2', color: 'white' }}
                href="https://discord.com/invite/e9RBHjkKHa"
                className="card shadow--md"
              >
                <div className="card__body padding--lg">
                  <h3 className="margin-bottom--sm ">
                    <SiDiscord fill="#fff" />
                  </h3>
                  <h4>Easy Management</h4>
                  <b>
                    Just use Workflows to start making your business efficient
                  </b>
                </div>
              </Link>
            </div>
            <div className="col col--4">
              <Link
                style={{ backgroundColor: '#F58025', color: 'white' }}
                className="card shadow--md"
              >
                <div className="card__body padding--lg">
                  <h3 className="margin-bottom--sm ">
                    <SiStackoverflow fill="#fff" />
                  </h3>
                  <h4>The Next Boom</h4>
                  <b>
                    Telegram will be the most used RRSS, be part of the change
                  </b>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
