import React from 'react';
import { Flex, Box, Heading } from 'rebass';
import { useIntl } from 'gatsby-plugin-intl';
import styled from '@emotion/styled';
import SEO from '../../components/SEO';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

const PolicyPage = (props) => {
  const { title, body } = props.data.policies.nodes[0];
  const [bodyEn, bodyFr] = body.split('langdelimiter');
  const intl = useIntl();
  const localeTitle = intl.formatMessage({ id: title });
  const locale = intl.locale;
  const currentBody = locale === 'fr' ? bodyFr : bodyEn;
  return (
    <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
      <SEO title={localeTitle} description={localeTitle} />
      <Box
        p={['0', '50px']}
        pt={['50px', '50px']}
        sx={{ minHeight: ['70vh', 0] }}
      >
        <Heading
          m="auto"
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          {localeTitle}
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box dangerouslySetInnerHTML={{ __html: currentBody }}></Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default PolicyPage;
