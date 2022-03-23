import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  DateTimeInput,
  Header,
  TextInput,
  PickerInput,
  LinearButton,
} from '../../Components';

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
                  style={[Theme.width6p, Theme.backgroundGray, Theme.height3p]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundGray,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={Theme.padding2}>2</Text>
                </View>
                <View
                  style={[Theme.width40p, Theme.backgroundGray, Theme.height3p]}
                />
              </View>
              <Text style={Theme.textCaption}>Gender</Text>
              <View
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.borderBox,
                  Theme.marginBottom10,
                ]}>
                <View
                  style={[
                    Theme.width50p,
                    Theme.row,
                    Theme.padding10,
                    Theme.alignContentCenter,
                    Theme.borderRight,
                  ]}>
                  <Icon
                    name={'male'}
                    size={30}
                    color="black"
                    onPress={() => {
                      console.log('yoo');
                    }}
                  />
                  <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                    Male
                  </Text>
                </View>
                <View
                  style={[
                    Theme.width50p,
                    Theme.row,
                    Theme.padding10,
                    Theme.alignContentCenter,
                    Theme.borderLeft,
                  ]}>
                  <Icon
                    name={'female'}
                    size={30}
                    color="black"
                    onPress={() => {
                      console.log('yoo');
                    }}
                  />
                  <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                    Female
                  </Text>
                </View>
              </View>
              <DateTimeInput title="Date of birth" />
              <PickerInput title="Skin condition" />
              <TextInput title="Name*" />
              <PickerInput title="Privacy setting for name" />
              <TextInput title="Email*" />

              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <View style={Theme.width60p}>
                  <LinearButton
                    title="Continue"
                    onPress={() => navigation.navigate('register2')}
                  />
                </View>
                <Text style={[Theme.textCaption]}>
                  By clicking continue , u agree to
                </Text>
                <Text style={[Theme.textCaption]}>
                  <Text style={[Theme.textCaption, Theme.blue]}>
                    Terms and condition
                  </Text>{' '}
                  {'&'}{' '}
                  <Text style={[Theme.textCaption, Theme.blue]}>
                    Privacy policy
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Register;
