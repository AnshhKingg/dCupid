import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Assets/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp2 = ({navigation}) => {
  return (
    <>
      <LinearGradient colors={[colors.purplelight, colors.purpledark]}>
        <SafeAreaView style={[Theme.height100p]}>
          <View style={[Theme.flex1, Theme.totalView]}>
            <Text style={[Theme.textXl, Theme.textUnderLine, Theme.purple]}>
              Mobile Number
            </Text>
            <View
              style={[
                Theme.flex1,
                Theme.justifySpcArnd,
                Theme.paddingVertical30p,
              ]}>
              <Text
                style={[Theme.textHeader, Theme.grey, Theme.textFontWeight0]}>
                Verify mobile number
              </Text>
              <Text style={[Theme.textBody]}>
                Enter the six digit code sent to your mobile number.
              </Text>
            </View>

            <View style={[Theme.flex1]}>
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
            <View style={[Theme.flex4, Theme.alignCenter]}>
              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <LinearGradient
                  style={[
                    Theme.width60p,
                    Theme.buttonLook,
                    Theme.alignContentCenter,
                  ]}
                  colors={[colors.purplelight, colors.purpledark]}>
                  <TouchableOpacity
                    style={[Theme.width100p, Theme.alignContentCenter]}>
                    <Text style={[Theme.textBody, Theme.white]}>Submit</Text>
                  </TouchableOpacity>
                </LinearGradient>
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
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Otp2;
