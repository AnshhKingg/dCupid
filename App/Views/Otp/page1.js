import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { TextInput, LinearButton, LinearGradient } from '../../Components';
import CountryPicker from 'react-native-country-picker-modal';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/actions/auth'

const Otp = ({ navigation }) => {
  const dis = useDispatch()
  const [country, setcountry] = useState('IN');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const state = useSelector(state => state)
  console.log(state);

  const loginFun = (mobile) => {
    dis(login(mobile))
  }

  return (
    <>
      <LinearGradient>
        <SafeAreaView style={[Theme.height100p]}>
          <ScrollView contentContainerStyle={Theme.flexGrow}>
            <View style={[Theme.flex1, Theme.totalView]}>
              <Text style={[Theme.textXl, Theme.textUnderLine, Theme.purple]}>
                Mobile Number
              </Text>
              <View style={[Theme.justifySpcArnd, Theme.paddingVertical30p]}>
                <Text
                  style={[Theme.textHeader, Theme.grey, Theme.textFontWeight0]}>
                  Verify mobile number
                </Text>
                <Text style={[Theme.textBody]}>
                  Enter the six digit code sent to your mobile number.
                </Text>
              </View>

              <View
                style={[Theme.width100p, Theme.row, Theme.flexStart]}>
                <View style={[Theme.width30p, Theme.borderBox, Theme.marginVertical10]}>
                  <View style={[Theme.textInput, Theme.alignContentCenter]}>
                    <CountryPicker
                      withCallingCodeButton
                      countryCode={country}
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
                    multiline={false}
                    keyboardType="numeric"
                    maxLength={10}
                    value={mobile}
                    onChangeText={(text) => setMobile(text.replace(/[^0-9]/g, ''))}
                    error={error}
                  />
                </View>
              </View>
              <View style={[Theme.width60p, Theme.selfAlignCenter]}>
                <LinearButton
                  title="Submit"
                  onPress={() => {
                    if (mobile.length < 10) {
                      setError('Please enter a 10 digit mobile number.')
                    } else {
                      setError('')
                      loginFun(mobile)
                    }
                    //  navigation.navigate('otp2')
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
