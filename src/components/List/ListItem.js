import React from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import IconWrapper from '../IconWrapper/IconWrapper';
import Header from '../Header/Header';
import AppContext from '../../context';
import ListItemButtons from './ListItemButtons';

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonRow = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 95px 10px 95px;
  justify-items: center;
  align-items: center;
`;

const Button = styled.div`
  cursor: pointer;
  position: relative;
`;

const Counter = styled.span`
  text-align: center;
  font-size: 1rem;
`;

const CounterDanger = styled.span`
  text-align: center;
  font-size: 1rem;
  color: red;
`;

const MaterialIcon = styled(Icon)`
  top: 0;
  left: 0;
  font-size: 1.3rem !important;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const ListItem = ({ id, category, name, quantity, icon, criticalValue }) => (
  <AppContext.Consumer>
    {(context) => (
      <Wrapper>
        <ListItemButtons id={id} />
        <IconWrapper icon={icon} />
        <Header>{name}</Header>
        <ButtonRow>
          <Button onClick={() => context.decrementQuantity(id)}>
            <MaterialIcon>remove_circle</MaterialIcon>
          </Button>
          {quantity <= criticalValue ? (
            <CounterDanger>{quantity}</CounterDanger>
          ) : (
            <Counter>{quantity}</Counter>
          )}
          <Button onClick={() => context.incrementQuantity(id)}>
            <MaterialIcon>add_circle</MaterialIcon>
          </Button>
        </ButtonRow>
      </Wrapper>
    )}
  </AppContext.Consumer>
);

export default ListItem;
