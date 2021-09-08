import React, { useState } from 'react';
import { Flex, Text, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { useIntl, Link as GatsbyLink } from 'gatsby-plugin-intl';
import useShopifyFunctions from '../hooks/useShopifyFunctions';

import Menu from './Menu';
import Search from './Search';
import ShoppingCart from './Icons/ShoppingCart';
import strings from './strings.json';
import CanadaFlag from './Icons/CanadaFlag';
import Language from './Language/Language';

const NavbarBase = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
`;

const Nav = styled(NavbarBase)`
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${(props) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props) => (props.show ? 'none' : 'translate(0, -100%)')};
`;

const FlagBox = styled(Box)`
  align-items: center;
  margin-top: -2.5px;
  div {
    color: #000;
    margin-left: 5px;
    font-size: 12px;
    margin-top: 1px;
  }
`;

const CartItemCount = styled.span`
  position: absolute;
  top: -7px;
  right: -6px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #2476f2;
  color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
  letter-spacing: normal;
  transition: background-color 0.6s;
`;

const TextCategory = styled(Text)`
  background-color: ${(props) => props.isSale && '#F26542'};
  color: ${(props) => props.isSale && '#fff'};
  &:hover {
    background-color: ${(props) => props.isSale && '#F26542'};
    color: ${(props) => props.isSale && '#fff'};
    opacity: ${(props) => props.isSale && '0.8'};
  }
