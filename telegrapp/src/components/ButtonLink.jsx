import React from 'react';

const ButtonLink = ({ href, children }) => (
  <a
    href={href}
    className="button button--primary margin-vert--sm margin-right--md"
    style={{ color: 'white', textDecoration: 'none' }}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ButtonLink;
