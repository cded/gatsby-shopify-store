import React, { Fragment } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const CollectionStats = (props) => {
  const { skip, limit, productsNum } = props;

  let from;
  skip === 0 ? (from = 1) : (from = skip);

  let to;
  skip + limit > productsNum ? (to = productsNum) : (to = skip + limit);

  const intl = useIntl();
  return (
    <Fragment>
      {intl.formatMessage({ id: 'product.stats.showing' })} {from} - {to} of{' '}
      {productsNum} {intl.formatMessage({ id: 'product.stats.results' })}
    </Fragment>
  );
};

export default CollectionStats;
