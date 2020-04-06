import React from 'react';
import styled from 'styled-components';
import Blocker from './Blocker';
import Button from '../Button/Button';

const Wrapper = styled.div`
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  min-width: 400px;
  width: 20vw;
  padding: 50px 80px 50px;
  background-color: #424242;
  position: fixed;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ButtonWrapper = styled.div`
  align-self: center;
  justify-self: center;
`;

const Info = styled.div`
  margin-bottom: 40px;
  font-size: 1.5rem;
`;

const ConfirmModal = ({ deleteItemFn, closeModalFn }) => (
  <>
    <Blocker onClick={closeModalFn} />
    <Wrapper>
      <Info>Czy na pewno chcesz usunąć ten element?</Info>
      <Grid>
        <ButtonWrapper>
          <Button danger onClick={deleteItemFn}>
            delete
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button onClick={closeModalFn}>close</Button>
        </ButtonWrapper>
      </Grid>
    </Wrapper>
  </>
);

export default ConfirmModal;
