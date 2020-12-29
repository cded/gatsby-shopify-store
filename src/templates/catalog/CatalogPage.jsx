import React from 'react';
import { Flex, Box, Heading, Text } from 'rebass';

import CatalogProducts from './CatalogProducts';
import Pagination from '../../components/Pagination';
import CollectionStats from '../../components/CollectionStats';

function CatalogPage(props) {
  console.log(props);
  const { limit, skip, cartUrl } = props.pageContext;
  const { title, description } = props.data.collection.nodes[0];
  let products = [];

  props.data.collection.nodes.forEach((node) => {
    products = [...products, ...node.products];
  });

  return (
    <Flex flexWrap="wrap" px={2} pt={3} mx="auto" style={{ maxWidth: 1300 }}>
      <Flex
        width={1}
        px={4}
        py={2}
        flexWrap={['wrap', 'nowrap']}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Text textAlign="left">
          <Heading
            as="h1"
            fontSize={[20, 25, 30]}
            sx={{ textTransform: 'uppercase' }}
          >
            {title}
          </Heading>
          <Text fontSize={[2, 3]}>{description}</Text>
        </Text>
        <Text
          textAlign={['center', 'right']}
          width={['100%', 'auto']}
          pt={1}
          fontSize={[1]}
        >
          <CollectionStats
            limit={limit}
            skip={skip}
            productsNum={products.length}
          />
        </Text>
      </Flex>
      <CatalogProducts
        products={products}
        limit={limit}
        skip={skip}
        cartUrl={cartUrl}
      />
      <Box width={1} px={4} py={2} key="pagination">
        <Text textAlign="center">
          <Pagination {...props.pageContext} />
        </Text>
      </Box>
    </Flex>
  );
}

export default CatalogPage;
