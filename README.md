# Gatsby Shopify Store

Gatsby shopify store is a multi-featured starter to build an ecommerce online store.

It is built with [Gatsby](https://www.gatsbyjs.com/) and uses GraphQL to connect to the [Shopify storefront API](https://shopify.dev/api/storefront).


## Getting started
A shopify store is needed to run this starter successfully.

You need to add a .env file at the root level with the following values

```
GATSBY_SHOPIFY_SHOP_NAME=
GATSBY_SHOPIFY_ACCESS_TOKEN=
```
GATSBY_SHOPIFY_SHOP_NAME is the name of your shopify store. You can get it from the url ${name}.myshopify.com

To get the access token, follow these steps on the Shopify Admin:
- Go to the Apps page and click on manage private apps.
- Click on enabling private app development and then create private app.  
- Give the app any name and check the box next to "Allow this app to access your storefront data using the Storefront API". 
- Give all the necessary read permissions.
- Copy the Storefront access token

### Running in development

```
npm i
npm start
```

## Populating the store (on Shopify)
We mainly use tags to organize the different sections of the web page.

To populate the store, the first step is to add products in the shopify backend (name, description, price, image).

The next step is to create collections (categories). To add a product to a collection, we use tags. To define a collection, we give it to a tag and set as a condition that the product tag must be equal to it to become part of the collection.

A number of product tags are reserved and allow us to organize different sections of the web page.
-  featured -> will display products with this tag below the banner in the main page.
-  bestseller -> will display a top products of the week section in the main page with products of this tag.
- sale -> will create a sale category that include the products on sale. Each product should also have the compareAtPrice field to show a percentage of sale.


## Features

A few packages are used to improve development experience and enable more functions. Mainly:
- Eslint
- Prettier
- Emotion (styled components)
- Rebass (component library)
- react-helmet (SEO)
- gatsby-source-shopify (to connect to the Shopify store)
- gatsby-image (responsive and high performance images)
- gatsby-plugin-intl (Internationalisation)