module.exports = {
  siteMetadata: {
    title: `Michael Gingras Portfolio`,
    description: `Michael's Studio. My lil home on the internet. Currently on a mini-sabbatical to figure out where my life needs to flow.`,
    author: `@michaelgingras`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smile.png`,
      },
    },
  ],
}
