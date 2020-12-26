/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { jsx } from 'theme-ui';
import styled from '@emotion/styled/macro';
import { Flex, Box, Text, Heading, Button } from 'rebass';

import ShopifyBackgroundImage from '../../components/ShopifyBackgroundImage';
import substrDescription from '../../utils/substrDescription';

const BottomBar = styled.div`
  height: 15%;
  bottom: 0;
  width: 100%;
  position: absolute;
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

const MainPageCollectionBlock = (props) => {
  const {
    title,
    description,
    image,
    fields: { shopifyThemePath },
  } = props.collection;

  const {
    block,
    textColor = 'primary',
    textBgColor = 'white',
    buttonText = 'Explore',
    buttonTextColor = 'primary',
    buttonBgColor = 'white',
  } = props;

  return (
    <ShopifyBackgroundImage
      src={image && image.src}
      maxSize="1300"
      sx={{ border: '1px solid black' }}
      contain
    >
      <Flex
        m="auto"
        p="1"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <BottomBar>
          <Box m="auto" textAlign="center" sx={{ width: '100%' }}>
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
                }}
              >
                {block.name ? block.name : title}
              </Heading>
              <Text
                fontSize={[1, 2, 3]}
                mt="3"
                sx={{ display: ['none', 'block'] }}
              >
                {block.description
                  ? block.description
                  : substrDescription(description, 80)}
              </Text>
              <StyledButton
                variant="shopNow"
                sx={{
                  bg: '#000',
                  color: '#fff',
                }}
                fontFamily="heading"
                fontSize={[12, 15, 17]}
              >
                {buttonText}
              </StyledButton>
            </GatsbyLink>
          </Box>
        </BottomBar>
      </Flex>
    </ShopifyBackgroundImage>
  );
};

export default MainPageCollectionBlock;
