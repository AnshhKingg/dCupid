import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Theme} from '../Assets/Styles';

const CustomTextInput = ({
  title,
  value,
  onChangeText,
  numberoflines,
  editable,
  maxLength,
  keyboardType,
  error,
  placeholder,
}) => {
  const [state, setstate] = useState(false);
  return (
    <View style={Theme.inputContainer}>
      <TextInput
        style={[
          Theme.textInput,
          {
            borderColor: state ? 'blue' : 'lightgrey',
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        multiline={true}
        numberOfLines={numberoflines}
        placeholder={placeholder}
        editable={editable}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onFocus={() => setstate(!state)}
        onBlur={() => setstate(!state)}
      />
      <Text style={Theme.textInputLabelStyle}> {title} </Text>
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomTextInput;