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
  background-position-y: ${(props) => props.positionY};

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
    <BgImage img={image} positionY={block.positionY}>
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
        <Box
          ml="auto"
          mr="auto"
          mt={block.textPosition || '50px'}
          mb={block.textPosition || '0'}
          textAlign="center"
        >
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
              sx={
                block.highlightText
                  ? {
                      textShadow:
                        '-1px -1px 0 #db9200, 1px -1px 0 #db9200, -1px 1px 0 #db9200, 1px 1px 0 #db9200',
                    }
                  : block.highlightTitle && {
                      color: '#db9200 !important',
                    }
              }
              color="background"
            >
              {block.name}
            </Heading>
            <Text
              fontSize={[1, 2, 3]}
              mt="3"
              sx={{ display: ['none', 'block'] }}
              sx={
                block.highlightText && {
                  textShadow:
                    '-1px -1px 0 #b38709, 1px -1px 0 #b38709, -1px 1px 0 #b38709, 1px 1px 0 #b38709',
                }
              }
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
              <StyledButton
                variant="shopNow"
                sx={{
                  bg: buttonBgColor,
                  color: buttonTextColor,
                }}
                fontFamily="heading"
                fontSize={[12, 15, 17]}
              >
                {block.buttonText}
              </StyledButton>
            )}
          </GatsbyLink>
        </Box>
      </Flex>
    </BgImage>
  );
};

export default MainPageSliderImage;
