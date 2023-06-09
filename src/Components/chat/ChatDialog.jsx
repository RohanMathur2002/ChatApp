import { Dialog, Box, styled } from '@mui/material';
import React from 'react';
import Menu from './menu/menu';
import EmptyChat from './chat/EmptyChat';

const dialogstyle = {
  marginTop: '96%',
  height: '95%',
  width: '60%',
  margin: '20px',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden'
};

const Component = styled(Box)`
display: flex;`;

const LeftComponent = styled(Box)`
min-width: 450px;`;

const RightComponent = styled(Box)`
width: 73%;
min-width: 300px;
height: 100%;
border-left: 1px solid rgba(0,0,0,0.14);
background: #5accc8;`;

const ChatDialog = () => {
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
      maxWidth= {'md'}>

      <Component>

        <LeftComponent>
          <Menu />

        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>

      </Component>
    </Dialog>);
};

export default ChatDialog;
