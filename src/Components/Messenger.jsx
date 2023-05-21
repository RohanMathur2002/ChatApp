import React from 'react';
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialogue from "./Account/LoginDialogue";

const Header = styled(AppBar)`
  height: 220px;
  background-color: #59cfcd;
`;

const Messenger = () => {
  return (
    <Box>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialogue />
    </Box>
  );
};

export default Messenger;
