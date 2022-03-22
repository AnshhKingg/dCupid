import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Assets/Colors';
import {TextInput, PickerInput} from '../../Components';

const Otp = ({navigation}) => {
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
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width20p]}>
                  <PickerInput />
                </View>
                <View style={[Theme.width80p]}>
                  <TextInput />
                </View>
              </View>
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
                    style={[Theme.width100p, Theme.alignContentCenter]}
                    onPress={() => navigation.navigate('otp2')}>
                    <Text style={[Theme.textBody, Theme.white]}>Submit</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Otp;
