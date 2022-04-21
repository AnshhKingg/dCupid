import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { TextInput, LinearButton, LinearGradient } from '../../Components';
import CountryPicker from 'react-native-country-picker-modal';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/actions/auth';

const Otp = ({ navigation }) => {
  const dis = useDispatch();
  const [country, setcountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  // const state = useSelector(state => state)
  // console.log(state);

  const loginFun = data => {
    dis(login(data));
  };

  return (
    <>
      <LinearGradient>
        <SafeAreaView style={[Theme.height100p]}>
          <ScrollView contentContainerStyle={Theme.flexGrow}>
            <View style={[Theme.flex1, Theme.totalView]}>
              <Text style={[Theme.textHeader, Theme.purple]}>
                Enter Mobile Number
              </Text>
              <View style={[Theme.justifySpcArnd, Theme.paddingVertical30p]}>
                <Text
                  style={[Theme.textHeader, Theme.grey, Theme.textFontWeight0]}
                />
                <Text style={[Theme.textBody]} />
              </View>

              <View style={[Theme.width100p, Theme.row, Theme.flexStart]}>
                <View
                  style={[
                    Theme.width30p,
                    Theme.borderBox,
                    Theme.marginVertical10,
                  ]}>
                  <View style={[Theme.textInput, Theme.alignContentCenter]}>
                    <CountryPicker
                      placeholder={<Text style={Theme.textCaption}>ISD</Text>}
                      withCallingCodeButton
                      countryCode={country}
                      withCloseButton
                      containerButtonStyle={Theme.paddingHorizonal5p}
                      withAlphaFilter
                      withFilter
                      withEmoji
                      withFlag
                      withCallingCode
                      onSelect={text => setcountry(text.cca2)}
                    />
                  </View>
                </View>
                <View style={[Theme.width70p]}>
                  <TextInput
                    placeholder={'Mobile number'}
                    multiline={false}
                    keyboardType="numeric"
                    maxLength={10}
                    value={mobile}
                    onChangeText={text =>
                      setMobile(text.replace(/[^0-9]/g, ''))
                    }
                    error={error}
                  />
                </View>
              </View>
              <View
                style={[
                  Theme.width60p,
                  Theme.selfAlignCenter,
                  Theme.marginVertical10,
                ]}>
                <LinearButton
                  title="Submit"
                  onPress={() => {
                    if (country === '') {
                      setError('Please select country code.');
                    } else if (mobile.length < 10) {
                      setError('Please enter a 10 digit mobile number.');
                    } else {
                      setError('');
                      // navigation.navigate('otp2')
                      loginFun(mobile);
                    }
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Otp;
