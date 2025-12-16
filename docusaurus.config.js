// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics – Essentials',
  tagline: 'An AI-native textbook on Physical AI & Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Handle broken images gracefully
  markdown: {
    mermaid: true,
    mdx1Compat: {
      'comments': false,
      'admonitions': true,
      'headingIds': true,
    },
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://robotic-book-plum.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Muhammad92Adnan', // Usually your GitHub org/user name.
  projectName: 'Robotic-Book', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn'
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Muhammad92Adnan/Robotic-Book/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Webpack configuration to handle images better
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Textbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'chapter-1-introduction/chapter',
            position: 'left',
            label: 'Textbook',
          },
          {
            to: '/chat',
            label: 'AI Tutor',
            position: 'left',
          },
          {
            href: 'https://github.com/Muhammad92Adnan/Robotic-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Introduction',
                to: '/docs/chapter-1-introduction/chapter',
              },
              {
                label: 'Foundations',
                to: '/docs/chapter-2-foundations/chapter',
              },
              {
                label: 'Human Design',
                to: '/docs/chapter-3-human-design/chapter',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Muhammad92Adnan/Robotic-Book',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics – Essentials. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.okaidia, // Changed to a more attractive theme
        darkTheme: prismThemes.dracula,
      },
      // Custom theme settings
      announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you like this textbook, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Muhammad92Adnan/Robotic-Book">GitHub</a>!',
        backgroundColor: '#25c2a0',
        textColor: '#fff',
        isCloseable: true,
      },
    }),
};

export default config;
