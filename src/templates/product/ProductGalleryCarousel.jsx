/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Box } from 'rebass';
import styled from '@emotion/styled';

import ShopifyImage from '../../components/ShopifyImage';
import NoImage from '../../components/Icons/NoImage';
import ChevronLeft from '../../components/Icons/ChevronLeft';
import ChevronRight from '../../components/Icons/ChevronRight';
import Badge from '../../components/Badge';
import strings from './strings.json';

const { ariaNextButtonLabel, ariaBackButtonLabel } = strings;

const StyledBadge = styled(Badge)`
  background-color: red !important;
`;

const ProductGalleryCarousel = ({
  images,
  title,
  initialDisplayPrice,
  comparePrice,
}) => {
  let percentageSale = null;
  if (initialDisplayPrice && comparePrice) {
    percentageSale =
      ((Number(initialDisplayPrice) - Number(comparePrice)) /
        Number(comparePrice)) *
      100;
    percentageSale = Math.ceil(percentageSale / 5) * 5;
  }

  const backgroundColorPercentage =
    percentageSale < -29
      ? '#790505'
      : percentageSale < -19
      ? '#cc0e0e'
      : '#f11e1e';

  return (
    <>
      {images && images.length === 1 ? (
        <ShopifyImage
          src={images[0].originalSrc}
          alt={images[0].altText || title}
          sizes="(min-width: 700px) 700px"
          base64={images[0].localFile.childImageSharp.main.src}
          aspectRatio={images[0].localFile.childImageSharp.main.aspectRatio}
        />
      ) : (
        ''
      )}
      {percentageSale && (
        <Box
          m={2}
          sx={{ display: 'inline-block', position: 'absolute', 'z-index': 9 }}
        >
          <StyledBadge
            text={`${percentageSale}%`}
            my={1}
            bgColor={backgroundColorPercentage}
          />
        </Box>
      )}
      <Box sx={{ position: 'relative' }}>
        <Slider aria-label="product images slider">
          {images && images.length > 1
            ? images.map((image, index) => {
                return (
                  <Slide index={index} key={index}>
                    <ShopifyImage
                      src={image.originalSrc}
                      alt={image.altText || title}
                      sizes="(min-width: 700px) 700px"
                      base64={image.localFile.childImageSharp.main.src}
                      aspectRatio={
                        image.localFile.childImageSharp.main.aspectRatio
                      }
                    />
                  </Slide>
                );
              })
            : ''}
        </Slider>
        {images && images.length > 1 ? (
          <>
            <ButtonBack
              aria-label={ariaBackButtonLabel}
              sx={{
                display: ['none', 'none', 'block'],
                position: 'absolute',
                bottom: '48%',
                left: 1,
                zIndex: 2,
                border: 0,
                bg: 'transparent',
                color: '#fff',
                ':disabled': {
                  opacity: 0.3,
                },
              }}
            >
              <ChevronLeft width="40px" height="40px" />
            </ButtonBack>
            <ButtonNext
              aria-label={ariaNextButtonLabel}
              sx={{
                display: ['none', 'none', 'block'],
                position: 'absolute',
                bottom: '48%',
                right: 1,
                zIndex: 2,
                border: 0,
                bg: 'transparent',
                color: '#fff',
                ':disabled': {
                  opacity: 0.3,
                },
              }}
            >
              <ChevronRight width="40px" height="40px" />
            </ButtonNext>
          </>
        ) : (
          ''
        )}
      </Box>

      {images && images.length === 0 ? (
        <NoImage
          color="grey"
          p={4}
          width="500px"
          height="500px"
          sx={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'grey',
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default ProductGalleryCarousel;
