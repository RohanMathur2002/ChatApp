import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialogue from "./Account/LoginDialogue";
import ChatDialog from './chat/ChatDialog';


const Header = styled(AppBar)`
  height: 220px;
  background-color: #59cfcd;
`;

const Messenger = () => {

    const { account } = useContext(AccountContext);
    return (
        <Box>
            {
                account ? <ChatDialog />
                    : <>
                        <Header>
                            <Toolbar></Toolbar>
                        </Header>
                        <LoginDialogue />
                    </>

            }

        </Box>
    );
};

export default Messenger;
