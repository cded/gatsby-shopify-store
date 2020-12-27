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
        sx={{ minHeight: ['70vh', 0] }}
      >
        <Heading
          m="auto"
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          Frequently Asked Questions
        </Heading>
        <Separation mx="auto" mt="20px" mb="20px" />
        <Box pl="10%" pr="10%">
          <Box m="0 auto" width={[1, 3 / 4]}>
            <Text>Questions?</Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
