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
        <Flex mb="24px" mt="24px">
          <Box mr={1} fontFamily="description" fontSize="12px" color="#7b7b7b">
            <Text>{skuLabel}</Text>
          </Box>
          <Box fontFamily="description" fontSize="12px" color="#7b7b7b">
            {sku}
          </Box>
        </Flex>
      ) : (
        ' '
      )}
    </React.Fragment>
  );
};

export default ProductVariantSku;
