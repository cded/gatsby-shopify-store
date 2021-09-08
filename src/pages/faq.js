import React from 'react';
import { Box, Heading } from 'rebass';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
import Collapsible from '../components/Collapsible';
import SEO from '../components/SEO';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO
        title="FAQ"
        description={intl.formatMessage({ id: 'faq.description' })}
      />
      <Box
        p={['0', '50px']}
        pt={['50px', '50px']}
        sx={{ minHeight: ['70vh', 0], maxWidth: '1300px', margin: 'auto' }}
      >
        <Heading
          m="auto"
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            maxWidth: '80%',
            fontSize: ['18px', '24px'],
          }}
        >
          {intl.formatMessage({ id: 'faq.title' })}
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto">
            <Collapsible title={intl.formatMessage({ id: 'faq.q0' })}>
              {intl.formatMessage({ id: 'faq.r0' })}
            </Collapsible>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
