import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Login from './screens/Login/Login'
import InputLogin from './screens/Login/InputLogin'
import Register from './screens/Login/Register'
import ForgotPassword from './screens/Login/ForgotPassword'
import {Alert} from "react-native";
import React, { useState } from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [mainState, setMainState] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  const [forgotState, setForgotState] = useState(false);

  const handleClose = () => {
    setLoginState(false);
    setRegisterState(false);
    setForgotState(false);
  }

  const handleLogin = () => {
    handleClose();
    setMainState(false);
    setLoginState(true);
  }

  const handleRegister = () => {
    handleClose();
    setMainState(false);
    setRegisterState(true);
  }

  const handleForgot = () => {
    handleClose();
    setForgotState(true);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {(!loginState && mainState) && <Login login={() => handleLogin()} register={() => handleRegister()}/> }
        {loginState && <InputLogin register={() => handleRegister()} forgot={() => handleForgot()}/>}
        {registerState && <Register back={() => handleLogin()}/>}
        {forgotState && <ForgotPassword back={() => handleLogin()}/>}
          {/*<Navigation colorScheme={colorScheme} />*/}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
