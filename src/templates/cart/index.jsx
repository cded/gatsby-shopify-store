import React from 'react';
import CartPage from './CartPage';
import Layout from '../../components/Layout';
import strings from './strings.json';
import SEO from '../../components/SEO';

const { pageTitle } = strings;

export default (props) => {
  return (
    <Layout>
      <SEO title={pageTitle} />
      <CartPage {...props} />
    </Layout>
  );
};
