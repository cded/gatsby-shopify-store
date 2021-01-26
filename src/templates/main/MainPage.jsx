import React, { useEffect } from 'react';
import { Box, Heading } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';

import MainPageCarousel from './MainPageCarousel';
import MainPageSection from './MainPageSection';
import MainPageProductBox from './MainPageProductBox';
import Banner from './Banner';

const MainPage = (props) => {
  const { data } = props;

  const { products: featuredProducts, bestsellers, collections } = data;

  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Ykfw4w';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box>
      <Box width={1} mb={1}>
        <MainPageCarousel />
      </Box>
      <GatsbyLink style={{ textDecoration: 'none' }} to="/collection/sale/">
        <Banner></Banner>
      </GatsbyLink>
      <Box style={{ maxWidth: 1300 }} mx="auto" px={2}>
        <Box width={1} mb={1}>
          <MainPageSection
            section={{ children: featuredProducts.nodes }}
            data={data}
            sectionType="product"
          />
        </Box>
        <Heading
          sx={{ textAlign: 'center', marginTop: '30px' }}
          fontSize={[30, 36, 42]}
        >
          YOUR CHOICE
        </Heading>
        <Heading
          sx={{ textAlign: 'center', fontWeight: 'normal' }}
          fontSize={[14, 16, 20]}
          mb={3}
        >
          TOP PRODUCTS OF THIS WEEK
        </Heading>
        <Box
          width={1}
          mb={1}
          sx={{
            display: ['block', 'flex'],
            flexWrap: 'wrap',
            margin: '0 -15px',
          }}
        >
          {bestsellers?.nodes?.length &&
            bestsellers.nodes.map((product, index) => (
              <Box
                width={[1, 1 / 3]}
                key={index}
                p={1}
                mb={[3, 0]}
                ml={['15px', 0]}
                sx={{ flex: '0 0 33.333333%' }}
              >
                <MainPageProductBox product={product} />
              </Box>
            ))}
        </Box>
        <Heading
          sx={{ textAlign: 'center', marginTop: '30px' }}
          fontSize={[30, 36, 42]}
        >
          CATEGORIES
        </Heading>
        <Heading
          sx={{
            textAlign: 'center',
            fontWeight: 'normal',
            textTransform: 'uppercase',
          }}
          fontSize={[14, 16, 20]}
          mb={3}
        >
          Explore our various offerings
        </Heading>
        <Box width={1} mb={1}>
          <MainPageSection
            section={{
              children: collections.nodes.filter(
                (collection) => collection.handle !== 'sale'
              ),
            }}
            data={data}
            sectionType="collection"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
