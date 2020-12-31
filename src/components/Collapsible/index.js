import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Box, Text } from 'rebass';

const Header = styled(Box)`
  cursor: pointer;
  border-bottom: 2px solid #f2f2f2;
  padding: 15px;
  color: #000;
  // background-color: ${(props) => (props.isOpen ? '#f4f7fa' : '#fff')};
  color: ${(props) => (props.isOpen ? '#2476f2' : '#000')};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled(Text)`
  // border-left: solid 1px #f2f2f2;
  // border-right: solid 1px #f2f2f2;
  border-bottom: solid 1px #f2f2f2;
  border-radius: 0 0 5px 5px;
  padding: 15px;
  font-size: 16px;
`;

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <Header
        onClick={togglePanel}
        fontSize={['16px', '20px']}
        fontFamily="description"
        isOpen={isOpen}
      >
        {title}
      </Header>
      {isOpen ? (
        <Content fontSize={['14px', '16px']} fontFamily="description">
          {children}
        </Content>
      ) : null}
    </div>
  );
};

export default Collapsible;
