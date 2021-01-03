import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

function Home() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Flex mt={6} px={[3, null, 4]} justifyContent="center">
        <Box sx={{ maxWidth: '1300px', margin: 'auto' }}>
          <Text
            as="h1"
            fontSize={4}
            fontFamily="sans"
            color="primary"
            lineHeight={1}
          >
            <span role="img" aria-label="thinking">
              🤔
            </span>{' '}
            Hey, there's nothing here!
          </Text>
          <Text as="p" fontFamily="sans" py={3} color="primary" lineHeight={1}>
            How about checking out the{' '}
            <Text as={GatsbyLink} to="/">
              first page
            </Text>
            ?
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
}

export default Home;
