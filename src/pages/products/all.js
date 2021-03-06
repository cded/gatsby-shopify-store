/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import CatalogProducts from '../../templates/catalog/CatalogProducts';
import Pagination from '../../components/Pagination';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const CatalogAllProducs = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        nodes {
          handle
          fields {
            shopifyThemePath
            firstImage {
              originalSrc
              localFile {
                childImageSharp {
                  resize {
                    height
                    src
                    aspectRatio
                    width
                  }
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
            minVariantPrice {
              amount
            }
          }
          productType
          tags
          title
          createdAt
          variants {
            availableForSale
            compareAtPrice
            price
            shopifyId
          }
          availableForSale
        }
      }
    }
  `);

  const limit = 100;
  const skip = 0;
  const cartUrl = '/cart';

  const pageContext = { limit, skip, cartUrl };

  const intl = useIntl();

  const products = data.allShopifyProduct.nodes;

  return (
    <Layout>
      <SEO
        title="Catalog"
        description="Browse all our available products here. Discover our selection of modern products"
      />
      <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
        <Flex
          width={1}
          px={4}
          py={2}
          flexWrap={['wrap', 'nowrap']}
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Text textAlign="left">
            <Heading as="h1" fontSize={[20, 25, 30]}>
              {intl.formatMessage({ id: 'catalog' })}
            </Heading>
            <Text fontSize={[2, 3]}>
              {intl.formatMessage({ id: 'catalog.title' })}
            </Text>
          </Text>
        </Flex>
        <CatalogProducts
          products={products}
          limit={limit}
          skip={skip}
          cartUrl={cartUrl}
        />
        <Box width={1} px={4} py={2} key="pagination">
          <Text textAlign="center">
            <Pagination {...pageContext} />
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default CatalogAllProducs;
