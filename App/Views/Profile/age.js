import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  DropDownButton,
  MultiSelect,
} from '../../Components';
import {RegisterData} from '../../../data';

const Age = ({navigation}) => {
  const [skinCondition, SetSkinCondition] = useState(false);
  const [maritalStatus, setMartitalStatus] = useState(false);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Age"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <MultiSelect
          state={skinCondition}
          array={RegisterData.skin}
          onPressCancel={() => SetSkinCondition(!skinCondition)}
        />
        <MultiSelect
          state={maritalStatus}
          array={RegisterData.marital}
          onPressCancel={() => setMartitalStatus(!maritalStatus)}
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
              <DropDownButton
                title="Skin Condition"
                onPress={() => SetSkinCondition(!skinCondition)}
              />
              <DropDownButton
                title="Maritial Status"
                onPress={() => setMartitalStatus(!maritalStatus)}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Continue"
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

export default Age;
