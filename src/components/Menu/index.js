import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import { Flex, Box, Text } from 'rebass';
import styled from '@emotion/styled';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import { useMenuContext } from './context';
import Burger from '../Icons/Burger';
import Close from '../Icons/Close';
import CanadaFlag from '../Icons/CanadaFlag';

const Sidebar = styled(Box)`
  position: fixed;
  overflow: auto;
  z-index: 99;
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
  // background: #000;
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

const StyledClosed = styled(Close)`
  width: 15px;
  height: 15px;
  &: hover {
    opacity: 0.4;
  }
`;

const Separation = styled(Box)`
  width: 100%;
  border: 1px solid #e0e0e0;
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
      {!showSidebar ? (
        <Burger
          width="20px"
          height="20px"
          onClick={toggleSidebar}
          sx={{ cursor: 'pointer' }}
        />
      ) : (
        <Flex width={1 / 3} justifyContent="flex-end">
          <StyledClosed
            width="20px"
            height="20px"
            color="#2476f2"
            sx={{ cursor: 'pointer', marginTop: '-5px' }}
            onClick={toggleSidebar}
          />
        </Flex>
      )}
      <Box ref={sidebarRef}>
        {showSidebar ? (
          <>
            <Sidebar
              width={[1, 1 / 3, 1 / 4, 1 / 5]}
              sx={{ bg: 'backgroundMain', top: ['35px', '95px'] }}
            >
              <Separation mt="10px" mb="10px" />
              <Flex flexDirection="column">
                {collections &&
                  collections.map((element) => (
                    <GatsbyLink
                      to={`/collection/${element.handle}/`}
                      key={element.id}
                      style={{ textDecoration: 'none' }}
                    >
                      <MenuItem
                        bg="backgroundMain"
                        color="#6d6e70"
                        fontSize={[2]}
                        sx={{ textTransform: 'uppercase' }}
                        mt="10px"
                        fontFamily="heading"
                      >
                        {element.title}
                      </MenuItem>
                    </GatsbyLink>
                  ))}
                <Separation mt="20px" mb="20px" />
                <GatsbyLink
                  to={`/products/all/`}
                  style={{ textDecoration: 'none' }}
                >
                  <MenuItem
                    bg="backgroundMain"
                    color="#6d6e70"
                    fontSize={[2]}
                    sx={{ textTransform: 'uppercase' }}
                    mt="10px"
                    fontFamily="heading"
                  >
                    Catalog
                  </MenuItem>
                </GatsbyLink>
                <GatsbyLink to={`/contact/`} style={{ textDecoration: 'none' }}>
                  <MenuItem
                    bg="backgroundMain"
                    color="#6d6e70"
                    fontSize={[2]}
                    sx={{ textTransform: 'uppercase' }}
                    mt="10px"
                    fontFamily="heading"
                  >
                    Contact Us
                  </MenuItem>
                </GatsbyLink>
                <GatsbyLink to={`/about/`} style={{ textDecoration: 'none' }}>
                  <MenuItem
                    bg="backgroundMain"
                    color="#6d6e70"
                    fontSize={[2]}
                    sx={{ textTransform: 'uppercase' }}
                    mt="10px"
                    fontFamily="heading"
                  >
                    About Us
                  </MenuItem>
                </GatsbyLink>
                <MenuItem
                  bg="backgroundMain"
                  color="#6d6e70"
                  fontSize={[2]}
                  sx={{ textTransform: 'uppercase', display: 'flex' }}
                  mt="10px"
                  fontFamily="heading"
                >
                  <CanadaFlag width="25px" height="25px" />
                  <Text style={{ marginLeft: '5px' }} fontSize={[2]} mt="1px">
                    (CAD)
                  </Text>
                </MenuItem>
              </Flex>

              <Text
                fontSize={4}
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  right: '20px',
                }}
                color="#6d6e70"
                fontFamily="heading"
              >
                {storeName}
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
