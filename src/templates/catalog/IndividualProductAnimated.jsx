import React from 'react';
import { Box, Card, Heading, Text } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled/macro';
import { useIntl, Link as GatsbyLink } from 'gatsby-plugin-intl';

import ShopifyImage from '../../components/ShopifyImage';
import AddToCart from '../../components/AddToCart';
import Badge from '../../components/Badge';
import NoImage from '../../components/Icons/NoImage';
import formatPrice from '../../utils/formatPrice';
import strings from './strings.json';

const IndividualProduct = ({ product }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            locales
            currency
          }
        }
      }
    }
  `);
  const { locales, currency } = data.site.siteMetadata.gatsbyStorefrontConfig;

  const intl = useIntl();

  const {
    priceRange: {
      minVariantPrice: { amount: minPrice },
      maxVariantPrice: { amount: maxPrice },
    },
    availableForSale,
    variants,
    title,
    tags,
    fields: { shopifyThemePath, firstImage },
    cartUrl,
  } = product;

  const hasPriceRange = minPrice !== maxPrice;
  const hasOneVariant = variants.length === 1;

  const minDisplayPrice = formatPrice(minPrice, locales, currency);
  const maxDisplayPrice = formatPrice(maxPrice, locales, currency);

  // const { compareAtPrice } = variants[0];
  // const compareAtPriceFmormatted = formatPrice(
  //   variants[0].compareAtPrice,
  //   locales,
  //   currency
  // );

  let hasSaleBadge = false;

  const isPreorder = tags.includes('preorder');

  // Empty styled components used for targeting as selectors
  // https://emotion.sh/docs/styled#targeting-another-emotion-component
  const Image = styled(ShopifyImage)``;
  const Title = styled(Heading)``;

  // const CompareAtPrice = styled.strike`
  //   color: #c0c0c0;
  // `;

  const AddToCartStyled = styled(AddToCart)`
    position: absolute;
    cursor: pointer;
    z-index: 1;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  `;

  const AddToCardGroupBox = styled(Box)`
    // Transform image:
    & ${Image} {
      transition-property: all;
      transition-duration: 0.6s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    &:hover ${Image} {
      transform: scale(1.05);
      transition-property: all;
      transition-duration: 0.6s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }

    // Show/hide "Add to card" text:
    &:hover ${AddToCartStyled} {
      opacity: 100;
      transform: translateY(-15px);
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    & ${AddToCartStyled} {
      opacity: 0;
      margin-top: 15px;
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }

    &:hover ${Title} {
      opacity: 0;
      transform: translateY(-15px);
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
    & ${Title} {
      opacity: 100;
      transition-property: all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;
    }
  `;

  const CardStyled = styled(Card)`
    &:hover {
      animation-duration: 2s;
      animation-timing-function: ease;
      animation-name: hoverProduct;
      animation-direction: alternate;
    }
  `;

  return (
    <CardStyled
      px={4}
      py={2}
      mb={4}
      width={[1, 1 / 2, 1 / 3]}
      bg="backgroundMain"
    >
      <AddToCardGroupBox>
        <Box>
          <Box
            m={2}
            sx={{ display: 'inline-block', position: 'absolute', 'z-index': 9 }}
          >
            {tags.map((tag) => {
              if (tag === 'new' && availableForSale) {
                return (
                  <Badge
                    text={strings.new}
                    bgColor="badgeNew"
                    my={1}
                    key={strings.new}
                  />
                );
              } else return '';
            })}
            {variants.map((v, i) => {
              if (
                v.availableForSale &&
                v.compareAtPrice &&
                !hasSaleBadge &&
                availableForSale
              ) {
                hasSaleBadge = true;
                return (
                  <Badge
                    text={intl.formatMessage({ id: 'product.sale' })}
                    my={1}
                    key={`${strings.sale}+${i}`}
                  />
                );
              } else return '';
            })}
            {/* {!availableForSale ? (
              <Badge
                text={intl.formatMessage({ id: 'product.soldout' })}
                width={90}
                height={35}
                bgColor="badgeSoldout"
                format="box"
                my={1}
                key={strings.soldout}
              />
            ) : (
              ''
            )} */}
            {isPreorder && !hasSaleBadge ? (
              <Badge
                text={intl.formatMessage({ id: 'product.preorder' })}
                width={130}
                height={35}
                bgColor="orange"
                format="box"
                my={1}
                key={strings.soldout}
              />
            ) : (
              ''
            )}
          </Box>
          <Box sx={{ overflow: 'hidden', mb: 2 }}>
            <GatsbyLink
              to={`${shopifyThemePath}/`}
              style={{ textDecoration: 'none' }}
            >
              {firstImage && firstImage.localFile ? (
                <Image
                  src={firstImage.originalSrc}
                  alt={firstImage.altText || title}
                  base64={firstImage.localFile.childImageSharp.resize.src}
                  aspectRatio={
                    firstImage.localFile.childImageSharp.resize.aspectRatio
                  }
                  sizes="(max-width: 450px) 100vw, 450px"
                />
              ) : (
                <NoImage width="100%" height="100%" color="grey" p={4} />
              )}
            </GatsbyLink>
          </Box>
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{ position: 'relative', width: ['100px', '150px'] }}
              mb={1}
            >
              {hasOneVariant ? (
                <AddToCartStyled
                  title={intl.formatMessage({ id: 'product.addToCartP' })}
                  shopifyId={variants[0].shopifyId}
                  amount={1}
                  cartUrl={cartUrl}
                  sx={{
                    color: 'addToCart',
                    bg: 'white',
                    fontFamily: 'body',
                    fontSize: [1, 2, 3],
                    fontWeight: 'normal',
                    lineHeight: '1.25',
                    py: 0,
                  }}
                />
              ) : (
                <AddToCartStyled
                  isSelectOptions="true"
                  title={intl.formatMessage({ id: 'product.selectOptions' })}
                  to={shopifyThemePath}
                  sx={{
                    color: 'addToCart',
                    ':hover,:focus,.active': {
                      color: 'addToCart',
                      textDecoration: 'none',
                    },
                    bg: 'white',
                    fontFamily: 'body',
                    fontSize: [1, 2, 3],
                    fontWeight: 'normal',
                    lineHeight: '1.25',
                    py: 0,
                  }}
                />
              )}

              <Title
                as="h3"
                sx={{
                  fontSize: [1, 2, 3],
                  fontFamily: 'body',
                  fontWeight: 'light',
                  color: 'productCollectionTitle',
                  py: 0,
                }}
              >
                {title.toUpperCase()}
              </Title>
            </Box>
            <Box>
              <Text
                sx={{
                  color: 'black',
                  fontSize: [1, '18px'],
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
                color="red"
              >
                {minDisplayPrice} {hasPriceRange && `- ${maxDisplayPrice}`}{' '}
                {/* {hasOneVariant && compareAtPrice > minPrice && (
                <CompareAtPrice>{compareAtPriceFmormatted}</CompareAtPrice>
              )} */}
              </Text>
              <Text
                sx={{ fontSize: [1], fontWeight: 'bold', textAlign: 'right' }}
                color={!isPreorder ? 'green' : 'orange'}
              >
                {!isPreorder
                  ? intl.formatMessage({ id: 'product.instock' })
                  : // : intl.formatMessage({ id: 'product.soldout' })}
                    intl.formatMessage({ id: 'product.preorder' })}
              </Text>
            </Box>
          </Box>
        </Box>
      </AddToCardGroupBox>
    </CardStyled>
  );
};

export default IndividualProduct;
