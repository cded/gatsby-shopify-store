import React, { useState } from 'react';
import { Flex, Text, Box } from 'rebass';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import styled from '@emotion/styled';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import useShopifyFunctions from '../hooks/useShopifyFunctions';

import Menu from './Menu';
import Search from './Search';
import ShoppingCart from './Icons/ShoppingCart';
import strings from './strings.json';
import CanadaFlag from './Icons/CanadaFlag';

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
  top: -10px;
  right: -6px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: #2476f2;
  color: #fff;
  font-size: 0.7rem;
  text-align: center;
  line-height: 19px;
  letter-spacing: normal;
  transition: background-color 0.6s;
`;

const Navbar = (props) => {
  const [hideNavbarOnScroll, setHideNavbarOnScroll] = useState(true);

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
            menu {
              handle
              id
              link
              name
              parentId
              type
            }
          }
        }
      }
    }
  `);

  const { ariaShoppingCartLabel, ariaHomaPageLinkLabel } = strings;

  const { storeName } = data.site.siteMetadata.gatsbyStorefrontConfig;

  const {
    checkout: { lineItems },
  } = useShopifyFunctions();
  const cartItemCount = lineItems?.length;

  return (
    <Nav show={hideNavbarOnScroll}>
      <Box py={[2, 3]} width={1} as="nav" bg="white">
        <Flex
          style={{ maxWidth: 1300 }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          px={[3, null, 4]}
        >
          <Box width={100}>
            <Menu storeName={storeName} />
          </Box>

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
                // sx={{ display: ['none', 'block'] }}
                sx={{
                  marginLeft: [0, 140],
                  width: ['160px', 'auto'],
                  display: 'flex',
                }}
                fontFamily="heading"
              >
                <Text fontFamily="heading" mr="5px">
                  H&B{' '}
                </Text>{' '}
                {storeName.toUpperCase()}
              </Text>
            </Flex>
          </Text>

          <Flex ml="auto" width={250} style={{ alignItems: 'center' }}>
            <Text
              as={GatsbyLink}
              to="/products/all"
              style={{ textDecoration: 'none' }}
              mr="10px"
              ml="auto"
            >
              <Text
                color="primary"
                fontSize="0.875em"
                fontFamily="heading"
                fontWeight="600"
              >
                CATALOG
              </Text>
            </Text>

            <FlagBox ml="auto" sx={{ display: ['none', 'flex'] }}>
              <CanadaFlag width="25px" height="25px" />
              <div>(CAD)</div>
            </FlagBox>

            <Box ml="auto" sx={{ display: ['none', 'block'] }}>
              <Search width="25px" height="25px" color="primary" />
            </Box>

            <Text
              as={GatsbyLink}
              aria-label={ariaShoppingCartLabel}
              to="/cart"
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
    </Nav>
  );
};

export default React.memo(Navbar);
