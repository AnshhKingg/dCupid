import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import { DrawerStack, AuthStack } from './Routes';


const Navigator = () => {
  const state = useSelector(state => state.auth.key)
  return (
    <NavigationContainer>
      {state ? <DrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigator;
