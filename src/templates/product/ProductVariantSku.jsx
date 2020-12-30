import React, { useState, useEffect } from 'react';
import { Flex, Box, Text } from 'rebass';

import { useCurrentVariantContext } from './CurrentVariantContext';

import strings from './strings.json';

const ProductVariantSku = () => {
  const { currentVariant } = useCurrentVariantContext();
  const [sku, setSku] = useState();
  const { skuLabel } = strings;

  useEffect(() => {
    if (currentVariant && currentVariant.sku) {
      setSku(currentVariant.sku);
    }
  }, [currentVariant]);

  return (
    <React.Fragment>
      {sku ? (
        <Flex mb={4} mt={2}>
          <Box mr={2} fontFamily="heading">
            <Text>{skuLabel}</Text>
          </Box>
          <Box fontFamily="heading">{sku}</Box>
        </Flex>
      ) : (
        ' '
      )}
    </React.Fragment>
  );
};

export default ProductVariantSku;
