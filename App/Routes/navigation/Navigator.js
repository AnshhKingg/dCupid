import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerStack} from './Routes';

const Navigator = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};
export default Navigator;
