import React from 'react';
import {View} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

const renderThirdLayer = percent => {
  if (percent > 50) {
    return (
      <View style={[Theme.secondProgressLayer, propStyle(percent - 50, 45)]} />
    );
  } else {
    return <View style={Theme.offsetLayer} />;
  }
};

const CircularProgress = ({percent}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={Theme.container}>
      <View style={[Theme.firstProgressLayer, firstProgressLayerStyle]} />
      {renderThirdLayer(percent)}
      <Icon style={Theme.absolutePos} name="photo" size={40} color="black" />
    </View>
  );
};

export default CircularProgress;
