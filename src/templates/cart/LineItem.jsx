import React, { useState, useEffect } from 'react';
import { Flex, Box, Image, Text } from 'rebass';
import GatsbyLink from 'gatsby-link';

import NoImage from '../../components/Icons/NoImage';
import strings from './strings.json';
import QuantityButton from '../product/QuantityButton';

const { cartItemPriceLabel } = strings;

const LineItem = (props) => {
  const {
    lineItem,
    decreaseProductAmount,
    increaseProductAmount,
    removeItem,
  } = props;
  const { quantity, title, variant, id } = lineItem;

  const { selectedOptions } = variant;

  const [imageSrc, setImageSrc] = useState();
  const [altText, setAltText] = useState();
  const [options, setOptions] = useState();
  const [showVariants, setShowVariants] = useState();

  useEffect(() => {
    if (variant.image != null) {
      const { src, text } = variant.image;
      setImageSrc(src);
      setAltText(text);
    }
  }, [variant.image]);

  useEffect(() => {
    setOptions(selectedOptions);
    setShowVariants(
      selectedOptions.length > 0 &&
        selectedOptions[0].name !== 'Title' &&
        selectedOptions[0].values !== 'Default Title'
    );
  }, [selectedOptions]);

  // const displayPrice = formatPrice(Number(variant.price), locales, currency);
  const displayPrice = `CA $${variant.price}`;

  return (
    <React.Fragment>
      <Flex
        flexDirection={['column', 'row']}
        alignItems="top"
        fontFamily="body"
        sx={{ borderBottom: '1px solid #dddddf' }}
        {...props}
      >
        <Flex
          width={[1, 2 / 10, 2 / 10]}
          p={[1, 3]}
          justifyContent={['center', 'flex-start']}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={altText}
              width={['130px', 1]}
              height={['130px', '100%']}
            />
          ) : (
            <NoImage
              width={['130px', 1]}
              maxHeight={'130px'}
              color="grey"
              p={4}
            />
          )}
        </Flex>

        <Flex
          width={[1, 4 / 10, 5 / 10]}
          p={[1, 3]}
          justifyContent={['center', 'flex-start']}
        >
          <Box>
            <Text
              as={GatsbyLink}
              to={variant?.product && `/product/${variant.product.handle}`}
              fontSize={[2, 3]}
              sx={{
                textTransform: 'uppercase',
                color: '#000',
                textDecoration: 'none',
                ':hover': {
                  textDecoration: 'none',
                },
              }}
            >
              {title}
            </Text>
            {showVariants ? (
              <Flex
                pt={2}
                fontSize={[2]}
                lineHeight={1}
                style={{ opacity: 0.7 }}
                sx={{ textTransform: 'uppercase' }}
              >
                {options.map((option, index) => {
                  return (
                    <Box key={option.name} mr={2}>
                      {option.value}
                      {index + 1 < options.length ? ',' : ''}
                    </Box>
                  );
                })}
              </Flex>
            ) : (
              ''
            )}
          </Box>
        </Flex>

        <Flex
          width={[1, 2 / 10]}
          p={[1, 3]}
          justifyContent={['center', 'flex-start']}
          // alignItems="center"
        >
          <Box width={['auto', 1]}>
            <QuantityButton
              quantity={quantity}
              decreaseAmount={() => decreaseProductAmount({ id, quantity })}
              increaseAmount={() => increaseProductAmount({ id, quantity })}
              noLabel
            />
          </Box>
        </Flex>

        <Box width={[1, 2 / 10]} p={[1, 3]} sx={{ textAlign: 'right' }}>
          <Text fontSize={[2, 2]} aria-label={cartItemPriceLabel}>
            {displayPrice}
          </Text>
          <Text
            fontSize={[1, 1]}
            onClick={() => removeItem(id)}
            sx={{
              cursor: 'pointer',
              ':hover': {
                color: '#2476f2',
              },
            }}
          >
            Remove
          </Text>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default LineItem;