`;

const Navbar = () => {
  const [hideNavbarOnScroll, setHideNavbarOnScroll] = useState(true);
  const intl = useIntl();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // Note: prevPos.y > -12 is here to fix Nav component disappearing bug
      // due to elastic scrolling/bounce effect in mobile Safari.
      const isShow = currPos.y > prevPos.y || prevPos.y > -12;
      if (isShow !== hideNavbarOnScroll) setHideNavbarOnScroll(isShow);
    },
    [hideNavbarOnScroll],
    null,
    false,
    100
  );

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          gatsbyStorefrontConfig {
            storeName
          }
        }
      }
      collections: allShopifyCollection {
        nodes {
          handle
          title
          description
          fields {
            shopifyThemePath
          }
        }
      }
    }
  `);

  const { ariaShoppingCartLabel, ariaHomaPageLinkLabel } = strings;

  const { storeName } = data.site.siteMetadata.gatsbyStorefrontConfig;
  const collections = data.collections.nodes;

  const {
    checkout: { lineItems },
  } = useShopifyFunctions();
  const cartItemCount = lineItems?.length;

  return (
    <Nav show>
      <Box
        py={[2, 3]}
        width={1}
        as="nav"
        bg="white"
        sx={!hideNavbarOnScroll && { display: 'none' }}
      >
        <Flex
          style={{ maxWidth: 1300 }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          px={[3, null, 4]}
        >
          <Box width={100} sx={{ display: ['block', 'none'] }}>
            <Menu storeName={storeName} />
          </Box>

          <Text
            as={GatsbyLink}
            to="/contact/"
            style={{ textDecoration: 'none', textTransform: 'uppercase' }}
            mr="10px"
            color="primary"
            fontSize="0.875em"
            fontFamily="heading"
            fontWeight="500"
            sx={{ display: ['none', 'block'] }}
          >
            {intl.formatMessage({ id: 'contact_us' })}
          </Text>

          <Text
            as={GatsbyLink}
            to="/about/"
            style={{ textDecoration: 'none', textTransform: 'uppercase' }}
            ml="10px"
            color="primary"
            fontSize="0.875em"
            fontFamily="heading"
            fontWeight="500"
            sx={{ display: ['none', 'block'] }}
          >
            {intl.formatMessage({ id: 'about_us' })}
          </Text>

          <Text
            as={GatsbyLink}
            to="/"
            aria-label={ariaHomaPageLinkLabel}
            style={{ textDecoration: 'none' }}
            ml="auto"
          >
            <Flex>
              <Text
                color="primary"
                fontSize={[2, 3]}
                sx={{
                  marginLeft: [0, 60],
                  width: ['100px', 'auto'],
                  display: 'flex',
                }}
                fontFamily="heading"
              >
                {storeName}
              </Text>
            </Flex>
          </Text>

          <Flex ml="auto" width={['auto']} style={{ alignItems: 'center' }}>
            <Text
              as={GatsbyLink}
              to="/products/all/"
              style={{ textDecoration: 'none', textTransform: 'uppercase' }}
              mr="20px"
              ml="auto"
              color="primary"
              fontSize="0.875em"
              fontFamily="heading"
              fontWeight="500"
              sx={{ display: ['none', 'block'] }}
            >
              {intl.formatMessage({ id: 'catalog' })}
            </Text>

            <Text
              mr="20px"
              sx={{ display: ['none', 'flex'], fontFamily: 'heading' }}
              color="primary"
            >
              <Language />
            </Text>

            <FlagBox ml="auto" sx={{ display: ['none', 'flex'] }} mr="20px">
              <CanadaFlag width="25px" height="25px" />
              <div>(CAD)</div>
            </FlagBox>

            <Text
              mr="15px"
              sx={{
                display: ['flex', 'none'],
                fontFamily: 'heading',
                fontSize: '14px',
              }}
              color="primary"
            >
              <Language display="short" />
            </Text>

            <Box ml="auto" sx={{ marginRight: ['10px'] }}>
              <Search width="25px" height="25px" color="primary" />
            </Box>

            <Text
              as={GatsbyLink}
              aria-label={ariaShoppingCartLabel}
              to="/cart/"
              fontSize={4}
              style={{ textDecoration: 'none', position: 'relative' }}
              sx={{ marginLeft: ['0', 'auto'] }}
            >
              <ShoppingCart width="25px" height="25px" color="primary" />
              {cartItemCount > 0 && (
                <CartItemCount>{cartItemCount}</CartItemCount>
              )}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box as="nav" bg="white" sx={{ display: ['none', 'block'] }}>
        <Flex
          style={{ maxWidth: 1300 }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          px={[3, null, 4]}
        >
          {!hideNavbarOnScroll && (
            <Text
              as={GatsbyLink}
              to="/"
              color="primary"
              fontSize={[2, 3]}
              aria-label={ariaHomaPageLinkLabel}
              sx={{
                marginRight: 'auto',
                width: ['160px', 'auto'],
                display: ['none', 'none', 'flex'],
                ':hover': {
                  color: '#000',
                },
              }}
              fontFamily="heading"
              style={{ textDecoration: 'none' }}
            >
              {storeName.toUpperCase()}
            </Text>
          )}
          <Box
            p={hideNavbarOnScroll ? '0' : '12px'}
            mb={hideNavbarOnScroll && '10px'}
          >
            {collections?.length > 0 &&
              collections.map((collection) => (
                <TextCategory
                  as={GatsbyLink}
                  to={`${collection.fields.shopifyThemePath}/`}
                  style={{ textDecoration: 'none', position: 'relative' }}
                  sx={{
                    textTransform: 'uppercase',

                    ':hover': {
                      backgroundColor: '#f8f8f8',
                      color: '#2476f2',
                    },
                  }}
                  mr="10px"
                  color="#000"
                  p="8px 12px"
                  isSale={collection.handle === 'sale'}
                >
                  {intl.formatMessage({
                    id: collection.handle,
                    defaultMessage: collection.title,
                  })}
                </TextCategory>
              ))}
          </Box>

          {!hideNavbarOnScroll && (
            <Box ml="auto" sx={{ display: 'flex' }}>
              <Box mr="10px" sx={{ display: ['none', 'block'] }}>
                <Search width="25px" height="25px" color="primary" />
              </Box>

              <Text
                as={GatsbyLink}
                aria-label={ariaShoppingCartLabel}
                to="/cart/"
                fontSize={4}
                style={{ textDecoration: 'none', position: 'relative' }}
                sx={{ marginLeft: ['0', 'auto'] }}
              >
                <ShoppingCart width="25px" height="25px" color="primary" />
                {cartItemCount > 0 && (
                  <CartItemCount>{cartItemCount}</CartItemCount>
                )}
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
    </Nav>
  );
};

export default React.memo(Navbar);
