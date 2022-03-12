import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStack} from './Routes';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default Navigator;
