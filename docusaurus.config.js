// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Morphism docs – The Optimistic zkEVM Scaling Solution docs',
  tagline: '',
  favicon: 'https://www.morphism.xyz/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.morphism.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'morphism labs', // Usually your GitHub org/user name.
  projectName: 'morphism docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/morphism-labs/morphism-doc/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/morphism-labs/morphism-doc/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'Morphism,EVM-equivalent,Optimistic,zkEVM'}],
      algolia: {
        // The application ID provided by Algolia
        appId: 'X5WFC1AF7V',
  
        // Public API key: it is safe to commit it
        apiKey: 'd727e463b46c13b8524d8f6c9fd58894',
  
        indexName: 'morphism_docs',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'morphism\\.xyz|morphism\\.xyz',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Morphism Doc Logo',
          src: 'img/index/logo_dark.svg',
          srcDark: 'img/index/logo_light.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            docId: 'quick-start/startintro',
            label: 'Quick Start',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'How Morphism Works/howintro',
            label: 'How Morhsim works',
          },
          {
            type: 'doc',
            position: 'right',
            docId: 'Build on Morphism/devintro',
            label: 'Build on Morphism',
          },
          // {label: 'Website', position: 'left', href: 'https://www.morphism.xyz',},
          /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        links: [
          {
            title: 'Morphism',
            items: [
              {
                label: 'About',
                to: 'https://www.morphism.xyz/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Morphism_EN',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/@Morphism_EN',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Morphism. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
