import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GlobalLink({ children }) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <a href={siteConfig.customFields.installURL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
