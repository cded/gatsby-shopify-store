import React from 'react';
import { Box, Text, Heading } from 'rebass';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="High quality design. Modern European style. Affordable. Based in Montreal."
      />
      <Box
        p={['0', '50px']}
        pt={['50px', '50px']}
        sx={{ minHeight: ['70vh', 0], maxWidth: '1300px', margin: 'auto' }}
      >
        <Heading
          m="auto"
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            maxWidth: '80%',
            fontSize: ['18px', '24px'],
          }}
        >
          Why buy from H&B LEDCO?
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto" width={[1, 3 / 4]}>
            <Box mt={4} mb={4}>
              <Heading
                sx={{
                  textAlign: 'left',
                  textTransform: 'uppercase',
                }}
                mb={3}
                fontSize={['20px', '24px']}
              >
                CHIC, MODERN AND INNOVATIVE
              </Heading>
              <Text>
                HB LEDCO is an online platform specialized in the sale of
                stylish and affordable LED furniture.
              </Text>
              <Text mt="20px">
                At HB LEDCO, we are passionate about home decor and lighting. We
                have been thinking for a long time about how we could combine
                both to create a cutting edge and modern atmosphere in our
                homes. That’s when we had the idea to integrate RGB LED lights
                directly in furniture. We spent a few months on the drawing
                boards, visualizing and sketching multiple designs. We are now
                finally able to proudly present our catalog.
              </Text>
              <Text mt="20px">
                Furniture for every room of your home. A coffee table and a tv
                stand for the living room, a sideboard for the hall and
                nightstands for the bedroom. You will be able to make your Home
                Bright! Our pieces are more than just furniture; they are works
                of art that inspire conversations, enhance any space, and bring
                European modern style to your every day.
              </Text>
              <Text mt="20px">
                Not only are our furniture amazing, but they are also
                affordable! Because we operate online only with no physical
                store to maintain and because we have great partnerships with
                local delivery companies, we are able to keep the price down
                without compromising on quality, and we ship your orders
                straight to your door.
              </Text>
              <Text mt="20px">
                Order online! Our platform is fast, reliable and we partner with
                the best in the industry to offer you the most secure payments.
                See you soon!
              </Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                Identical to the original
              </Heading>
              <Text>
                All of our Furnitures and designs are inspired by elements of
                Nordic and European minimalism. We believe less is more.
                Function should never sacrifice style.
              </Text>
              <Text mt="20px">
                We are dedicated to designing quality products specializing
                specifically in luxurious and contemporary European houses, we
                offer you modern replicas that are accessible to everyone. With
                advanced technological capability, our experienced artisans are
                proficient in matching the originals for quality construction
                and utmost durability.
              </Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                Safety Materials
              </Heading>
              <Text>
                All of our products heed to the highest North American standard.
                We follow a strict protocol to ensure that the quality of our
                products is maintained. The materials we offer are exclusive
                solely to H&amp;B LEDCO. We have a perceptive sourcing team who
                hand selects premium materials from all over the globe!
              </Text>
            </Box>

            <Box mt={4} mb={4}>
              <Heading
                sx={{ textAlign: 'left', textTransform: 'uppercase' }}
                mt={[2, 3]}
                mb={3}
                fontSize={['20px', '24px']}
              >
                Affordable Pricing
              </Heading>
              <Text>
                Since last years, we have built a strong partnership with our
                factories. By going directly to the source, we are able to
                control the quality, which also allows us to offer MINIMALIST
                and modern pieces at an affordable price point. In addition, an
                added bonus - shipping is free for orders over $300 in Canada!
                Our products are affordable because of our streamlined nature;
                we ship straight to you anywhere in Canada and the United
                States!
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
