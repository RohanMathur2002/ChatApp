import React, { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialogue from "./Account/LoginDialogue";
import ChatDialog from './chat/ChatDialog';

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #59cfcd;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Box>
      {account ? (
        <ChatDialog />
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialogue />
        </>
      )}
    </Box>
  );
};

export default Messenger;
