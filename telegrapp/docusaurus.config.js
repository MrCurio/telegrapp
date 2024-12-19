// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TelegrApp',
  tagline: 'Dinosaurs are shit',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrCurio', // Usually your GitHub org/user name.
  projectName: 'telegrapp', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TelegrApp',
        logo: {
          alt: 'TelegrApp Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'WhatsApp',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Contact',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Install TelegrApp',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Innexum Technologies`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    customFields: {
      installURL: "https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=https://h2kpdhe0di.execute-api.eu-north-1.amazonaws.com/Demo_API/install?appname=telegrapp&client_id=6717d4505b79c6aec3777051-m2ko6xxk&scope=conversations.readonly%20conversations.write%20conversations/message.readonly%20conversations/message.write%20conversations/reports.readonly%20locations.readonly%20workflows.readonly%20businesses.readonly%20businesses.write%20contacts.readonly%20contacts.write%20objects/schema.readonly%20objects/schema.write%20objects/record.readonly%20objects/record.write%20forms.readonly%20forms.write%20locations/customValues.readonly%20locations/customValues.write%20locations/customFields.readonly%20locations/customFields.write%20locations/tasks.readonly%20locations/tasks.write%20locations/tags.readonly%20locations/tags.write%20medias.readonly%20medias.write%20users.readonly%20users.write",
    },
};

export default config;
