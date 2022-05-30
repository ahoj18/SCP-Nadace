// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SCP Nadace',
  tagline: 'Dokumentace SCP Nadace',
  url: 'https://scpnadace.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://tr.rbxcdn.com/79eb47e4d93e668d4151420a62e0bea2/150/150/Image/Png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SCP-Nadace', // Usually your GitHub org/user name.
  projectName: 'scp-nadace', // Usually your repo name.

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
            'https://github.com/ahoj18/SCP-Nadace/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ahoj18/SCP-Nadace/tree/master/blog',
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
      navbar: {
        title: 'SCP Nadace',
        logo: {
          alt: 'SCP Nadace',
          src: 'https://tr.rbxcdn.com/79eb47e4d93e668d4151420a62e0bea2/150/150/Image/Png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Etický Kodex',
          },
          {to: '/blog', label: 'Aktuality:', position: 'left'},
          {
            href: 'https://www.roblox.com/groups/8961727/SCP-Nadace#!/about',
            label: 'Group',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentace:',
            items: [
              {
                label: 'Etický Kodex',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Odkazy:',
            items: [
              {
                label: 'ROBLOX Skupina:',
                href: 'https://www.roblox.com/groups/8961727/SCP-Nadace#!/about',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/vDRe4M5Fjk',
              },
            ],
          },
          {
            title: 'Ostatní:',
            items: [
              {
                label: 'Aktuality:',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SCP Nadace`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
