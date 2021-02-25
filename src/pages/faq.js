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
            <Collapsible title={intl.formatMessage({ id: 'faq.q1' })}>
              {intl.formatMessage({ id: 'faq.r1' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q2' })}>
              {intl.formatMessage({ id: 'faq.r2' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q3' })}>
              {intl.formatMessage({ id: 'faq.r3' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q4' })}>
              {intl.formatMessage({ id: 'faq.r4' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q5' })}>
              {intl.formatMessage({ id: 'faq.r5' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q6' })}>
              {intl.formatMessage({ id: 'faq.r6' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q7' })}>
              {intl.formatMessage({ id: 'faq.r7' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q8' })}>
              {intl.formatMessage({ id: 'faq.r8' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q9' })}>
              {intl.formatMessage({ id: 'faq.r9' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q10' })}>
              {intl.formatMessage({ id: 'faq.r10' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q11' })}>
              {intl.formatMessage({ id: 'faq.r11' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q12' })}>
              {intl.formatMessage({ id: 'faq.r12' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q13' })}>
              {intl.formatMessage({ id: 'faq.r13' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q14' })}>
              {intl.formatMessage({ id: 'faq.r14' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q15' })}>
              {intl.formatMessage({ id: 'faq.r15' })}
            </Collapsible>
            <Collapsible title={intl.formatMessage({ id: 'faq.q16' })}>
              {intl.formatMessage({ id: 'faq.r16' })}
            </Collapsible>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
