import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerStack, AuthStack} from './Routes';

const Navigator = () => {
  const autherized = false;
  return (
    <NavigationContainer>
      {autherized ? <DrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigator;
