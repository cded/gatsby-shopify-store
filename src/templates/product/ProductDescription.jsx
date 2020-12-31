import React from 'react';

import DescriptionBox from './DescriptionBox';
import ProductDescriptionSections from './ProductDescriptionSections';

const ProductDescription = ({ description, sections = [] }) => {
  return (
    <>
      {sections.length > 0 ? (
        <ProductDescriptionSections sections={sections} />
      ) : (
        <DescriptionBox
          source={description
            .replace(/\\n/g, '<br />')
            .replace(/Dimensions:/g, '<h2>Dimensions:</h2>')}
        />
      )}
    </>
  );
};

export default ProductDescription;
