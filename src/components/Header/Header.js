import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.h3`
  color: #0288d1;
  margin: 0;
  font-size: 1rem;
  letter-spacing: 3px;
`;

const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Header;

Header.propTypes = {
  children: propTypes.node.isRequired,
};
