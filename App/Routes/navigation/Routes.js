import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOption} from './constants/options';
import {
  HelpContainer,
  FaqContainer,
  RegisterContainer,
  RegisterContainer2,
  HomepageContainer,
  DashboardContainer,
  OtpContainer,
  Otp2Container,
  ProfileContainer,
  AgeContainer,
  ReligionContainer,
  LocationContainer,
  AboutMeContainer,
  NameContainer,
  CountryContainer,
  EducationContainer,
  DrinkContainer,
  PhotosContainer,
  MatchingProfileContainer,
  ChatContainer,
  MessagesContainer,
  MembershipContainer,
  TrustScoreContainer,
  SettingsContainer,
} from '../../Views';
import {DrawerView} from '../../Components';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'register'} screenOptions={screenOption}>
      <Stack.Screen name={'register'} component={RegisterContainer} />
      <Stack.Screen name={'register2'} component={RegisterContainer2} />
      <Stack.Screen name={'dashboard'} component={DashboardContainer} />
      <Stack.Screen name={'profile'} component={ProfileContainer} />
      <Stack.Screen name={'age'} component={AgeContainer} />
      <Stack.Screen name={'location'} component={LocationContainer} />
      <Stack.Screen name={'religion'} component={ReligionContainer} />
      <Stack.Screen name={'aboutme'} component={AboutMeContainer} />
      <Stack.Screen name={'name'} component={NameContainer} />
      <Stack.Screen name={'country'} component={CountryContainer} />
      <Stack.Screen name={'education'} component={EducationContainer} />
      <Stack.Screen name={'drink'} component={DrinkContainer} />
      <Stack.Screen name={'help'} component={HelpContainer} />
      <Stack.Screen name={'faq'} component={FaqContainer} />
      <Stack.Screen name={'photo'} component={PhotosContainer} />
      <Stack.Screen
        name={'matchingprofile'}
        component={MatchingProfileContainer}
      />
      <Stack.Screen name={'chat'} component={ChatContainer} />
      <Stack.Screen name={'message'} component={MessagesContainer} />
      <Stack.Screen name={'trustscore'} component={TrustScoreContainer} />
      <Stack.Screen name={'membership'} component={MembershipContainer} />
      <Stack.Screen name={'settings'} component={SettingsContainer} />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'homepage'} screenOptions={screenOption}>
      <Stack.Screen name={'homepage'} component={HomepageContainer} />
      <Stack.Screen name={'otp'} component={OtpContainer} />
      <Stack.Screen name={'otp2'} component={Otp2Container} />
      <Stack.Screen name={'DashB'} component={DrawerStack} />
    </Stack.Navigator>
  );
};

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
        },
      }}
      drawerContent={props => <DrawerView {...props} />}>
      <Drawer.Screen name="Draw" component={MainStack} />
    </Drawer.Navigator>
  );
};
