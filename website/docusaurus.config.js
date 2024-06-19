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
  url: 'https://nitya.github.io',
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

      image: 'img/rai-hub-banner.jpeg',
      metadata: [
        {
          name: "og:title",
          content: "The #ResponsibleAI Developer Hub: Skill Up Today!",
        },
        {
          name: "og:description",
          content: 'The Responsible AI Developer Hub provides free resources for skilling up on Responsible AI Principles and Practices. Start off with our three workshops on Responsible AI Dashboard, Azure Content Safety, and Prompt Flow on Azure ML. Visit https://aka.ms/rai-hub/website' 
        },
        {
          name: "og:url",
          content: "https://aka.ms/rai-hub/website",
        },
        {
          name: "twitter:url",
          content: "https://aka.ms/rai-hub/website",
        },
        {
          name: "twitter:title",
          content: "The #ResponsibleAI Developer Hub: Skill Up Today!",
        },
        {
          name: "twitter:description",
          content: 'The Responsible AI Developer Hub provides free resources for skilling up on Responsible AI Principles and Practices. Start off with our three workshops on Responsible AI Dashboard, Azure Content Safety, and Prompt Flow on Azure ML. Visit https://aka.ms/rai-hub/website' 
        },
        {
          name: "twitter:image",
          content:
            "https://azure.github.io/responsible-ai-hub/img/rai-hub-banner.jpeg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@nitya",
        },
        {
          name: "twitter:site",
          content: "@AzureAdvocates",
        },
      ],

      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
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
            docId: 'Introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'dropdown',
            label: 'Workshops',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'dashboardSidebar',
                label: '1. Responsible AI Dashboard on Azure',
              },

              {
                type: 'docSidebar',
                sidebarId: 'contentSafetySidebar',
                label: '2. Azure Content Safety for OpenAI',
              },
              {
                type: 'docSidebar',
                sidebarId: 'promptFlowSidebar',
                label: '3. Azure Prompt Flow on AzureML',
              }
            ],
          },
          {
            type: 'doc',
            docId: 'badges',
            position: 'left',
            label: 'Earn Badges',
          },
          {
            to: '/calendar',
            position: 'right',
            label: 'Calendar',
          },
          {
            to: 'https://github.com/Azure/responsible-ai-hub/discussions',
            position: 'right',
            label: 'Discussions',
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
            label: "Privacy",
            to: "https://go.microsoft.com/fwlink/?LinkId=521839",
          },
          {
            label: 'Consumer Health Privacy',
            to: 'https://go.microsoft.com/fwlink/?linkid=2259814',
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
