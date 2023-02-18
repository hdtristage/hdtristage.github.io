// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HeidelbergMan',
  tagline: 'Heartbrake Triathlon',
  url: 'https://www.heidelbergman.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heidelbergman-de', // Usually your GitHub org/user name.
  projectName: 'heidelbergman-de', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  customFields: {
    startDate: 'Start am 16.07.2023 um 9.00 Uhr',
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
          // editUrl: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io/tree/main',
        },
        blog: {
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: false,
          blogSidebarTitle: 'Neuigkeiten',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: { // wird evt. im Juli 2023 obsolete
          trackingID: 'UA-27838255-1',
          anonymizeIP: true,
        },
        gtag: { // Google Analytics 4 (ab 2023)
          trackingID: 'G-Q2HWYNEFG9',
          anonymizeIP: true,
        },

      }),

    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'Announcement',
        content:
          'Die Anmeldung für den HeidelbergMan 2023 öffnet im Früjahr. Der genaue Termin ist noch nicht bekannt.',
        backgroundColor: '#d0d0d0',
        textColor: '#e21918',
        isCloseable: false,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'HeidelbergMan',
        logo: {
          alt: 'HeidelbergMan Logo',
          src: '/img/logo/HeidelbergMan-Logo.png',
        },
        items: [
          { to: '/blog', label: 'News', position: 'left' },
          {
            type: 'dropdown',
            label: 'Wettkampf',
            position: 'left',
            items: [
              /**
                            {
                              label: 'Ausschreibung',
                              to: 'Wettkampf/Ausschreibung',
                              
                            },
                            {
                              label: 'Anmeldung',
                              to: 'Wettkampf/Anmeldung',
                            },
                            {
                              label: 'Zeitplan',
                              to: 'Wettkampf/Zeitplan',
                            },
                            {
                              label: 'Merkblatt',
                              to: 'Wettkampf/Merkblatt',
                            },
               */
              {
                label: 'Ergebnisse',
                to: 'Wettkampf/Ergebnisse',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Allgemeines',
            position: 'left',
            items: [
              {
                label: 'Historie',
                to: 'Allgemeines/Historie',
              },
              {
                label: 'Helfer',
                to: 'Allgemeines/Helfer',
              },
              {
                label: 'Unterkunft',
                to: 'Allgemeines/Unterkunft',
              },
              {
                label: 'Fragen und Antworten',
                to: 'Allgemeines/FragenAntworten',
              },
              {
                label: 'Fundsachen',
                to: 'Allgemeines/Fundsachen',
              },
              {
                label: 'Medien & Bilder',
                to: 'Allgemeines/Medien',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Strecke',
            position: 'left',
            items: [
              {
                label: 'Schwimmstrecke',
                to: 'Strecke/Schwimmstrecke',
              },
              {
                label: 'Radstrecke',
                to: 'Strecke/Radstrecke',
              },
              {
                label: 'Laufstrecke',
                to: 'Strecke/Laufstrecke',
              },
              {
                label: 'Wechselzone',
                to: 'Strecke/Wechselzone',
              },
              {
                label: 'Zeitlimits',
                to: 'Strecke/Zeitlimits',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Partner',
            position: 'left',
            items: [
              {
                label: 'Heart Racer',
                to: 'Partner/HeartRacer',
              },
              {
                label: 'BASF Triathlon Cup Rhein-Neckar',
                to: 'Partner/tcrn',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Kontakt',
            position: 'left',
            items: [
              {
                label: 'Orga Team',
                to: 'Kontakt/Orga',
              },
              {
                label: 'SV Nikar Heidelberg',
                to: 'Kontakt/SVNikarHeidelberg',
              },
              {
                label: 'Ski Club Heidelberg',
                to: 'Kontakt/SkiClubHeidelberg',
              },
            ],
          },
          {
            href: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Kontakt',
            items: [
              {
                label: 'Orga Team',
                to: 'Kontakt/Orga',
              },
              {
                label: 'Impressum',
                to: 'Impressum',
              },
              {
                label: 'Datenschutz',
                to: 'Datenschutz',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/heidelbergman.tri/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/heidelberg_man/',
              },
              {
                label: 'Rouvy',
                href: 'https://my.rouvy.com/virtuelle-strecken/detail/53891?_ga=2.222890523.1889706585.1660748047-628429123.1660748047&_gac=1.86188778.1660748047.CjwKCAjwo_KXBhAaEiwA2RZ8hFeB6ORrYTT8WEiJ3G6VDl3KWwUErOPuMLhpEu91tXM9A0W_bQLQfxoCE40QAvD_BwE',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCHP20jqEfDrUtfGqv7VMO7g',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HeidelbergMan GbR.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
