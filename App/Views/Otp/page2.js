import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {LinearButton, LinearGradient} from '../../Components';

const Otp2 = ({navigation}) => {
  return (
    <>
      <LinearGradient>
        <SafeAreaView style={[Theme.height100p]}>
          <ScrollView contentContainerStyle={Theme.flexGrow}>
            <View style={[Theme.flex1, Theme.totalView]}>
              <Text style={[Theme.textXl, Theme.textUnderLine, Theme.purple]}>
                Mobile Number
              </Text>

              <Text
                style={[
                  Theme.textHeader,
                  Theme.grey,
                  Theme.textFontWeight0,
                  Theme.paddingVertical20p,
                ]}>
                Verify mobile number
              </Text>
              <Text style={[Theme.textBody, Theme.paddingVertical10p]}>
                Enter the six digit code sent to your mobile number.
              </Text>

              <View style={[Theme.OtpContainer]}>
                <OTPInputView
                  style={[Theme.width100p]}
                  pinCount={6}
                  // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                  // onCodeChanged = {code => { this.setState({code})}}
                  codeInputFieldStyle={[Theme.underlineStyleBase]}
                  onCodeFilled={code => {
                    console.log(`Code is ${code}, you are good to go!`);
                  }}
                />
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.alignContentCenter,
                  Theme.paddingVertical10p,
                ]}>
                <View style={[Theme.width60p, Theme.alignContentCenter]}>
                  <LinearButton
                    title="Submit"
                    onPress={() => navigation.replace('DashB')}
                  />
                </View>

                <Text
                  style={[
                    Theme.textBody,
                    Theme.textUnderLine,
                    Theme.blue,
                    Theme.paddingVertical10p,
                  ]}>
                  Resend
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('otp')}>
                  <Text
                    style={[
                      Theme.textBody,
                      Theme.textUnderLine,
                      Theme.blue,
                      Theme.paddingVertical10p,
                    ]}>
                    Change Mobile Number
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Otp2;
