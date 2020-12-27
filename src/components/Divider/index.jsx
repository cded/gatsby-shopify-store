import React from 'react';
import { Box } from 'rebass';

const Divider = (props) => (
  <Box
    {...props}
    as="hr"
    sx={{
      borderTop: '1px solid',
      height: '1px',
      borderLeft: 'none',
      borderTopColor: '#f5f5f5',
    }}
  />
);

export default Divider;
