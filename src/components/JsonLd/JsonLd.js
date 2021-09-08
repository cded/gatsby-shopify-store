import React from 'react';
import Helmet from 'react-helmet';

// eslint-disable-next-line import/prefer-default-export
export function JsonLd({ children }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Helmet>
  );
}
