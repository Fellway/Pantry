import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Blocker = ({...props}) => (
  <Wrapper {...props}/>
);

export default Blocker;
