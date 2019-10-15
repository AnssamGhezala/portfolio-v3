/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `Anssam Ghezala's portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,

      options: {
        spaceId: `647brzxlfmwt`,

        accessToken: `TQ9icHN7MXtR0wcJdLBeg8cOFFAhZUrejShEMQ0Vf-s`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142030256-1",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
