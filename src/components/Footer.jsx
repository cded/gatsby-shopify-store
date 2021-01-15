/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Flex, Box, Text, Link, Heading } from 'rebass';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
// import loadable from '@loadable/component';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import VisaImg from '../images/visa.svg';
import MasterCardImg from '../images/mastercard.svg';
import AmexImg from '../images/amex.svg';
import PaypalImg from '../images/paypal.png';
import FaceImg from '../images/facebook1.svg';
import InstaImg from '../images/instagram.svg';
// import { SocialIcon } from 'react-social-icons';

// const SocialIcon = loadable(() => import('./SocialIcon'));

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
  height: 27px;
  margin-right: 10px;
`;

const SocialImage = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 15px;
  &:hover {
    opacity: 0.8;
  }
`;

const ImageCropper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

const MapImage = styled(Img)`
  margin: 0 auto;
  margin-left: -25%; //centers the image
  height: 100%;
  width: auto;
  &.gatsby-image-wrapper {
    position: initial !important;
    display: block !important;
  }
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
      file(relativePath: { eq: "mapMontreal.webp" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    email,
    company,
    footerLinks,
    phone,
    workingDays,
    workingHours,
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
            {/* <Box
              mr={[1, 0]}
              width={['100%', 'auto']}
              sx={{ display: ['none', 'block'] }}
            >
              <ImageCropper>
                <MapImage
                  fixed={data.file.childImageSharp.fluid}
                  alt="map of montreal"
                />
              </ImageCropper>
              <Text mt={[2]} sx={{ textAlign: 'center' }} fontSize={[1, 2]}>
                Made in Montreal, Quebec
              </Text>
            </Box> */}

            <Box
              mr={[1, 3]}
              width={['100%', 'auto']}
              sx={{ display: ['none', 'block'] }}
            >
              <Heading mb={1} sx={{ textTransform: 'uppercase' }}>
                Who we are
              </Heading>

              <Text mr={[3, 0]} mt={[2, 0]}>
                <Link href="/about">About Us</Link>
              </Text>
              <Text mr={[3, 0]} mt={[2, 0]}>
                <Link href="/faq">FAQ</Link>
              </Text>
              <Box
                style={{ textAlign: 'right', display: 'flex' }}
                sx={{
                  marginTop: [1, 2],
                }}
              >
                <a href="https://facebook.com/hbledco/" target="_blank">
                  <SocialImage src={FaceImg} alt="facebook page link" />
                </a>
                <a href="https://instagram.com/hbledco/" target="_blank">
                  <SocialImage src={InstaImg} alt="instagram link" />
                </a>
              </Box>
              {/* <Text mt={[2]} sx={{ textAlign: 'center' }} fontSize={[1, 2]}>
                Made in Montreal, Canada
              </Text> */}
            </Box>

            <Box my={[2, 0]} fontSize={['12px', 'inherit']}>
              <Heading mb={1} fontSize={['18px', '24px']}>
                CONTACT
              </Heading>
              <Text mr={[3, 0]} mt={[2, 0]} sx={{ display: ['block', 'none'] }}>
                <Link href="/about">About Us</Link>
              </Text>
              <Text mr={[3, 0]} my={[2, 0]} mb={[0, 2]}>
                <Link href="/contact">Contact Us</Link>
              </Text>
              <Text
                mr={[3, 0]}
                mt={[2, 0]}
                mb={3}
                sx={{ display: ['block', 'none'] }}
              >
                <Link href="/faq">FAQ</Link>
              </Text>

              <Text mr={[3, 0]} my={[2, 0]}>
                By Email: {email}
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                Call Us: {phone}
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                {workingDays}: {workingHours}
              </Text>

              <Flex
                width={[1, 1, 1 / 4]}
                justifyContent={['left', 'left', 'none']}
                display={['block', 'none']}
                mr="auto"
                // pl={2}
                mb={[2, 3]}
                mt={3}
                sx={{ alignItems: 'baseline' }}
              >
                <a href="https://facebook.com/hbledco/" target="_blank">
                  <SocialImage src={FaceImg} alt="facebook page link" />
                </a>
                <a href="https://instagram.com/hbledco/" target="_blank">
                  <SocialImage src={InstaImg} alt="instagram link" />
                </a>
                {/* {socialNetworks
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
                            // bg={
                            //   socialNetwork.includes('instagram') && ' #d6249f'
                            // }
                            bgColor={
                              socialNetwork.includes('instagram') &&
                              'transparent'
                            }
                            fgColor={
                              socialNetwork.includes('instagram') && '#d6249f'
                            }
                            width={
                              socialNetwork.includes('instagram') && '50px'
                            }
                          />
                        </Box>
                      );
                    })
                  : ''} */}
              </Flex>
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
                          <GatsbyLink
                            to={`${link.link}/`}
                            sx={theme.variants.link}
                          >
                            {link.name}
                          </GatsbyLink>
                        </Text>
                      );
                    }
                  })
                : ''}
            </Box>

            <Box>
              {/* <Text
                mt={[2]}
                sx={{ textAlign: 'center', display: ['block', 'none'] }}
                fontSize={[1, 2]}
                mb="10px"
              >
                Made in Montreal, Canada
              </Text> */}

              <Text
                fontSize={[1, 2]}
                fontFamily="heading"
                mb={[0, 2]}
                sx={{ textAlign: ['center', 'left'] }}
              >
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
        </Flex>
      </Box>
    </Box>
  );
}

export default React.memo(Footer);
