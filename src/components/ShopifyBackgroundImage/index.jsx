import React from 'react';
import { getSizedImageUrl } from '@shopify/theme-images';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.contain ? 'contain' : 'cover')};
  background-position-x: 50%;
  background-position-y: 0%;
  background-position-y: ${(props) => props.positionY};

  @media (-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 120dpi) {
    background-image: url(${({ src, maxSize }) =>
      getSizedImageUrl(src, maxSize + 'x@2x')});
  }

  background-image: url(${({ src, maxSize }) =>
    getSizedImageUrl(src, maxSize + 'x')});
`;

const NoImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.contain ? 'contain' : 'cover')};
  background-position-x: 50%;
  background-position-y: 0%;
`;

const StyledBackgroundSection = styled.div`
  width: 100%;
  height: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: ${(props) => (props.contain ? 'contain' : 'cover')};
`;

const ShopifyBackgroundImage = ({
  src,
  fluid,
  maxSize,
  children,
  contain,
  positionY,
}) => {
  return (
    <>
      {fluid ? (
        <StyledBackgroundSection contain={contain}>
          <BackgroundImage
            fluid={fluid}
            Tag="section"
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: `${contain ? 'contain' : 'cover'}`,
            }}
          >
            {children}
          </BackgroundImage>
        </StyledBackgroundSection>
      ) : src ? (
        <BgImage
          src={src}
          maxSize={maxSize}
          contain={contain}
          positionY={positionY}
        >
          {children}
        </BgImage>
      ) : (
        <NoImage></NoImage>
      )}
    </>
  );
};

export default ShopifyBackgroundImage;
