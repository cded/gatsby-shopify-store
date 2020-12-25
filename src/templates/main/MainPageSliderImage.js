import React from 'react';

import styled from '@emotion/styled';
import { Flex, Box, Text, Heading, Button } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0%;

  @media (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) {
    background-image: url(${(props) => props.img});
  }

  background-image: url(${(props) => props.img});
`;

const MainPageSliderImage = ({
  image,
  block,
  textColor = 'primary',
  textBgColor = 'white',
  buttonTextColor = 'primary',
  buttonBgColor = 'white',
}) => {
  return (
    <BgImage img={image}>
      <Flex
        m="auto"
        p="1"
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: '100%',
          height: '100%',
        }}
      >
        <Box m="auto" textAlign="center">
          <GatsbyLink
            // to={shopifyThemePath}
            sx={{
              color: textColor,
              textAlign: 'center',
              textDecoration: 'none',
              ':hover,:focus,.active': {
                color: textColor,
                textDecoration: 'none',
              },
            }}
          >
            <Heading
              as="h2"
              fontSize={[30, 36, 42]}
              // sx={{ textTransform: 'uppercase' }}
              color="background"
            >
              {block.name}
            </Heading>
            <Text
              fontSize={[1, 2, 3]}
              mt="3"
              sx={{ display: ['none', 'block'] }}
              color="white"
            >
              {block.description}
            </Text>
            <Heading
              fontSize={[30, 36, 42]}
              mt="3"
              sx={{
                display: ['none', 'block'],
                letterSpacing: '2px',
              }}
              color="background"
            >
              {block.subDescription}
            </Heading>
            {block.buttonText && (
              <Button
                variant="shopNow"
                sx={{
                  bg: buttonBgColor,
                  color: buttonTextColor,
                }}
              >
                {block.buttonText}
              </Button>
            )}
          </GatsbyLink>
        </Box>
      </Flex>
    </BgImage>
  );
};

export default MainPageSliderImage;
