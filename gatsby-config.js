module.exports = {
  siteMetadata: {
    title: `Nii Odenkey`,
    description: `Nii Odenkey is a frontend web developer based in Accra Ghana.`,
    url: "https://niiodenkey.me",
    image: "src/images/logo2.png",
    twitterUsername: "@n_odenkey",
    author: `Nii Odenkey`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins : [
            `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options : {
              maxWidth: 5000,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans`,
            `Chivo`,
            `Numans`,
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
