import React from 'react';
import styled from 'styled-components';
import { Fridge } from '@styled-icons/boxicons-regular/';
import { Gear } from '@styled-icons/octicons/Gear';
import { Category } from '@styled-icons/material-outlined/Category';
import { NavLink } from 'react-router-dom';
import { Cart } from '@styled-icons/boxicons-regular/Cart';

const Wrapper = styled.ul`
  display: grid;
  grid-template-rows: 75px 75px 75px;
  padding: 0;
`;

const NavItem = styled.li`
  text-align: center;
  list-style: none;
  cursor: pointer;
`;

const StyledFridge = styled(Fridge)`
  height: 40px;
  transition-duration: 0.3s;
  :hover {
    color: #0288d1;
  }
`;

const StyledGear = styled(Gear)`
  height: 40px;
  transition-duration: 0.3s;
  :hover {
    color: #0288d1;
  }
`;

const StyledCategory = styled(Category)`
  height: 40px;
  transition-duration: 0.3s;
  :hover {
    color: #0288d1;
  }
`;

const StyledCart = styled(Cart)`
  height: 40px;
  transition-duration: 0.3s;
  :hover {
    color: #0288d1;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const SidebarNav = () => (
  <nav>
    <Wrapper>
      <NavItem>
        <StyledNavLink exact to="/">
          <StyledFridge />
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink exact to="/categories">
          <StyledCategory />
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink exact to="/cart">
          <StyledCart />
        </StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink exact to="/settings">
          <StyledGear />
        </StyledNavLink>
      </NavItem>
    </Wrapper>
  </nav>
);

export default SidebarNav;
