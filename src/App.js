import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './Components/Messenger';


const clientId = '532239797666-qssjsoei4buottlrk7uh9ae9rgcp1575.apps.googleusercontent.com'
function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <Messenger />

    </GoogleOAuthProvider>
  );
}

export default App;
