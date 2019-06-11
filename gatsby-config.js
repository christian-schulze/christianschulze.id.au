const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    author: `Christian Schulze`,
    description: `A personal blog covering mechanical keyboards, hobby electronics and programming.`,
    siteUrl: `https://christianschulze.id.au`,
    socials: {
      email: `/contact`,
      linkedin: `https://www.linkedin.com/in/christian-schulze/`,
      github: `https://github.com/christian-schulze`,
      twitter: `https://twitter.com/cschulze1977`,
    },
    title: `Christian's blog`,
    disqusShortName: process.env.GATSBY_DISQUS_SHORT_NAME,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        hooks: path.join(__dirname, "src/hooks"),
        images: path.join(__dirname, "src/images"),
        layouts: path.join(__dirname, "src/layouts"),
        posts: path.join(__dirname, "src/content/posts"),
        styles: path.join(__dirname, "src/styles"),
        src: path.join(__dirname, "src"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christians-blog`,
        short_name: `christians-blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/Layout.jsx"),
        },
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
  ],
}
