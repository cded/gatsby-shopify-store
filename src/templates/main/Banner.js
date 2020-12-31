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
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

const Banner = () => {
  return (
    <StyledBox fontFamily="heading" fontSize={['20px', '26px', '32px']}>
      <Text>Discover our holiday hot deals up to 40% discount</Text>
    </StyledBox>
  );
};

export default Banner;
