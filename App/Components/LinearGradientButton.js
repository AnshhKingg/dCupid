import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import PropTypes from 'prop-types';
import LinearGradient from './LinearGradient';

const LinearGradientButton = ({
  title,
  onPress,
  noGradient,
  color,
  flat,
  disabled,
  border,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[Theme.width100p, Theme.alignContentCenter]}
      onPress={onPress}>
      {noGradient ? (
        <View
          style={[
            Theme.width100p,
            flat ? Theme.flatButton : Theme.buttonLook,
            Theme.alignContentCenter,
            Theme.textBold,
            {backgroundColor: color},
          ]}>
          <View style={[Theme.width100p, Theme.alignContentCenter]}>
            <Text style={[Theme.textBody, Theme.textBlack]}>{title}</Text>
          </View>
        </View>
      ) : (
        <LinearGradient
          style={[
            Theme.width100p,
            flat ? Theme.flatButton : Theme.buttonLook,
            Theme.alignContentCenter,
            Theme.textBold,
            border ? Theme.borderButton : null,
          ]}>
          <View style={[Theme.width100p, Theme.alignContentCenter]}>
            <Text style={[Theme.textBody, Theme.white]}>{title}</Text>
          </View>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

LinearGradientButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LinearGradientButton;
