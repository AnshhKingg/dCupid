import React from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton} from '../../Components';

const Education = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <PickerInput title="Highest Education" />
              <PickerInput title="Education field" />
              <PickerInput title="Profession" />

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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Education;
