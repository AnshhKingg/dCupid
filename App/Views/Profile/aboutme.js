import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton, TextInput} from '../../Components';

const AboutMe = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="About me"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ScrollView style={[Theme.flexGrow, Theme.selectedItems]}>
          <View style={[Theme.flex1, Theme.width100p]}>
            <View style={[Theme.flex1, Theme.padding10]}>
              <TextInput multiline={true} numberoflines={5} title="About me" />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Save"
                    onPress={() => {
                      navigation.navigate('dashboard');
                    }}
                  />
                </View>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    noGradient={true}
                    title="Cancel"
                    onPress={() => {
                      navigation.goBack();
                    }}
                    color="lightgrey"
                  />
                </View>
              </View>
              <Text
                style={[
                  Theme.textBody,
                  Theme.paddingHorizonal10p,
                  Theme.purple,
                ]}>
                Keep it clean. Do not mention your contact details , social
                media profile , web links here.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutMe;
