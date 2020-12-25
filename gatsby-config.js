require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '95',
        gatsbyImageProps: {
          loading: 'eager',
          fadeIn: false,
          durationFadeIn: 500,
        },
        manifest: {
          name: 'HB Ledco led furniture store',
          short_name: 'HB Ledco',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/led.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Montserrat'],
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://ledco.com',
    gatsbyStorefrontConfig: {
      storeName: 'Ledco',
      storeDescription: 'Buy vintage affordable furniture with leds',
      email: 'info@hbledco.com',
      company: 'HBLedco Storefront Inc.',
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
      googleAnalyticsId: 'UA-141525658-5',
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
              textColor: 'white',
              textBgColor: 'white',
            },
            {
              name: 'Coffee Tables',
              type: 'collection',
              handle: 'coffee-tables',
              textColor: 'white',
              textBgColor: 'white',
            },
          ],
        },
        {
          name: 'Amphitrite',
          type: 'product',
          handle: 'amphitrite',
          textColor: 'white',
          textBgColor: 'white',
        },
        {
          name: 'Orpheus',
          type: 'product',
          handle: 'orpheus',
          textColor: 'white',
          textBgColor: 'white',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: 'TV Stands',
            type: 'collection',
            handle: 'tv-cabinet',
          },
          {
            name: 'Coffee Tables',
            type: 'collection',
            handle: 'coffee-tables',
          },
        ],
      }),
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
