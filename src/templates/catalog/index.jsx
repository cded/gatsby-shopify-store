import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import CatalogPage from './CatalogPage';
import SEO from '../../components/SEO';

export default (props) => {
  const { title, description } = props.data.collection.nodes[0];
  return (
    <Layout>
      <SEO title={title} description={description} />
      <CatalogPage {...props} />
    </Layout>
  );
};

export const catalogQuery = graphql`
  query CatalogQuery($handle: String) {
    collection: allShopifyCollection(filter: { handle: { eq: $handle } }) {
      nodes {
        title
        handle
        description
        products {
          id
          shopifyId
          title
          tags
          fields {
            shopifyThemePath
            firstImage {
              altText
              originalSrc
              localFile {
                childImageSharp {
                  resize(base64: true) {
                    src
                    width
                    height
                    aspectRatio
                  }
                }
              }
            }
          }
          availableForSale
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          variants {
            shopifyId
            availableForSale
            compareAtPrice
            price
          }
        }
      }
    }
    store: site {
      siteMetadata {
        gatsbyStorefrontConfig {
          storeName
        }
      }
    }
  }
`;
