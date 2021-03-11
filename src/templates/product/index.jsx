import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import ProductPage from './ProductPage';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default (props) => {
  const { title, description } = props.data.product;

  const [descFr, descEn] = description.split('langdelimiter');
  const intl = useIntl();
  const locale = intl.locale;
  const currentDescription = locale === 'fr' ? descFr : descEn;
  const desc = currentDescription.split(/\\n/g)[0];

  return (
    <Layout>
      <SEO title={title} description={desc} />
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
