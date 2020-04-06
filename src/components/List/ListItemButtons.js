import React from 'react';
import styled from 'styled-components';
import { EditAlt } from '@styled-icons/boxicons-solid/EditAlt';
import { Close } from '@styled-icons/evaicons-solid/Close';
import AppContext from '../../context';

const StyledEditAlt = styled(EditAlt)`
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    color: #0288d1;
  }
`;

const StyledClose = styled(Close)`
  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    color: #0288d1;
  }
`;

const Delete = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 1rem;
`;

const Edit = styled.div`
  line-height: 20px;
  font-size: 1rem;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  height: 20px;
`;

const ListItemButtons = ({id}) => (
  <AppContext.Consumer>
    {(context) => (
      <>
        <Delete onClick={() => context.openModalConfirm(id)}>
          <StyledClose />
        </Delete>
        <Edit>
          <StyledEditAlt />
        </Edit>
      </>
    )}
  </AppContext.Consumer>
);

export default ListItemButtons;
