import React from 'react';
import { Box, Text, Heading } from 'rebass';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layout';
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
        title={intl.formatMessage({ id: 'about' })}
        description={intl.formatMessage({ id: 'about.description' })}
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
          {intl.formatMessage({ id: 'about.title' })}
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto" width={[1, 3 / 4]}>
            <Box mt={4} mb={4}>
              <Heading
                sx={{
                  textAlign: 'left',
                  textTransform: 'uppercase',
                }}
                mb={3}
                fontSize={['20px', '24px']}
              >
                {intl.formatMessage({ id: 'about.section1.title' })}
              </Heading>
              <Text>{intl.formatMessage({ id: 'about.section1.par1' })}</Text>
              <Text mt="20px">
                {intl.formatMessage({ id: 'about.section1.par2' })}
              </Text>
              <Text mt="20px">
                {intl.formatMessage({ id: 'about.section1.par3' })}
              </Text>
              <Text mt="20px">
                {intl.formatMessage({ id: 'about.section1.par4' })}
              </Text>
              <Text mt="20px">
                {intl.formatMessage({ id: 'about.section1.par5' })}
              </Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                {intl.formatMessage({ id: 'about.section2.title' })}
              </Heading>
              <Text>{intl.formatMessage({ id: 'about.section2.par1' })}</Text>
              <Text mt="20px">
                {intl.formatMessage({ id: 'about.section2.par2' })}
              </Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                {intl.formatMessage({ id: 'about.section3.title' })}
              </Heading>
              <Text>{intl.formatMessage({ id: 'about.section3.par1' })}</Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                {intl.formatMessage({ id: 'about.section4.title' })}
              </Heading>
              <Text>{intl.formatMessage({ id: 'about.section4.par1' })}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
