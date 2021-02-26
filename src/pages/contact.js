import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  useIntl,
  FormattedMessage,
  FormattedHTMLMessage,
} from 'gatsby-plugin-intl';
import { Box, Text, Heading } from 'rebass';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm/ContactForm';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default (props) => {
  const intl = useIntl();
  const locale = `/${intl.locale}`;

  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: 'contact.title' })}
        description={intl.formatMessage({ id: 'contact.description' })}
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
          {intl.formatMessage({ id: 'contact.header' })}
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto" width={[1, 3 / 4]}>
            <Text>
              <FormattedMessage id="contact.paragraph_1" />
              <GatsbyLink to={`${locale}/faq/`}>
                {intl.formatMessage({ id: 'contact.paragraph_1_link' })}
              </GatsbyLink>
              <FormattedMessage id="contact.paragraph_1_2" />
            </Text>
            <Text mt="20px">
              <FormattedHTMLMessage id="contact.paragraph_2" />
              <br />
              <FormattedHTMLMessage id="contact.paragraph_3" />
              <FormattedHTMLMessage id="contact.paragraph_4" />
            </Text>
          </Box>
        </Box>

        <ContactForm />
      </Box>
    </Layout>
  );
};
