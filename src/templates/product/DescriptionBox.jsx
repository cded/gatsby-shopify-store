import React from 'react';
import { Text } from 'rebass';

const DescriptionBox = (props) => {
  return (
    <Text
      dangerouslySetInnerHTML={{ __html: props.source }}
      fontFamily="description"
      color="#7b7b7b"
    />
  );
};

export default DescriptionBox;
