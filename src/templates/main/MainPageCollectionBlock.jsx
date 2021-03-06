/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { jsx } from 'theme-ui';
import styled from '@emotion/styled/macro';
import { Flex, Box, Text, Heading, Button } from 'rebass';
import { useIntl, Link as GatsbyLink } from 'gatsby-plugin-intl';

import ShopifyBackgroundImage from '../../components/ShopifyBackgroundImage';

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
    image,
    handle,
    fields: { shopifyThemePath },
  } = props.collection;
  const intl = useIntl();

  const {
    textColor = 'primary',
    buttonText = intl.formatMessage({ id: 'home.exploreButton' }),
  } = props;

  return (
    <ShopifyBackgroundImage
      src={image && image.src}
      fluid={image && image.localFile.childImageSharp.fluid}
      maxSize="1300"
      sx={{ border: '1px solid black' }}
      contain
    >
      <GatsbyLink to={`${shopifyThemePath}/`}>
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
                to={`${shopifyThemePath}/`}
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
                  fontSize={[18, 22, 26]}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  {intl.formatMessage({ id: handle })}
                </Heading>
                {/* <Text
                  fontSize={[1, 2, 3]}
                  mt="3"
                  sx={{ display: ['none', 'block'] }}
                >
                  {block.description
                    ? block.description
                    : substrDescription(description, 80)}
                </Text> */}
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
      </GatsbyLink>
    </ShopifyBackgroundImage>
  );
};

export default MainPageCollectionBlock;
