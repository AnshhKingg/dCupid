import React from 'react';
import { Image, View } from 'react-native';
import { Theme } from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
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

const CircularProgress = ({ percent }) => {
  const profile = useSelector(state => state.profile.user)
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
      {
        profile.photos.length === 0 ?
          <Icon style={Theme.absolutePos} name="photo" size={50} color="black" /> :
          <Image style={{ width: 70, height: 70, borderRadius: 35 }} source={{ uri: profile.photos[0].photo }} />
      }

    </View>
  );
};

export default CircularProgress;
