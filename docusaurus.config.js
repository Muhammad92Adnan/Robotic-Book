// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics – Essentials',
  tagline: 'An AI-native textbook on Physical AI & Humanoid Robotics',
  favicon: 'img/favicon.ico',

  url: 'https://robotic-book-plum.vercel.app',
  baseUrl: '/',

  organizationName: 'Muhammad92Adnan',
  projectName: 'Robotic-Book',

  onBrokenLinks: 'warn',
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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Muhammad92Adnan/Robotic-Book/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        theme: prismThemes.okaidia,
        darkTheme: prismThemes.dracula,
      },
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
