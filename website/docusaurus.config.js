// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Responsible AI Training',
  tagline: 'Go From Principles To Practice',
  url: 'https://azure.github.io',
  baseUrl: '/responsible-ai-hub/',

  organizationName: 'azure', 
  projectName: 'responsible-ai-hub', 
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/responsible-ai-card.jpg',

      navbar: {
        title: 'Responsible AI',
        logo: {
          alt: 'RAI Dashboard Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mySidebar',
            position: 'left',
            label: '1. Dashboard',
          },          
          {
            type: 'doc',
            docId: 'azure-content-safety/cs-intro',
            position: 'left',
            label: '2. Content Safety',
          },
          {
            type: 'doc',
            docId: 'azure-prompt-flow/pf-intro',
            position: 'left',
            label: '3. Prompt Flow',
          }, 
          //{to: 'blog', label: 'Blog', position: 'left'},         
          {            
            href: 'https://github.com/ruyakubu/rai-dashboard-workshop',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        style: 'light',
        links: [
          {
            label: `RAI Collection`,
            to: "https://aka.ms/rai-hub/collection",
          },
          {
            label: `AI Hub`,
            to: "https://learn.microsoft.com/ai/",
          },
          {
            label: '@AzureAdvocates',
            to: 'https://twitter.com/azureadvocates',
          },
          {
            label: "Privacy Statement ",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: `© ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
