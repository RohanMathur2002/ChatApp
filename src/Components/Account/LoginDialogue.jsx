import React from 'react';
import { Dialog, Box, Typography } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"

const dialogstyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  overflow: 'hidden'
};

const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
}
const onLoginError = (res) => {
    console.log('Login Failed!' ,res);
}

const LoginDialogue = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }}>
      <Box>
        <Box>
          <Typography>To Use Our Chat</Typography>
        </Box>
        <Box>
          <GoogleLogin
          onSuccess= {onLoginSuccess}
          onError={onLoginError} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginDialogue;
