module.exports = {
  siteMetadata: {
    title: `KW`,
    description: `Keyaria's Portfolio`,
    author: `@keyariaw`
  },
  plugins: [
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: ``
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
 {
    resolve: `gatsby-plugin-emotion`,
    options: {
      // Accepts all options defined by `babel-plugin-emotion` plugin.
    },
  },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
  resolve: "gatsby-plugin-react-svg",
  options: {
    rule: {
      include: /assets/ // See below to configure properly
    }
  }
},
{
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/src/images`,
    name: 'images'
  }
},
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
]
};
