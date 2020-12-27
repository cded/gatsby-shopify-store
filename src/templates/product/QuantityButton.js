import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, Text } from 'rebass';

const Label = styled(Text)`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: right;
`;

const Control = styled(Box)`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
  min-width: auto;
`;

const FlexDiv = styled(Box)`
  display: flex;
  justify-content: flex-start;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  line-height: 1.5;
  &:hover,
  &:active,
  &:focus {
    border-color: #2476f2;
  }
`;

const StyledMiddleButton = styled(StyledButton)`
  border-left: none;
  border-right: none;
  &:hover,
  &:active,
  &:focus {
    border-left: none;
    border-right: none;
    border-color: #dbdbdb;
  }
`;

const QuantityButton = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((q) => q + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((q) => (q <= 1 ? 1 : q - 1));
  };
  return (
    <div className="field">
      <Label htmlFor="quantity">Quantity</Label>
      <Control id="quantity">
        <FlexDiv>
          <Control>
            <StyledButton
              onClick={decreaseQuantity}
              sx={{ borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
            >
              -
            </StyledButton>
          </Control>
          <Control>
            <StyledMiddleButton sx={{ borderRadius: 0 }}>
              {quantity}
            </StyledMiddleButton>
          </Control>
          <Control>
            <StyledButton
              onClick={increaseQuantity}
              sx={{ borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
            >
              +
            </StyledButton>
          </Control>
        </FlexDiv>
      </Control>
    </div>
  );
};

export default QuantityButton;
