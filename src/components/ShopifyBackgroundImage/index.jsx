import React from 'react';
import { getSizedImageUrl } from '@shopify/theme-images';
import styled from '@emotion/styled';

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

const ShopifyBackgroundImage = ({
  src,
  maxSize,
  children,
  contain,
  positionY,
}) => {
  return (
    <>
      {src ? (
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
