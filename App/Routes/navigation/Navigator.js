import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import {navigationRef} from './RootNavigation';
import {DrawerStack, AuthStack} from './Routes';

const Navigator = () => {
  const state = useSelector(data => data.auth.token);
  return (
    <NavigationContainer ref={navigationRef}>
      {state ? <DrawerStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigator;
