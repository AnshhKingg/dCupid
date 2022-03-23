import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  TextInput,
  PickerInput,
  LinearButton,
  LinearGradient,
} from '../../Components';

const Otp = ({navigation}) => {
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

              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width20p]}>
                  <PickerInput />
                </View>
                <View style={[Theme.width80p]}>
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
