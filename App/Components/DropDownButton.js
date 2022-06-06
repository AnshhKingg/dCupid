import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/Entypo';

const CustomDateTimeInput = ({title, error, onPress, text}) => {
  return (
    <View style={Theme.inputContainer}>
      <TouchableOpacity
        style={[
          Theme.textInput,
          Theme.paddingHorizonal20p,
          Theme.alignCenter,
          Theme.justifyCenter,
        ]}
        onPress={onPress}>
        <View
          style={[
            Theme.width100p,
            Theme.alignCenter,
            Theme.justifySpcBtw,
            Theme.row,
          ]}>
          <Text
            numberOfLines={1}
            style={[
              Theme.textCaption,
              text && text.length > 0 ? Theme.black : Theme.grey,
            ]}>
            {text && text.length > 0 ? text : 'Select'}
          </Text>
          <Icon
            name={'chevron-small-down'}
            size={27}
            color="grey"
            onPress={() => {
              console.log('yoo');
            }}
          />
        </View>
      </TouchableOpacity>
      {title ? <Text style={Theme.textInputLabelStyle}> {title} </Text> : null}
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomDateTimeInput;
