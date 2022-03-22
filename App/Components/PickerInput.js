import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import {Picker} from '@react-native-picker/picker';

const CustomPickerInput = ({title, error}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={[Theme.textInput, Theme.inputContainer]}>
      <Picker
        selectedValue={selectedLanguage}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Select" value="" style={Theme.textBody} />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      {title ? <Text style={Theme.textInputLabelStyle}> {title} </Text> : null}

      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomPickerInput;
