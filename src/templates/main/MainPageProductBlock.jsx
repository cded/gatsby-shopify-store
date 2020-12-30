/** @jsx jsx */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { jsx } from 'theme-ui';
import { Flex, Box, Text, Heading, Button } from 'rebass';
import styled from '@emotion/styled';

import ShopifyBackgroundImage from '../../components/ShopifyBackgroundImage';
import substrDescription from '../../utils/substrDescription';

const BottomBar = styled.div`
  height: 15%;
  bottom: 0;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  &:hover {
    background: #2476f2;
    color: #fff;
  }
`;

const MainPageProductBlock = (props) => {
  const {
    title,
    description,
    fields: {
      shopifyThemePath,
      firstImage,
      descriptionSections,
      shortDescription,
    },
  } = props.product;

  const {
    block,
    textColor = 'primary',
    textBgColor = 'white',
    buttonText = 'Shop now',
    buttonTextColor = 'primary',
    buttonBgColor = 'white',
  } = props;

  return (
    <ShopifyBackgroundImage
      src={firstImage.originalSrc}
      maxSize="400"
      positionY="70%"
    >
      <GatsbyLink to={shopifyThemePath}>
        <Flex
          m="auto"
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <BottomBar>
            <Box>
              <GatsbyLink
                to={shopifyThemePath}
                sx={{
                  color: textColor,
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  ':hover,:focus,.active': {
                    color: textColor,
                    textDecoration: 'none',
                  },
                }}
              >
                <Heading
                  as="h2"
                  fontSize={[20, 25, 30]}
                  sx={{
                    textTransform: 'uppercase',
                    // textShadow:
                    //   '-1px -1px 0 #2476f2, 1px -1px 0 #2476f2, -1px 1px 0 #2476f2, 1px 1px 0 #2476f2',
                    backdropFilter: 'blur(10px)',
                  }}
                  color="#fff"
                >
                  {block.name ? block.name : substrDescription(title, 30)}
                </Heading>
                <StyledButton
                  variant="shopNow"
                  sx={{
                    bg: buttonBgColor,
                    color: buttonTextColor,
                  }}
                  fontFamily="heading"
                  fontSize={[12, 15, 17]}
                >
                  {buttonText.toUpperCase()}
                </StyledButton>
              </GatsbyLink>
            </Box>
          </BottomBar>
        </Flex>
      </GatsbyLink>
    </ShopifyBackgroundImage>
  );
};

export default MainPageProductBlock;
