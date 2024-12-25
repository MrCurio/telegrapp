import React from 'react';
import '../../static/css/components.css';
import Link from '@docusaurus/Link';
import {
  MdOutlineDevices,
  MdCode,
  MdEdit,
  MdAccessibleForward,
  MdPeopleOutline,
} from 'react-icons/md';
import { IconTag } from './IconTag';

type FeatureTypes = {
  title: string;
  description: string;
  img?: ({ ...props }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
};

const features: FeatureTypes[] = [
  {
    title: 'Easy to use',
    description:
      `You can start using our service right away. Just press in any Install Now button and follow
      the steps of our form. Just like that, you are using Telegram from your GoHighLevel account.`,
    img: MdOutlineDevices,
    color: '#894cff',
  },
  {
    title: 'Increase Opportunities',
    description:
      `Through automated tasks like posting in channels, bulk messaging or adding contacts to groups, 
      you will not only increase your business leads, but also create fidelity programs.`,
    img: MdCode,
    color: '#ff5381',
  },
  {
    title: 'Customizable',
    description: `Flexibility and customization are characteristics businesses use for 
    making their brand and products more personal and unique. Telegram helps with this,
    as it is the messaging service most customizable of all.`,
    img: MdEdit,
    color: '#00b85c',
  },
];

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section className="" id="features">
      <div className="container text--center">
        <h1 className="hero__title gradient clip-text">
          Why use TelegrApp?
        </h1>
        {/* <div>
            <Link
              className={'margin-horiz--md margin-vert--sm heroButton'}
              to={
                'https://github.com/react-native-elements/react-native-elements/stargazers'
              }
            >
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/react-native-elements/react-native-elements?color=white&label=Github%20Stars&logo=github&style=for-the-badge"
              />
            </Link>
            <Link
              className={'margin-horiz--md margin-vert--sm heroButton'}
              to={
                'https://github.com/react-native-elements/react-native-elements/stargazers'
              }
            >
              <img
                alt="npm"
                src="https://img.shields.io/npm/dm/react-native-elements?color=white&label=installs&logo=npm&style=for-the-badge"
              />
            </Link>
          </div> */}

        {/* <div className="row">
            <div className="col col--10 ">
              <p className="p--desc margin-vert--md">
                React Native Elements is an implementation of the Material
                Design System. The framework contains a set of general-purpose
                UI components styled in a similar way. The most awesome thing
                about is that the themes can be changed in the runtime without
                reloading the application. This way, you may easily focus on
                business logic, while we take care of the visual appearance of
                your product.
              </p>
            </div>
          </div> */}
      </div>
      <div className="container">
        <div className="row is-multiline">
          {features.map(({ title, description, img, color }, index) => (
            <div className="col col--4" key={index}>
              <Link className="card shadow--md" style={{ height: '100%' }}>
                <div className="card__body">
                  <h4 className="gradient clip-text inline-flex-center">
                    <IconTag
                      icon={img}
                      color={color}
                      style={{ marginRight: 8 }}
                    />
                    <span>{title}</span>
                  </h4>
                  <p
                    className="p--desc"
                    style={{ lineHeight: 1.4, fontSize: '1rem' }}
                  >
                    {description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
