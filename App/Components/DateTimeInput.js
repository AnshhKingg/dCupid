import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Entypo';
import moment from 'moment-timezone';

const CustomDateTimeInput = ({title, error, dobChange, onChangeDate}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const currDate = new Date();
  const minDate = currDate.setFullYear(currDate.getFullYear() - 18);
  const maxDate = currDate.setFullYear(currDate.getFullYear() - 70 + 18);
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
          <Text
            style={[
              Theme.textCaption,
              !dobChange ? Theme.grey : Theme.textBlack,
            ]}>
            {dobChange ? `${moment(date).format('DD/MM/YYYY')}` : 'Select'}
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

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          onChange={(e, value) => {
            setShow(!show);
            setDate(value);
            onChangeDate(moment(value).format('DD/MM/YYYY'));
          }}
          onTouchCancel={() => {
            setShow(!show);
          }}
          display={'spinner'}
          is24Hour={true}
          minimumDate={maxDate}
          maximumDate={minDate}
        />
      )}
      {error ? <Text style={Theme.red}>{error}</Text> : null}
    </View>
  );
};

export default CustomDateTimeInput;
