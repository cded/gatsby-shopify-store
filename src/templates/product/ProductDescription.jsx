import React from 'react';

import DescriptionBox from './DescriptionBox';
import ProductDescriptionSections from './ProductDescriptionSections';

const ProductDescription = ({ productDescription, sections = [] }) => {
  return (
    <>
      {sections.length > 0 ? (
        <ProductDescriptionSections sections={sections} />
      ) : (
        <>
          <DescriptionBox
            source={productDescription
              .replace(/\\n/g, '<br />')
              .replace(/Dimensions:/g, '<h2>Dimensions:</h2>')}
          />
        </>
      )}
    </>
  );
};

export default ProductDescription;
