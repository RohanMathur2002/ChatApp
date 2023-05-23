import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './Components/Messenger';
import AccountProvider from './context/AccountProvider';

const clientId = '532239797666-qssjsoei4buottlrk7uh9ae9rgcp1575.apps.googleusercontent.com'
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider>
        <Messenger />
      </AccountProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
