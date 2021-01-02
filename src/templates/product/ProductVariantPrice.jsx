import React, { useState, useEffect } from 'react';
import { Flex, Box, Text } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import { useCurrentVariantContext } from './CurrentVariantContext';

import formatPrice from '../../utils/formatPrice';

const ProductVariantPrice = ({ initialDisplayPrice = 0, mb = 0 }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            locales
            currency
          }
        }
      }
    }
  `);
  const { locales, currency } = data.site.siteMetadata.gatsbyStorefrontConfig;

  const { currentVariant } = useCurrentVariantContext();
  const [displayPrice, setDisplayPrice] = useState(
    formatPrice(initialDisplayPrice, locales, currency)
  );
  const [compareAtPrice, setCompareAtPrice] = useState();

  useEffect(() => {
    if (currentVariant && currentVariant.hasOwnProperty('price')) {
      currentVariant.price
        ? setDisplayPrice(formatPrice(currentVariant.price, locales, currency))
        : setDisplayPrice(formatPrice(initialDisplayPrice, locales, currency));

      currentVariant.compareAtPrice
        ? setCompareAtPrice(currentVariant.compareAtPrice)
        : setCompareAtPrice(false);
    }
  }, [currency, currentVariant, initialDisplayPrice, locales]);

  return (
    <React.Fragment>
      <Flex>
        {/* {compareAtPrice ? (
          <Box mr={2}>
            <Text fontSize={[1, 2]}>
              {productCompareAtPriceLabel}{' '}
              <Text as="strike">{compareAtPrice}</Text>
            </Text>
          </Box>
        ) : (
          ''
        )} */}
      </Flex>
      <Flex mb={mb}>
        <Box>
          {/* {productPriceLabel}{' '} */}
          {initialDisplayPrice && (
            <Text as="span" fontSize={[3, 4]} color="red">
              ${parseInt(initialDisplayPrice).toString()}
            </Text>
          )}
          {compareAtPrice && (
            <Box sx={{ textAlign: 'right' }}>
              <Text fontSize={[1, 2]} sx={{ textAlign: 'right' }}>
                <Text as="strike">${parseInt(compareAtPrice).toString()}</Text>
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default ProductVariantPrice;
