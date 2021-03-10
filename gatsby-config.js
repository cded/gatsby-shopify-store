require('dotenv').config({ path: `.env` });
const { createProxyMiddleware } = require('http-proxy-middleware');

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://myhomeled.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          let pages = [];
          allSitePage.edges.map((edge) => {
            const hasTrailingSlash =
              edge.node.path.charAt(edge.node.path.length - 1) === '/';
            let url = site.siteMetadata.siteUrl + edge.node.path;
            if (!hasTrailingSlash) {
              url += '/';
            }
            pages.push({
              url,
              changefreq: `daily`,
              priority: 0.7,
            });
          });
          return pages;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HomeLed led furniture store',
        short_name: 'HomeLed',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'standalone',
        icon: 'src/images/favicon.webp',
        icon_options: {
          purpose: 'any maskable',
        },
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '500', '700'],
            },
            {
              family: 'Montserrat',
              variants: ['400', '500', '700'],
            },
            {
              family: 'Josefin Sans',
              variants: ['400', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '167642541779625',
      },
    },
    {
      resolve: 'gatsby-plugin-klaviyo',
      options: {
        klaviyoKey: 'Ykfw4w',
        enableDuringDevelop: false,
      },
    },
    'gatsby-plugin-netlify',
  ],
  siteMetadata: {
    siteUrl: siteUrl,
    title: 'HomeLed',
    description: `Make Your Home Bright with HomeLed. Browse our LED furniture selection! 
    High quality design. Modern European style. Affordable. Based in Montreal. Delivery across Canada.
    Categories: TV stands, Coffee tables, Bedside tables, Sideboards`,
    author: 'YA',
    gatsbyStorefrontConfig: {
      storeName: 'HomeLed',
      storeDescription: `Make Your Home Bright with HomeLed. Browse our led furniture selection! 
      High quality design. Modern European style. Affordable. Based in Montreal. Delivery across Canada.
      Categories: TV stands, Coffee tables, Bedside tables, Sideboards`,
      email: 'info@myhomeled.com',
      company: 'HomeLed Inc.',
      location: 'Montreal, QC',
      address: '400 Ville Marie',
      phone: '+1 (450) 999-5280',
      workingDays: 'Mon - Sun',
      workingHours: '9AM - 9PM',
      socialNetworks: [
        'https://facebook.com/homeled/',
        'https://instagram.com/homeled/',
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
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:8080',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
};
