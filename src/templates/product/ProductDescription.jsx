import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import DescriptionBox from './DescriptionBox';
import ProductDescriptionSections from './ProductDescriptionSections';

const ProductDescription = ({ description, sections = [] }) => {
  const [descFr, descEn] = description.split('langdelimiter');
  const intl = useIntl();
  const locale = intl.locale;
  const currentDescription = locale === 'fr' ? descFr : descEn;
  return (
    <>
      {sections.length > 0 ? (
        <ProductDescriptionSections sections={sections} />
      ) : (
        <>
          <DescriptionBox
            source={currentDescription
              .replace(/\\n/g, '<br />')
              .replace(/Dimensions:/g, '<h2>Dimensions:</h2>')}
          />
        </>
      )}
    </>
  );
};

export default ProductDescription;
