import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  width: 100px;
  height: 35px;
  background-color: ${(props) => (props.danger ? 'red' : '#303f9f')};
  border: none;
  color: white;
  letter-spacing: 2px;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ children, ...props }) => (
  <Wrapper type="submit" {...props}>
    {children}
  </Wrapper>
);

export default Button;
