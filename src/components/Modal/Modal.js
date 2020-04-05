import React from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';
import Title from '../Title/Title';

const Blocker = styled.div`
z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Wrapper = styled.div`
z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20vw;
  padding: 50px 80px 50px;
  background-color: #424242;
  box-shadow: 0 20px 40px -10px rgba(#818181, 0.5);
  position: fixed;
`;

const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  line-height: 25px;
  right: 20px;
  top: 20px;
  position: fixed;
  background-color: #303f9f;
  border: none;
  color: white;
  cursor: pointer;
`;

const Modal = ({ closeModalFn }) => (
  <div>
      
    <Blocker onClick={closeModalFn} />
    <Wrapper>
      <CloseButton onClick={closeModalFn}>⨉</CloseButton>
      <Title>Add new Product</Title>
      <Form/>
    </Wrapper>
  </div>
);

export default Modal;
