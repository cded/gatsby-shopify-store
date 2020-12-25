/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import React, { useState } from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Box } from 'rebass';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './carousel.css';

import ChevronLeft from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/ChevronLeft';
import ChevronRight from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/Icons/ChevronRight';
import strings from '@gatsbystorefront/gatsby-theme-storefront-shopify/src/components/strings.json';
import MainPageSliderImage from './MainPageSliderImage';

import img from '../../../../images/image7.jpg';
import img1 from '../../../../images/image1.jpg';
import img2 from '../../../../images/image2.jpg';

const { ariaNextButtonLabel, ariaBackButtonLabel } = strings;

const MainPageCarousel = (props) => {
  const { carousel, data } = props;

  const {
    theme: { breakpoints },
  } = useThemeUI();

  let naturalSlideHeightMediaQuery;

  if (typeof window !== `undefined`) {
    naturalSlideHeightMediaQuery =
      window && window.matchMedia(`(max-width: ${breakpoints[1]})`);
    naturalSlideHeightMediaQuery.addEventListener('change', (e) => {});
  }

  const [naturalSlideHeight, setNaturalSlideHeight] = useState(
    naturalSlideHeightMediaQuery && naturalSlideHeightMediaQuery.matches
      ? 100
      : 60
  );

  if (typeof window !== `undefined`) {
    naturalSlideHeightMediaQuery.addEventListener('change', (e) => {
      setNaturalSlideHeight(e.matches ? 100 : 60);
    });
  }

  const newCarousel = [
    {
      name: 'H&B',
      image: img,
      description: 'Present',
      subDescription: 'LEDCO',
    },
    {
      name: 'Make your home alive!',
      image: img1,
      description: 'with led furniture',
    },
    {
      name: 'Discover our selection of products',
      image: img2,
      buttonText: 'Shop now',
    },
  ];

  return (
    <Box
      mx={2}
      px={1}
      sx={{
        position: 'relative',
        textAlign: 'center',
        display: ['none', 'block'],
        maxWidth: 1300,
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={naturalSlideHeight}
        totalSlides={newCarousel.length}
        isPlaying
        interval={10000}
        infinite
      >
        <Slider>
          {newCarousel.map((slide, index) => (
            <Slide key={index} index={index}>
              <MainPageSliderImage
                block={slide}
                key={index}
                textColor={slide.textColor ? slide.textColor : undefined}
                textBgColor={slide.textBgColor ? slide.textBgColor : undefined}
                buttonText={slide.buttonText ? slide.buttonText : undefined}
                buttonTextColor={
                  slide.buttonTextColor ? slide.buttonTextColor : undefined
                }
                buttonBgColor={
                  slide.buttonBgColor ? slide.buttonBgColor : undefined
                }
                image={slide.image}
              />
            </Slide>
          ))}
        </Slider>

        <ButtonBack
          aria-label={ariaBackButtonLabel}
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: ['36%', '50%'],
            left: 1,
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'background',
            py: 2,
            px: [0, 3],
          }}
        >
          <ChevronLeft width="40px" height="40px" />
        </ButtonBack>

        <ButtonNext
          aria-label={ariaNextButtonLabel}
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: ['36%', '50%'],
            right: 1,
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'background',
            py: 2,
            px: [0, 3],
          }}
        >
          <ChevronRight width="40px" height="40px" />
        </ButtonNext>

        <DotGroup
          sx={{
            display: ['none', 'block'],
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translate(-50%)',
            'z-index': '2',
            border: 0,
            bg: 'transparent',
            color: 'primary',
            py: '2',
            px: '3',
          }}
        />
      </CarouselProvider>
    </Box>
  );
};

export default MainPageCarousel;
