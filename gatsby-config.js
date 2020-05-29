/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "GT Seoulstice",
    author: "Seoulstice Webmasters",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Quicksand"],
      },
    },
  ],
}
