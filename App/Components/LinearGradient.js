import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Assets/Colors';

const LinearGradientWrapper = ({children, style}) => {
  return (
    <LinearGradient
      style={style}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={[colors.purplelight, colors.purpledark]}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientWrapper;
