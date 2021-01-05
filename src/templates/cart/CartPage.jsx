import React from 'react';
import { Flex, Box, Button, Heading, Text } from 'rebass';
import styled from '@emotion/styled';

import strings from './strings.json';
import Divider from '../../components/Divider';
import useShopifyFunctions from '../../hooks/useShopifyFunctions';
import LineItem from './LineItem';

const { cartSubtotalLabel, cartHeader } = strings;

const CheckoutButton = styled(Button)`
  background: #2476f2;
  color: #fff;
  &:hover {
    background: rgb(36, 118, 242, 0.8);
    color: #fff;
  }
`;

const ShoppingButton = styled(Button)`
  background: #fff;
  color: #000;
  border-color: #dddddf;
  &:hover {
    background: rgb(255, 255, 255, 0.8);
    color: #000;
    border-color: #000;
  }
`;

function CartPage() {
  const { checkout, updateItem, removeItem } = useShopifyFunctions();
  const { subtotalPrice, webUrl } = checkout;

  // const displaySubtotalPrice = formatPrice(
  //   Number(subtotalPrice),
  //   locales,
  //   currency
  // );

  const displaySubtotalPrice = `CA $${subtotalPrice}`;

  async function decreaseProductAmount({ id, quantity }) {
    if (quantity === 1) return;
    try {
      await updateItem({ id, quantity: quantity - 1 });
    } catch (error) {
      console.error(error);
    }
  }

  async function increaseProductAmount({ id, quantity }) {
    try {
      await updateItem({ id, quantity: quantity + 1 });
    } catch (error) {
      console.error(error);
    }
  }

  const buttonEnabled = checkout.loaded && checkout.lineItems.length > 0;

  const trackFacebookAds = () => {
    if (checkout?.lineItems) {
      const checkoutItems = checkout.lineItems.map((lineItem) => ({
        id: lineItem.id,
        title: lineItem.title,
        quantity: lineItem.quantity,
      }));
      if (typeof window !== 'undefined') {
        if (window.fbq != null) {
          window.fbq('track', 'InitiateCheckout', { contents: checkoutItems });
        }
      }
    }
  };

  return (
    <Box sx={{ maxWidth: '1300px', margin: 'auto' }}>
      <Flex mt={[4, 4]} mb={[0, 0]} pl={[2, 0]}>
        <Box p={[1, 3]} sx={{ display: 'flex' }}>
          <Heading fontSize={[3, 4]} sx={{ textTransform: 'uppercase' }} mb={0}>
            {cartHeader} ({checkout?.lineItems.length})
          </Heading>
          {/* {showSpinner && (
            <Box>
              <Spinner />
            </Box>
          )} */}
        </Box>
      </Flex>
      <Box sx={{ display: ['block', 'flex'] }}>
        <Flex
          m={2}
          sx={{
            position: 'relative',
            flex: '0 0 66.6666666667%',
          }}
        >
          <Box width={1}>
            <Flex>
              <Box mt={2} width={1}>
                {checkout.loaded &&
                  checkout.lineItems.map((lineItem) => (
                    <React.Fragment>
                      <LineItem
                        key={lineItem.id}
                        lineItem={lineItem}
                        decreaseProductAmount={decreaseProductAmount}
                        increaseProductAmount={increaseProductAmount}
                        removeItem={removeItem}
                        mb={[4, 0]}
                      />
                      <Divider bg="grey" my={1} display={['block', 'none']} />
                    </React.Fragment>
                  ))}
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box
          m={2}
          sx={{
            position: 'relative',
            flex: '0 0 33.333333337%',
          }}
        >
          <Box
            sx={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'grey',
            }}
            p={[2, 1]}
          >
            <Box p={[1, 3]}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                fontSize={1}
              >
                <Text>{cartSubtotalLabel}</Text>
                <Text>{displaySubtotalPrice}</Text>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                fontSize={1}
              >
                <Text>Shipping</Text>
                <Text>Calculated at next step</Text>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                fontSize={1}
              >
                <Text>Tax</Text>
                <Text>Calculated at next step</Text>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                mt={4}
                fontSize={[2, 4]}
              >
                <Heading fontWeight="500">TOTAL COST</Heading>
                <Text>{displaySubtotalPrice}</Text>
              </Box>
            </Box>
          </Box>

          <Box>
            <CheckoutButton
              as={'a'}
              href={buttonEnabled && webUrl}
              onClick={trackFacebookAds}
              variant="primary"
              px={5}
              py={3}
              style={{
                opacity: buttonEnabled ? 1 : 0.7,
              }}
              sx={{ textTransform: 'uppercase', width: '100%' }}
              mt={4}
            >
              Proceed to checkout
            </CheckoutButton>

            <ShoppingButton
              as={'a'}
              href={'/products/all'}
              variant="primary"
              px={5}
              py={3}
              style={{
                opacity: buttonEnabled ? 1 : 0.7,
              }}
              sx={{ textTransform: 'uppercase', width: '100%' }}
              mt={2}
            >
              Continue Shopping
            </ShoppingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CartPage;
