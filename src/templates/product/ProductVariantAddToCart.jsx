import React, { useState, useEffect } from 'react';
import { Button } from 'rebass';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';

import useShopifyFunctions from '../../hooks/useShopifyFunctions';
import { useCurrentVariantContext } from './CurrentVariantContext';
import strings from './strings.json';

const StyledButton = styled(Button)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  font-size: 1.25rem;
  padding: 8px 20px;
  text-transform: uppercase;
  width: 100%;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

const ProductVariantAddToCart = ({ amount, cartUrl }) => {
  const { addItem } = useShopifyFunctions();
  const { currentVariant } = useCurrentVariantContext();
  const [disabled, setDisabled] = useState(false);

  const { productAddToCartButton, productAddToCartSoldoutButton } = strings;

  async function addToCartHandler(id, amount) {
    await addItem({ variantId: id, quantity: amount });
    navigate(cartUrl);
  }

  useEffect(() => {
    if (currentVariant && currentVariant.hasOwnProperty('availableForSale')) {
      currentVariant.availableForSale ? setDisabled(false) : setDisabled(true);
    }
  }, [currentVariant]);

  return (
    <StyledButton
      disabled={disabled}
      ml="auto"
      // width={['300px', '400px']}
      onClick={() => {
        addToCartHandler(currentVariant.shopifyId, amount);
      }}
      variant={!disabled ? 'primary' : 'disabled'}
    >
      {!disabled ? productAddToCartButton : productAddToCartSoldoutButton}
    </StyledButton>
  );
};

export default ProductVariantAddToCart;
