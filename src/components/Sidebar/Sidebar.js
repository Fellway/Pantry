import React from 'react';
import styled from 'styled-components';
import SidebarNav from './SidebarNav';

const StyledHeader = styled.header`
  background-color: #212121;
  width: 75px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const Sidebar = () => (
  <StyledHeader>
    <SidebarNav />
  </StyledHeader>
);

export default Sidebar;
