/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Flex, Box, Text, Heading } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl, Link as GatsbyLink, Link } from 'gatsby-plugin-intl';

// import loadable from '@loadable/component';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import VisaImg from '../images/visa.svg';
import MasterCardImg from '../images/mastercard.svg';
import AmexImg from '../images/amex.svg';
import PaypalImg from '../images/paypal.png';
import FaceImg from '../images/facebook1.svg';
import InstaImg from '../images/instagram.svg';
import Language from './Language/Language';
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

  const intl = useIntl();

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
                {intl.formatMessage({ id: 'footer.who' })}
              </Heading>

              <Text mr={[3, 0]} mt={[2, 0]}>
                <Link to="/about" sx={theme.variants.link}>
                  {intl.formatMessage({ id: 'about_us' })}
                </Link>
              </Text>
              <Text mr={[3, 0]} mt={[2, 0]}>
                <Link to="/faq" sx={theme.variants.link}>
                  {intl.formatMessage({ id: 'FAQ' })}
                </Link>
              </Text>
              <Text mr={[3, 0]} mt={[2, 0]}>
                {intl.formatMessage({ id: 'footer.delivery' })}
              </Text>
              <Box
                style={{ textAlign: 'right', display: 'flex' }}
                sx={{
                  marginTop: [1, 2],
                }}
              >
                <a
                  href="https://facebook.com/homeledfurniture/"
                  target="_blank"
                >
                  <SocialImage src={FaceImg} alt="facebook page link" />
                </a>
                <a
                  href="https://instagram.com/homeledfurniture/"
                  target="_blank"
                >
                  <SocialImage src={InstaImg} alt="instagram link" />
                </a>
              </Box>
              {/* <Text mt={[2]} sx={{ textAlign: 'center' }} fontSize={[1, 2]}>
                Based in Montreal, Canada
              </Text> */}
            </Box>

            <Box my={[2, 0]} fontSize={['12px', 'inherit']}>
              <Heading mb={1} fontSize={['18px', '24px']}>
                {intl.formatMessage({ id: 'footer.contact' })}
              </Heading>
              <Text mr={[3, 0]} mt={[2, 0]} sx={{ display: ['block', 'none'] }}>
                <Link to="/about" sx={theme.variants.link}>
                  {intl.formatMessage({ id: 'about_us' })}
                </Link>
              </Text>
              <Text mr={[3, 0]} my={[2, 0]} mb={[0, 2]}>
                <Link to="/contact" sx={theme.variants.link}>
                  {intl.formatMessage({ id: 'contact_us' })}
                </Link>
              </Text>
              <Text
                mr={[3, 0]}
                mt={[2, 0]}
                mb={3}
                sx={{ display: ['block', 'none'] }}
              >
                <Link to="/faq" sx={theme.variants.link}>
                  {intl.formatMessage({ id: 'FAQ' })}
                </Link>
              </Text>

              <Text mr={[3, 0]} my={[2, 0]}>
                {intl.formatMessage({ id: 'footer.email' })} {email}
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                {intl.formatMessage({ id: 'footer.phone' })}
                {phone}
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                {intl.formatMessage({ id: 'footer.phone1' })}
                +1 (844) 753-0051
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                {intl.formatMessage({ id: 'footer.workingDays' })}:{' '}
                {intl.formatMessage({ id: 'footer.workingHours' })}
              </Text>
              <Text mr={[3, 0]} my={[2, 0]}>
                {intl.formatMessage({ id: 'footer.workingDays1' })}:{' '}
                {intl.formatMessage({ id: 'footer.workingHours1' })}
              </Text>

              <Box
                sx={{
                  marginTop: '15px',
                  display: ['block', 'none'],
                }}
              >
                <Language display="long" />
              </Box>

              <Flex
                width={[1, 1, 1 / 4]}
                justifyContent={['left', 'left', 'none']}
                display={['block', 'none']}
                mr="auto"
                // pl={2}
                mb={['12px', 3]}
                mt={3}
                sx={{ alignItems: 'baseline' }}
              >
                <a
                  href="https://facebook.com/homeledfurniture/"
                  target="_blank"
                >
                  <SocialImage src={FaceImg} alt="facebook page link" />
                </a>
                <a
                  href="https://instagram.com/homeledfurniture/"
                  target="_blank"
                >
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

            <Box my={[2, 0]} fontSize={['12px', 'inherit']} ml={['10px', 0]}>
              <Heading
                mb={1}
                fontSize={['18px', '24px']}
                sx={{ textTransform: 'uppercase' }}
              >
                {intl.formatMessage({ id: 'footer.legal' })}
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
                            {intl.formatMessage({ id: link.name })}
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
                {intl.formatMessage({ id: 'footer.delivery' })}
              </Text>

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
