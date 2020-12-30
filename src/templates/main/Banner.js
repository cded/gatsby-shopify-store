import React from 'react';
import { Box, Text } from 'rebass';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
  background: #7e1d31;
  height: 90px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = () => {
  return (
    <StyledBox fontFamily="heading" fontSize={['20px', '30px', '40px']}>
      <Text>Discover our holiday hot deals up to 40% discount</Text>
    </StyledBox>
  );
};

export default Banner;
