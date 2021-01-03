/* eslint react/jsx-props-no-spreading: "off" */
import React from 'react';
import { graphql } from 'gatsby';

import MainPage from './MainPage';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default (props) => {
  return (
    <Layout>
      <SEO title="Modern LED Furniture" />
      <MainPage {...props} />
    </Layout>
  );
};

export const mainPageQuery = graphql`
  query MainPageQuery {
    collections: allShopifyCollection {
      nodes {
        handle
        title
        description
        fields {
          shopifyThemePath
        }
        image {
          src
          localFile {
            childImageSharp {
              resize(base64: true) {
                src
                width
                height
                aspectRatio
              }
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }

    featuredCollections: allShopifyCollection(
      filter: { handle: { in: "featured" } }
    ) {
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

    products: allShopifyProduct(filter: { tags: { in: "featured" } }) {
      nodes {
        title
        description
        handle
        variants {
          price
        }
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
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          descriptionSections {
            id
          }
          shortDescription
        }
      }
    }

    bestsellers: allShopifyProduct(filter: { tags: { in: "bestseller" } }) {
      nodes {
        title
        description
        handle
        variants {
          price
        }
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
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          descriptionSections {
            id
          }
          shortDescription
        }
      }
    }

    store: site {
      siteMetadata {
        gatsbyStorefrontConfig {
          storeName
          storeDescription
        }
      }
    }
  }
`;
