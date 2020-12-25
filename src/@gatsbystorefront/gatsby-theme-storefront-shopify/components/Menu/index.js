import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box, Text } from 'rebass';
import GatsbyLink from 'gatsby-link';
import styled from '@emotion/styled';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { useMenuContext } from './context';
import Burger from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/Burger';
import Close from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/Close';

const Sidebar = styled(Box)`
  position: fixed;
  overflow: auto;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100%;
`;

const DisabledArea = styled(Box)`
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  overflow: 'hidden';
`;

const MenuItem = styled(Box)`
  padding-right: 15px;
  padding-left: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 1px;
  &: hover {
    opacity: 0.4;
  }
`;

const MenuItemTitle = styled(MenuItem)`
  padding-left: 15px;
  border-bottom: 2px solid #2476f2;
  width: 100%;
  &: hover {
    opacity: 1;
  }
`;

const StyledClosed = styled(Close)`
  width: 15px;
  height: 15px;
  &: hover {
    opacity: 0.4;
  }
`;

const Menu = ({ storeName }) => {
  const [showSidebar, setShowsidebar] = useState(false);
  const { menuShowed, setMenuShowed } = useMenuContext();

  const toggleSidebar = () => {
    setShowsidebar(!showSidebar);
    setMenuShowed(!menuShowed);
  };

  const sidebarRef = useRef();

  useEffect(() => {
    if (showSidebar) {
      disableBodyScroll(sidebarRef.current);
    } else {
      enableBodyScroll(sidebarRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [showSidebar]);

  const data = useStaticQuery(graphql`
    {
      allShopifyCollection {
        nodes {
          id
          handle
          title
          description
          updatedAt
        }
      }
    }
  `);

  const collections = data.allShopifyCollection.nodes;

  return (
    <>
      <Burger
        width="20px"
        height="20px"
        onClick={toggleSidebar}
        sx={{ cursor: 'pointer' }}
      />
      <Box ref={sidebarRef}>
        {showSidebar ? (
          <>
            <Sidebar width={[1, 1 / 3, 1 / 4, 1 / 5]} sx={{ bg: 'menu' }}>
              <Flex bg="menuItem" color="menuText" p={[2]} fontSize={[4]}>
                <MenuItemTitle bg="menuItem" color="menuText" fontSize={[4]}>
                  Categories
                </MenuItemTitle>
                <Flex width={1 / 3} justifyContent="flex-end">
                  <StyledClosed
                    width="25px"
                    height="25px"
                    color="menuText"
                    sx={{ cursor: 'pointer' }}
                    onClick={toggleSidebar}
                  />
                </Flex>
              </Flex>

              <Flex flexDirection="column">
                {collections &&
                  collections.map((element) => (
                    <GatsbyLink
                      to={`/collection/${element.handle}`}
                      key={element.id}
                      style={{ textDecoration: 'none' }}
                    >
                      <MenuItem bg="menuItem" color="menuText" fontSize={[4]}>
                        {element.title}
                      </MenuItem>
                    </GatsbyLink>
                  ))}
              </Flex>

              <Text
                fontSize={4}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                }}
                color="menuText"
                fontFamily="heading"
              >
                H&B {storeName}
              </Text>
            </Sidebar>

            <DisabledArea onClick={toggleSidebar} />
          </>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default Menu;
