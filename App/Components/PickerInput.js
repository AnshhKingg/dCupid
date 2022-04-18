import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import {Picker} from '@react-native-picker/picker';

const CustomPickerInput = ({
  title,
  error,
  items,
  onValueChange,
  enabled,
  selectedValue,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View
      style={[
        Theme.textInput,
        Theme.inputContainer,
        enabled === false ? Theme.backgroundGray : Theme.backgroundWhite,
      ]}>
      <Picker
        selectedValue={selectedLanguage}
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        enabled={enabled}>
        <Picker.Item label={'Select'} value={''} style={Theme.textBody} />
        {items
          ? items.map(data => {
              return (
                <Picker.Item
                  label={data.label}
                  value={data.value}
                  style={Theme.textBody}
                />
              );
            })
          : null}
      </Picker>
      {title ? <Text style={Theme.textInputLabelStyle}> {title} </Text> : null}

      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomPickerInput;
