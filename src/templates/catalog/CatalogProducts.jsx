import React from 'react';

// import IndividualProduct from './IndividualProduct';
import IndividualProductA from './IndividualProductAnimated';

const CatalogProducts = ({ products, limit, skip, cartUrl }) => {
  return (
    <>
      {products
        .sort(
          (a, b) =>
            b.availableForSale - a.availableForSale ||
            a.title.localeCompare(b.title)
        )
        .map((product, index) => {
          product.cartUrl = cartUrl;
          if (index + 1 > skip && index + 1 <= skip + limit) {
            return (
              <IndividualProductA key={product.shopifyId} product={product} />
            );
          } else {
            return '';
          }
        })}
    </>
  );
};

export default CatalogProducts;
