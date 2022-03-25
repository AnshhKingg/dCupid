import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import {
  TextInput,
  LinearButton,
  LinearGradient,
} from '../../Components';
import CountryPicker from 'react-native-country-picker-modal'


const Otp = ({ navigation }) => {
  const [country, setcountry] = useState('IN')
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

              <View style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
                <View style={[Theme.width30p, Theme.borderBox]}>
                  <View style={[Theme.textInput, Theme.alignContentCenter]}>
                    <CountryPicker
                      // {...{
                      //   countryCode,
                      //   withFilter,
                      //   withFlag,
                      //   withCountryNameButton,
                      //   withAlphaFilter,
                      //   withCallingCode,
                      //   withEmoji,
                      //   onSelect,
                      // }}
                      withCallingCodeButton
                      countryCode={country}
                      withAlphaFilter
                      withFilter
                      withEmoji
                      withFlag
                      withCallingCode
                      onSelect={(text) => setcountry(text.cca2)}
                      containerButtonStyle={{ opacity: 1 }}
                    />

                  </View>
                </View>
                <View style={[Theme.width70p]}>
                  <TextInput
                    multiline={false}
                    keyboardType="numeric"
                    maxLength={20}
                  />
                </View>
              </View>
              <View style={[Theme.width60p, Theme.selfAlignCenter]}>
                <LinearButton
                  title="Submit"
                  onPress={() => navigation.navigate('otp2')}
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
