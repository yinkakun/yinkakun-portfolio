module.exports = {
  siteMetadata: {
    title: `yinka adedire`,
    description: `self-taught frontend developer interested in jamstack`,
    siteUrl: 'https://yinkakun.vercel.app',
    defaultOgImage: '/og-image.png',
    social: {
      twitter: `yinkakun`,
    },
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Mono\:400`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yinkakun`,
        short_name: `Yinkakun`,
        start_url: `/`,
        background_color: `#1e1e24`,
        theme_color: `#1e1e24`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
