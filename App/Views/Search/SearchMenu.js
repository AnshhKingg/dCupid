import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton} from '../../Components';

const SearchMenu = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Search"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width40p]}>
                  <PickerInput title="Age" />
                </View>
                <View style={[Theme.width20p, Theme.alignContentCenter]}>
                  <Text>To</Text>
                </View>
                <View style={[Theme.width40p]}>
                  <PickerInput title="Age" />
                </View>
              </View>
              <PickerInput title="Skin Condition" />
              <PickerInput title="Maritial Status" />
              <PickerInput title="Religion" />
              <PickerInput title="Country" />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View
                  style={[
                    Theme.width50p,
                    Theme.selfAlignCenter,
                    Theme.paddingHorizonal10p,
                  ]}>
                  <LinearButton
                    title="Search"
                    onPress={() => {
                      // navigation.navigate('dashboard');
                    }}
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

export default SearchMenu;
