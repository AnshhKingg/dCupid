import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import {Picker} from '@react-native-picker/picker';

const CustomPickerInput = ({title, error}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={[Theme.textInput, Theme.inputContainer]}>
      {/* <TouchableOpacity style={[
                Theme.textInput, Theme.padding5, Theme.alignCenter, Theme.justifyCenter
            ]} onPress={() => setShow(!show)}>
                <View style={[Theme.width100p, Theme.alignCenter, Theme.justifySpcBtw, Theme.row]}>
                    <Text style={[Theme.textBody, Theme.textBlack]}>
                        Select
                    </Text>
                    <Icon
                        name={'chevron-down'}
                        size={20}
                        color="black"
                        onPress={() => {
                            console.log('yoo');
                        }}
                    />
                </View>

            </TouchableOpacity>
            <Text style={Theme.textInputLabelStyle}> {title} </Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                />
            )} */}
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
      <Text style={Theme.textInputLabelStyle}> {title} </Text>
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomPickerInput;
