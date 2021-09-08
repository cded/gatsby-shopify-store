import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import ProductPage from './ProductPage';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default (props) => {
  const { title, description } = props.data.product;

  let productDescription;
  // This is a trick to get the product description in multiple languages
  // We add a langdelimiter string in the shopify product description
  // and then split the string into each language
  if (description.includes('langdelimiter')) {
    const [descFr, descEn] = description.split('langdelimiter');
    const intl = useIntl();
    const locale = intl.locale;
    const currentDescription = locale === 'fr' ? descFr : descEn;
    productDescription = currentDescription.split(/\\n/g)[0];
  } else {
    productDescription = description.split(/\\n/g)[0];
  }

  return (
    <Layout>
      <SEO title={title} description={productDescription} />
      <ProductPage {...props} />
    </Layout>
  );
};

export const productQuery = graphql`
  query SingleProductQuery($handle: String!) {
    product: shopifyProduct(handle: { eq: $handle }) {
      title
      description
      descriptionHtml
      vendor
      productType
      tags
      images {
        id
        altText
        originalSrc
        localFile {
          childImageSharp {
            main: resize(base64: true) {
              src
              width
              height
              aspectRatio
            }
          }
        }
      }
      cmsConnection {
        shortDescription
        descriptionHtml
        descriptionSections {
          title
          contentHtml
          isOpen
          orderPriority
        }
      }
      reviewsConnection {
        id
        productId
        title
        content
        score
        createdAt
        name
      }
      variants {
        availableForSale
        compareAtPrice
        title
        price
        shopifyId
        sku
        weight
        weightUnit
        selectedOptions {
          name
          value
        }
      }
      options {
        name
        values
      }
    }

    collection: shopifyCollection(
      products: { elemMatch: { handle: { eq: $handle } } }
    ) {
      title
      handle
      fields {
        shopifyThemePath
      }
    }
    store: site {
      siteMetadata {
        gatsbyStorefrontConfig {
          storeName
          payments
          shareButtons
          productImagesCarouselProps {
            naturalSlideHeight
            naturalSlideWidth
          }
          reviewsNumberPerPage
        }
      }
    }
  }
`;
