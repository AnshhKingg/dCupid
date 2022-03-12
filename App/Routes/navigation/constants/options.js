import {CardStyleInterpolators} from '@react-navigation/stack';

export const screenOption = {
  headerShown: false,
  gestureEnabled: false,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  // transitionSpec: {
  //     open: config,
  //     close: closeConfig
  // }
};
