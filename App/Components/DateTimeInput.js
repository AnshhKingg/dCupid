import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomDateTimeInput = ({title, error}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={Theme.inputContainer}>
      <TouchableOpacity
        style={[
          Theme.textInput,
          Theme.paddingHorizonal20p,
          Theme.alignCenter,
          Theme.justifyCenter,
        ]}
        onPress={() => setShow(!show)}>
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

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'date'}
          is24Hour={true}
        />
      )}
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomDateTimeInput;
