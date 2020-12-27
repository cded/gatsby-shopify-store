import React from 'react';
import { Box, Text } from 'rebass';
import styled from '@emotion/styled';

const Label = styled(Text)`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: right;
`;

const List = styled.ul`
  display: inline-block;
  clear: both;
  overflow: visible;
  padding: 1px;
  margin-bottom: 0;
  margin-left: 0;
  &:before {
    content: ' ';
    display: table;
  }
`;

const ListItem = styled.li`
  position: relative;
  display: inline-block;
  float: left;
  width: auto;
  height: auto;
  margin: 0 0.25rem 0.5rem 0;
  list-style-type: none;
`;

const ItemBg = styled(Box)`
  background-color: ${(props) => props.color || 'white'};
  float: left;
  border: 3px solid #dbdbdb;
  border-color: ${(props) => (props.selected ? '#db9200' : '#dbdbdb')};
  border-radius: 50%;
  background-position: 50%;
  background-size: auto;
  cursor: pointer;
`;

const Circle = styled(Box)`
  display: block;
  width: 0;
  height: 0;
  border: 16px solid transparent;
  border-top-color: transparent !important;
  border-left-color: transparent !important;
  text-indent: -99999px;
`;

const ProductColorSelector = ({ option, handleColorChange, selectedColor }) => {
  return (
    <fieldset>
      <Label aria-live="polite" aria-atomic="true">
        Color:{' '}
        <Text sx={{ textTransform: 'capitalize', display: 'inline' }}>
          {selectedColor}
        </Text>
      </Label>

      <List>
        {option.values.map((value, index) => (
          <ListItem key={`option-${option.name}-${index}`} value={value}>
            <ItemBg
              color={value}
              onClick={() => handleColorChange(value)}
              selected={value === selectedColor}
            >
              <Circle>{value}</Circle>
            </ItemBg>
          </ListItem>
        ))}
      </List>
    </fieldset>
  );
};

export default ProductColorSelector;
