import React from 'react';
import { Box, Text } from 'rebass';
import { useIntl } from 'gatsby-plugin-intl';
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
  const intl = useIntl();
  return (
    <StyledBox fontFamily="heading" fontSize={['16px', '22px', '28px']}>
      <Text>{intl.formatMessage({ id: 'home.banner' })}</Text>
    </StyledBox>
  );
};

export default Banner;
