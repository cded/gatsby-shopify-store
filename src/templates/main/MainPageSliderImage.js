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
          textAlign="center"
          sx={{ display: 'flex', alignItems: 'center', marginTop: '-20%' }}
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
            <Box
              sx={{
                padding: '20px',
                backdropFilter: 'blur(5px)',
                background: 'rgba(0,0,0,0.5)',
              }}
              mt={block.textPosition || '50px'}
              mb={block.textPosition || '0'}
            >
              <Heading as="h2" fontSize={[18, 36, 42]} color="background">
                {block.name}
              </Heading>
              <Text
                fontSize={[12, 16, 20]}
                mt={[1, 3]}
                mb={[1, 3]}
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
