/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
/* eslint no-unused-vars: 0 */
import { useState } from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import { Box } from 'rebass';
import { useIntl } from 'gatsby-plugin-intl';
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

import ChevronLeft from '../../components/Icons/ChevronLeft';
import ChevronRight from '../../components/Icons/ChevronRight';
import strings from './strings.json';
import MainPageSliderImage from './MainPageSliderImage';

import img1 from '../../images/carousel1.jpg';
import img2 from '../../images/carousel2.jpg';

const { ariaNextButtonLabel, ariaBackButtonLabel } = strings;

const MainPageCarousel = () => {
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

  const intl = useIntl();

  const newCarousel = [
    {
      name: intl.formatMessage({ id: 'home.carousel1.title' }),
      image: img1,
      description: intl.formatMessage({ id: 'home.carousel1.description' }),
      highlightText: true,
      buttonText: intl.formatMessage({ id: 'home.shopNow' }),
    },
    {
      name: intl.formatMessage({ id: 'home.carousel2.title' }),
      image: img2,
      buttonText: intl.formatMessage({ id: 'home.shopNow' }),
      highlightTitle: true,
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
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
        <Slider sx={{ maxHeight: '80vh' }}>
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
