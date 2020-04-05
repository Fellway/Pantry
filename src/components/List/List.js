import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.div`
  width: 250px;
  margin-left: 50px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
`;

const List = ({ items }) => (
  <Wrapper>
    {items.map((item) => (
      <ListItem key={item.name} {...item} />
    ))}
    
  </Wrapper>
);

export default List;
