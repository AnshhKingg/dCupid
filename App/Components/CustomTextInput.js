import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Theme} from '../Assets/Styles';

const CustomTextInput = ({
  title,
  value,
  onChangeText,
  placeholder,
  numberoflines,
  editable,
  maxLength,
  keyboardType,
  errorflag,
  error,
}) => {
  const [state, setstate] = useState(false);
  return (
    <View style={Theme.inputContainer}>
      <TextInput
        style={[
          Theme.textInput,
          {
            borderColor: state ? 'blue' : 'black',
            backgroundColor: editable === false ? 'lightgray' : 'white',
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        multiline={true}
        numberOfLines={numberoflines}
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
