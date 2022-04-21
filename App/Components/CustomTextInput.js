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
  multiline,
}) => {
  const [state, setstate] = useState(false);
  return (
    <View style={Theme.inputContainer}>
      <TextInput
        style={[
          Theme.textInput,
          Theme.paddingHorizonal20p,
          Theme.textCaption,
          state ? Theme.borderBlue : Theme.borderLightGrey,
          multiline ? Theme.heightAuto : null,
          editable === false ? Theme.backgroundGray : Theme.backgroundWhite,
        ]}
        onChangeText={val => onChangeText(val)}
        value={value}
        multiline={multiline}
        numberOfLines={numberoflines}
        placeholder={placeholder}
        editable={editable}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onFocus={() => setstate(!state)}
        onBlur={() => setstate(!state)}
      />
      {title ? <Text style={Theme.textInputLabelStyle}> {title} </Text> : null}

      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomTextInput;
