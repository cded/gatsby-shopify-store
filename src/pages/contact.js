import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Box, Text, Heading } from 'rebass';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default (props) => {
  const data = useStaticQuery(graphql`
    query contactQuery {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            email
            company
            location
            address
            phone
            workingDays
            workingHours
          }
        }
      }
    }
  `);
  const {
    email,
    phone,
    workingHours,
  } = data.site.siteMetadata.gatsbyStorefrontConfig;
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Please contact us if you have any questions! Customer satisfaction is our number one priority."
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
          How can we help you?
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto" width={[1, 3 / 4]}>
            <Text>
              If you have any questions, concerns or issues with an order,
              please consult our <GatsbyLink to="/faq">FAQ</GatsbyLink> page
              where the most common questions are answered.
            </Text>
            <Text mt="20px">
              If you do not find your answer there or prefer talking to us
              directly, <br />
              <br />
              Do not hesitate to shoot us an email anytime at{' '}
              <strong>{email}</strong>, or give us a call on <br />{' '}
              <strong>{phone}</strong>, our team will be glad to help you any
              day from <strong>{workingHours}</strong>
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
