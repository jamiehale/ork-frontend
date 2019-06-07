import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(255,255,255,0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Window = styled.div`
  background: white;
  border: 2px solid black;
  border-radius: 4px;
  padding: 8px;
`;

const DialogTitle = styled.h1`
  margin: 0px 0px 4px 0px;
  padding: 0px 0px 4px 0px;
  border-bottom: 1px solid black;
`;

const Dialog = ({
  children,
  title,
}) => {

  return (
    <Screen>
      <Window>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </Window>
    </Screen>
  )
};

export default Dialog;
