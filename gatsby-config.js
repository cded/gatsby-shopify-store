require('dotenv').config({ path: `.env` });

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        includeCollections: ['shop'],
        apiVersion: '2020-01',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HB Ledco led furniture store',
        short_name: 'HB Ledco',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'standalone',
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-lint-queries',
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        // Fields to index
        fields: ['title', 'tags'],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          ShopifyProduct: {
            title: (node) => node.title,
            tags: (node) => node.tags,
            shopifyThemePath: (node) => node.fields.shopifyThemePath,
          },
        },
      },
    },
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto',
            'Montserrat',
            'Montserrat:wght@700',
            'Josefin Sans',
          ],
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://hbledco.com',
    gatsbyStorefrontConfig: {
      storeName: 'H&B LEDCO',
      storeDescription: `Make Your Home Bright with Ledco. Browse our led furniture selection! 
      High quality design. Modern European style. Affordable. Based in Montreal. Delivery accross Canada.
      Categories: TV stands, Coffee tables, Bedside tables, Sideboards`,
      email: 'info@hbledco.com',
      company: 'H&B Ledco Inc.',
      location: 'Montreal, QC',
      address: '400 Ville Marie',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Sun',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: ['Facebook', 'Pinterest', 'Twitter', 'Tumblr', 'Whatsapp'],
      googleAnalyticsId: process.env.GA_TRACKING_ID,
      reviewsNumberPerPage: 10,
      productImagesCarouselProps: {},
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'TV Stands',
              type: 'collection',
              handle: 'tv-cabinet',
              description: 'Tv Cabinet',
              image: {},
            },
            {
              name: 'Coffee Tables',
              type: 'collection',
              handle: 'coffee-tables',
              description: 'Coffee Table',
              image: {},
            },
          ],
        },
      ],
      footerLinks: [
        // {
        //   name: 'About us',
        //   link: '/pages/about',
        // },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
      ],
      locales: 'en-US',
      currency: 'CAD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
