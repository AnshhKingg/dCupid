import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomDateTimeInput = ({title, error, onPress}) => {
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
          <Text style={[Theme.textBody, Theme.grey]}>Select</Text>
          <Icon
            name={'caretdown'}
            size={10}
            color="grey"
            onPress={() => {
              console.log('yoo');
            }}
          />
        </View>
      </TouchableOpacity>
      {title ? <Text style={Theme.textInputLabelStyle}> {title} </Text> : null}
    </View>
  );
};

export default CustomDateTimeInput;
