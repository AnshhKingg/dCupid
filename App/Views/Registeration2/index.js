import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput} from '../../Components';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Assets/Colors';

const Register = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header title="Registeration" left="arrowleft" />
        <ScrollView style={[]}>
          <View style={[Theme.width100p, Theme.paddingHorizonal20p]}>
            <Text
              style={[
                Theme.textBody,
                Theme.paddingVertical10p,
                Theme.marginTop10,
              ]}>
              LET'S BUILD YOUR PROFILE
            </Text>
          </View>
          <View style={Theme.width100p}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <View
                style={[
                  Theme.row,
                  Theme.paddingVertical20p,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width40p,
                    Theme.height3p,
                    Theme.backgroundPurple,
                  ]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundPurple,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={[Theme.padding2, Theme.white]}>1</Text>
                </View>
                <View
                  style={[
                    Theme.width6p,
                    Theme.backgroundPurple,
                    Theme.height3p,
                  ]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundPurple,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={[Theme.padding2, Theme.white]}>2</Text>
                </View>
                <View
                  style={[
                    Theme.width40p,
                    Theme.backgroundPurple,
                    Theme.height3p,
                  ]}
                />
              </View>

              <PickerInput title="Country" />
              <PickerInput title="State/Province" />
              <PickerInput title="City" />
              <PickerInput title="Highest Education" />
              <PickerInput title="Educational Field" />
              <PickerInput title="Profession" />
              <PickerInput title="Drink" />
              <PickerInput title="Smoke" />
              <PickerInput title="Maritial Status" />
              <PickerInput title="Religion" />

              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <View style={Theme.width80p}>
                  <LinearGradient
                    style={[Theme.alignContentCenter, Theme.buttonLook]}
                    colors={[colors.purplelight, colors.purpledark]}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('help');
                      }}>
                      <Text style={[Theme.textBody, Theme.white]}>
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Register;
