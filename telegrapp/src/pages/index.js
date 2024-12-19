import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Left Side: Text Content */}
          <div className={styles.textContent}>
            <Heading as="h1" className="hero__title">
              TelegrApp
            </Heading>
            <p className="hero__subtitle">Dinosaurs are amazing!</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/blog"
              >
                Get TelegrApp Now!
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className={styles.imageContainer}>
            <img
              src={require('@site/static/img/woman1.png').default}
              alt="Example image"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
