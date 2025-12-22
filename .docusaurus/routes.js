import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/chat',
    component: ComponentCreator('/chat', '07b'),
    exact: true
  },
  {
    path: '/LayoutWrapper',
    component: ComponentCreator('/LayoutWrapper', 'd48'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd20'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f97'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2b3'),
            routes: [
              {
                path: '/docs/chapter-1-introduction/chapter',
                component: ComponentCreator('/docs/chapter-1-introduction/chapter', 'f84'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/chapter-2-foundations/chapter',
                component: ComponentCreator('/docs/chapter-2-foundations/chapter', '7c3'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/chapter-3-human-design/chapter',
                component: ComponentCreator('/docs/chapter-3-human-design/chapter', 'b21'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/chapter-4-perception/chapter',
                component: ComponentCreator('/docs/chapter-4-perception/chapter', '0fd'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/chapter-5-ai-control/chapter',
                component: ComponentCreator('/docs/chapter-5-ai-control/chapter', 'e8c'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/chapter-6-locomotion/chapter',
                component: ComponentCreator('/docs/chapter-6-locomotion/chapter', '3ff'),
                exact: true,
                sidebar: "textbook"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '70e'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '315'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f86'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '9f6'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'b91'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '272'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
