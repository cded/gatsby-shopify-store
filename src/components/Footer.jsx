/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Flex, Box, Text, Link, Heading } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import loadable from '@loadable/component';
import styled from '@emotion/styled';

import VisaImg from '../images/visa.svg';
import MasterCardImg from '../images/mastercard.svg';
import AmexImg from '../images/amex.svg';
import PaypalImg from '../images/paypal.png';
import MapMontreal from '../images/mapMontreal.png';
// import { SocialIcon } from 'react-social-icons';

const SocialIcon = loadable(() => import('./SocialIcon'));

const validURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
};

const CardImage = styled.img`
  width: 42px;
  margin-right: 10px;
`;

const ImageCropper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

const MapImage = styled.img`
  display: inline;
  margin: 0 auto;
  margin-left: -25%; //centers the image
  height: 100%;
  width: auto;
`;

function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
            socialNetworks
            footerLinks {
              name
              link
            }
          }
        }
      }
    }
  `);

  const {
    email,
    company,
    location,
    address,
    phone,
    workingDays,
    workingHours,
    socialNetworks,
    footerLinks,
  } = data.site.siteMetadata.gatsbyStorefrontConfig;

  const { theme } = useThemeUI();

  const year = new Date().getFullYear();

  return (
    <Box bg="backgroundFooter" py={[1, 2, 3, 4]} mt={[2, 3, 4]}>
      <Box
        py={2}
        as="footer"
        width={1}
        style={{ maxWidth: 1300, height: '100%' }}
        mx="auto"
        px={2}
        pt={3}
      >
        <Flex alignItems="center" flexWrap="wrap">
          <Flex
            width={[1, 1, 4 / 5]}
            justifyContent={['center', 'space-between']}
            flexWrap="wrap"
            mx="auto"
            mb={3}
          >
            {/* <Box>
              <Text fontSize={[1, 2]} fontFamily="heading">
                © {year} {company || ''}
              </Text>
            </Box> */}

            <Box
              mr={[1, 0]}
              width={['100%', 'auto']}
              sx={{ display: ['none', 'block'] }}
            >
              {/* <Heading mb={1}>ABOUT</Heading> */}

              <ImageCropper>
                <MapImage src={MapMontreal} alt="map of montreal" />
              </ImageCropper>
              <Text mt={[2]} sx={{ textAlign: 'center' }} fontSize={[1, 2]}>
                Made in Montreal, Quebec
              </Text>
            </Box>

            <Box my={[2, 0]} fontSize={['12px', 'inherit']}>
              <Heading mb={1} fontSize={['18px', '24px']}>
                CONTACT
              </Heading>
              <Text mr={[3, 0]} mt={[2, 0]}>
                <Link href="/about">About Us</Link>
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                <Link href="/contact">Contact Us</Link>
              </Text>
              <Text mr={[3, 0]} mt={[2, 0]} mb={3}>
                <Link href="/faq">FAQ</Link>
              </Text>

              {/* <Text mr={[3, 0]} my={[2, 0]}>
                By phone:
              </Text> */}

              <Text mr={[3, 0]} my={[2, 0]}>
                By Email: {email}
              </Text>
              {/* <Text mr={[3, 0]} my={[2, 0]}>
                Call Us: {phone}
              </Text> */}
            </Box>

            <Box my={[2, 0]} fontSize={['12px', 'inherit']} ml={['20px', 0]}>
              <Heading mb={1} fontSize={['18px', '24px']}>
                LEGAL
              </Heading>
              {footerLinks
                ? footerLinks.map((link, index) => {
                    // If link is valid url use <a>
                    // else use gatsby-link
                    if (validURL(link.link)) {
                      return (
                        <Text key={index} mr={[3, 0]} my={[2, 0]}>
                          <Link href={link.link}>{link.name}</Link>
                        </Text>
                      );
                    } else {
                      return (
                        <Text key={index} mr={[3, 0]} my={[2, 0]}>
                          <GatsbyLink to={link.link} sx={theme.variants.link}>
                            {link.name}
                          </GatsbyLink>
                        </Text>
                      );
                    }
                  })
                : ''}
            </Box>

            <Box>
              <Text
                mt={[2]}
                sx={{ textAlign: 'center', display: ['block', 'none'] }}
                fontSize={[1, 2]}
                mb="10px"
              >
                Made in Montreal, Quebec
              </Text>
              <Text fontSize={[1, 2]} fontFamily="heading" mb={[0, 2]}>
                © {year} {company || ''}
              </Text>
              <Box style={{ textAlign: 'right', display: 'flex' }}>
                <CardImage src={VisaImg} alt="visa credit card" />
                <CardImage src={MasterCardImg} alt="mastercard credit card" />
                <CardImage src={AmexImg} alt="american express credit card" />
                <CardImage src={PaypalImg} alt="paypal" />
              </Box>
            </Box>
          </Flex>

          {/* <Flex
            width={[1, 1, 1 / 4]}
            justifyContent={['center', 'center', 'flex-end']}
            mr="auto"
            pl={2}
            mb={3}
          >
            {socialNetworks
              ? socialNetworks.map((socialNetwork, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        marginLeft: [2, 3],
                        opacity: 0.8,
                        ':hover,:focus,.active': {
                          opacity: 1,
                        },
                      }}
                    >
                      <SocialIcon
                        url={socialNetwork}
                        bgColor={theme.colors.primary}
                      />
                    </Box>
                  );
                })
              : ''}
          </Flex> */}
        </Flex>
      </Box>
    </Box>
  );
}

export default React.memo(Footer);
