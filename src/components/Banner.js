import React from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from '@emotion/styled';

const StyledBanner = styled(Box)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 35px;
  background: red;
`;

const Banner = () => {
  return <StyledBanner>Banner</StyledBanner>;
};

export default Banner;
