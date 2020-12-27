import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

const PolicyPage = (props) => {
  const { title, body } = props.data.policies.nodes[0];
  const { storeName } = props.data.store.siteMetadata.gatsbyStorefrontConfig;
  return (
    <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
      <Helmet title={title} titleTemplate={`%s — ${storeName}`} defer={false}>
        <meta name="description" content={title} />
      </Helmet>
      <Box
        p={['0', '50px']}
        pt={['50px', '50px']}
        sx={{ minHeight: ['70vh', 0] }}
      >
        <Heading
          m="auto"
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          {title}
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box dangerouslySetInnerHTML={{ __html: body }}></Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default PolicyPage;
