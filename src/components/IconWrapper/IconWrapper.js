import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  color: white;
  height: 70px;
  filter: brightness(0) invert(1);
`;

const IconWrapper = ({ children, icon }) => (
  <Image src={icon} alt="{children}" />
);

export default IconWrapper;
