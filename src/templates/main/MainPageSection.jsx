/** @jsx jsx */

import React from 'react';
import { jsx } from 'theme-ui';
import { Flex, Box } from 'rebass';

import MainPageCollectionBlock from './MainPageCollectionBlock';
import MainPageProductBlock from './MainPageProductBlock';

const MainPageSection = (props) => {
  const { section, data } = props;
  // const sectionItemsNumber =
  //   section && section.children && section.children.length > 0
  //     ? section.children.length
  //     : 1;
  const sectionItemsNumber = 2;
  const sectionHeight = sectionItemsNumber < 3 ? '60vh' : '40vh';

  return (
    <Box maxWidth={1300} mx="auto">
      <Flex flexWrap="wrap" mx={2}>
        {section.children.map((block, index) => {
          if (props.sectionType === 'collection') {
            return (
              <Box
                width={[1, 1 / sectionItemsNumber]}
                key={index}
                height={['30vh', '40vh']}
                p={1}
                mb={[3, 0]}
                sx={{
                  boxShadow:
                    '0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02)',
                }}
              >
                <MainPageCollectionBlock
                  block={block}
                  collection={
                    data.collections.nodes.filter(
                      (collection) => collection.handle === block.handle
                    )[0]
                  }
                  textColor={block.textColor ? block.textColor : undefined}
                  textBgColor={
                    block.textBgColor ? block.textBgColor : undefined
                  }
                  buttonText={block.buttonText ? block.buttonText : undefined}
                  buttonTextColor={
                    block.buttonTextColor ? block.buttonTextColor : undefined
                  }
                  buttonBgColor={
                    block.buttonBgColor ? block.buttonBgColor : undefined
                  }
                  backgroundPosition="50% 0%"
                />
              </Box>
            );
          } else if (props.sectionType === 'product') {
            return (
              <Box
                width={[1, 1 / sectionItemsNumber]}
                key={index}
                height={['60vh', sectionHeight]}
                height={['45vh', '45vh', '60vh']}
                p={1}
                mb={[3, 0]}
              >
                <MainPageProductBlock
                  block={block}
                  product={
                    data.products.nodes.filter(
                      (product) => product.handle === block.handle
                    )[0]
                  }
                  textColor={block.textColor ? block.textColor : undefined}
                  textBgColor={
                    block.textBgColor ? block.textBgColor : undefined
                  }
                  buttonText={block.buttonText ? block.buttonText : undefined}
                  buttonTextColor={
                    block.buttonTextColor ? block.buttonTextColor : undefined
                  }
                  buttonBgColor={
                    block.buttonBgColor ? block.buttonBgColor : undefined
                  }
                  backgroundPosition="50% 0%"
                />
              </Box>
            );
          } else {
            return '';
          }
        })}
      </Flex>
    </Box>
  );
};

export default MainPageSection;
