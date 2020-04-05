import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  z-index: 0;
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: #0288d1;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Content = styled.span`
  color: black;
  font-weight: 700;
  position: absolute;
  line-height: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const FloatButton = ({openModalFn}) => (
  <Button onClick={openModalFn}>
    <Content>⨉</Content>
  </Button>
);

export default FloatButton;
