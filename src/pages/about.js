import React from 'react';
import { Box, Text, Heading } from 'rebass';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Separation = styled(Box)`
  width: 60%;
  border: 1px solid #e0e0e0;
`;

export default (props) => {
  return (
    <Layout>
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
                At H&B LEDCO, we pride ourselves on creating high quality
                furniture that will last generations. Our pieces are more than
                just furniture; they are works of art that inspire
                conversations, enhance any space, and bring European modern
                style to your every day.
              </Text>
              <Text mt="20px">
                H&B LEDCO Is an online retailer of Modern and contemporary
                Furniture. We strive to provide Canadians with functional
                aesthetically pleasing designs inspired by simple, beautiful
                shapes and modern forms. All of our designs contain LED LIGHT,
                clean edges, smooth simple shapes mixing of style and
                practicality.
              </Text>
              <Text mt="20px">
                All of our Furnitures and designs are inspired by elements of
                Nordic and European minimalism. We believe less is more.
                Function should never sacrifice style.
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
