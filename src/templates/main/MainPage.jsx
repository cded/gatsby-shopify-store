import React from 'react';
import { Box, Heading } from 'rebass';

import MainPageCarousel from './MainPageCarousel';
import MainPageSection from './MainPageSection';
import MainPageProductBox from './MainPageProductBox';

const MainPage = (props) => {
  const { data } = props;

  const { products: featuredProducts, bestsellers, collections } = data;

  const { cartUrl } = props.pageContext;

  return (
    <Box px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
      <Box width={1} mb={1}>
        <MainPageCarousel />
      </Box>
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
      >
        TOP PRODUCTS OF THIS WEEK
      </Heading>
      <Box
        width={1}
        mb={1}
        sx={{ display: ['block', 'flex'], flexWrap: 'wrap', margin: '0 -15px' }}
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
        sx={{ fontWeight: 'normal', marginTop: '30px', marginBottom: '20px' }}
        fontSize={[20, 25, 30]}
      >
        CATEGORIES
      </Heading>
      <Box width={1} mb={1}>
        <MainPageSection
          section={{ children: collections.nodes }}
          data={data}
          sectionType="collection"
        />
      </Box>
    </Box>
  );
};

export default MainPage;
