import React from 'react';

import styled from '@emotion/styled';
import { Flex, Box, Text, Heading, Button } from 'rebass';
import { Link as GatsbyLink, navigate } from 'gatsby';

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0%;
  background-position-y: ${(props) => props.positionY};

  @media (min-width: 1200px) {
    background-position-y: ${(props) => `calc(${props.positionY} + 40%)`};
  }

  @media (min-width: 1600px) {
    background-position-y: ${(props) => `calc(${props.positionY} + 110%)`};
  }

  @media (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) {
    background-image: url(${(props) => props.img});
  }

  background-image: url(${(props) => props.img});
`;

const StyledButton = styled(Button)`
  &:hover {
    background: #2476f2;
    color: #fff;
  }
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
    <BgImage
      img={image}
      positionY={block.positionY}
      sx={{ backgroundPositionY: ['10%', '120%', '190%'] }}
    >
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
        <Box ml="auto" mr="auto" textAlign="center">
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
            <Box
              sx={{
                padding: '20px',
              }}
            >
              <Heading
                as="h2"
                fontSize={[18, 36, 42]}
                color="background"
                sx={
                  block.highlightTitle && {
                    backdropFilter: 'blur(10px)',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }
                }
              >
                {block.name}
              </Heading>
              <Text
                fontSize={[12, 16, 20]}
                mt={[1, 3]}
                mb={[1, 3]}
                color="white"
                sx={
                  block.highlightText && {
                    backdropFilter: 'blur(5px)',
                    width: ['144px', '244px'],
                    margin: 'auto',
                  }
                }
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
                <StyledButton
                  variant="shopNow"
                  sx={{
                    bg: buttonBgColor,
                    color: buttonTextColor,
                    textTransform: 'uppercase',
                    padding: ['4px 8px', '8px 16px'],
                  }}
                  fontFamily="heading"
                  fontSize={[10, 15, 17]}
                  onClick={() => navigate('products/all')}
                  mt={block.buttonMT}
                  mb={1}
                >
                  {block.buttonText}
                </StyledButton>
              )}
            </Box>
          </GatsbyLink>
        </Box>
      </Flex>
    </BgImage>
  );
};

export default MainPageSliderImage;
