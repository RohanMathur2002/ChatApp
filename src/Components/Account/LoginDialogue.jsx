import React from 'react';
import { Dialog, Box, Typography } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';

const dialogstyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  overflow: 'hidden'
};

const LoginDialogue = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }}>
      <Box>
        <Box>
          <Typography>To Use Our Chat</Typography>
        </Box>
        <Box>
          <GoogleLogin />
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialogue;
