/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let metaConfig = require('./config/sites/ugconthub.js');

if((metaConfig == null) || (metaConfig == undefined)) {
  metaConfig['title'] = "Gatsby UG Starter Template";
  metaConfig['description'] = "Description of the site";
  metaConfig['author'] = "Author of site";
  metaConfig['GAtrackingID'] = "";
  metaConfig['IGuser'] = "";
}

module.exports = {
  siteMetadata: {
    title: metaConfig['title'],
    description: metaConfig['description'],
    author: metaConfig['author'],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: metaConfig['GAtrackingID'],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby UG Starter Template`,
        short_name: `UG starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
       resolve: `gatsby-source-drupal`,
       options: {
         baseUrl: `https://api.liveugconthub.uoguelph.dev/`,
         apiBase: `jsonapi`, // optional, defaults to `jsonapi`
       },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: metaConfig['IGuser'],
        
      },
    },
  ],
  mapping: {
    "node__page.fields.alias": `PathAlias`,
    "taxonomy_term__programs.fields.alias": `PathAlias`,
  },
}
