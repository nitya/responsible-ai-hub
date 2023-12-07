// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Responsible AI Developer Hub',
  tagline: 'Skill up on Concepts, Tools & Practices',
  url: 'https://azure.github.io',
  baseUrl: '/',    // '/responsible-ai-hub/',

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


      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Responsible AI',

        logo: {
          alt: 'RAI Dashboard Logo',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            label: 'Welcome',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Workshops',
            position: 'left',
            items: [ 
              {
                type: 'docSidebar',
                sidebarId: 'dashboardSidebar',
                label: '1. Responsible AI Dashboard',
              },
       
              {
                type: 'docSidebar',
                sidebarId: 'contentSafetySidebar',
                label: '2. Azure Content Safety',
              },
              {
                type: 'docSidebar',
                sidebarId: 'promptFlowSidebar',
                label: '3. Azure Prompt Flow',
              }
            ],
          }, 
          {
            type: 'dropdown',
            label: 'Collections',
            position: 'right',
            items: [ 
              {
                to: '/collections',
                label: '1. Responsible AI Dashboard',
              },
            ],
          },   
          {
            href: 'https://github.com/azure/responsible-ai-hub',
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
            label: `Responsible AI Collection`,
            to: "https://aka.ms/rai-hub/collection",
          },
          {
            label: `Responsible AI Toolbox`,
            to: "https://responsibleaitoolbox.ai/",
          },
          {
            label: `AI Developer Hub`,
            to: "https://learn.microsoft.com/ai/",
          },
          {
            label: 'Azure AI Discord',
            to: 'https://discord.gg/yrTeVQwpWm',
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

      /* Banner Announcements */
      announcementBar: {
        id: 'Responsbile AI Hub Banner',
        content:
          '<a href="https://github.com/azure/responsible-ai-hub"><b> Give us a Star on GitHub</b></a> ▪️ <a href="https://aka.ms/rai-hub/collection"><b>Browse Our Learn Collection</b></a> ',
        backgroundColor: '#e3a359',
        textColor: '#000000',
        isCloseable: false,
      },

      /* Clarity Config */
      clarity: {
        ID: "k0s1hzc31a", // Instructions below
      }

    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. 
        steps: 2, // #images b/w min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      }
    ],
  ],

};

module.exports = config;
