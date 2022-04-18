import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RegisterData} from '../../../data';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  LinearGradient,
  DropDownButton,
} from '../../Components';

const EduModal = ({state, onPress, onPressCancel, array}) => {
  const arr = [];
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[
          Theme.flex1,
          Theme.alignContentCenter,
          Theme.blackFaded,
          Theme.padding10,
          Theme.paddingHorizonal30p,
        ]}
        onPress={onPressCancel}>
        <ScrollView
          contentContainerStyle={[Theme.flexGrow, Theme.backgroundWhite]}>
          <TouchableWithoutFeedback>
            <View style={[Theme.flex1, Theme.width100p, Theme.backgroundWhite]}>
              <View style={[Theme.width100p, Theme.row]}>
                <LinearGradient style={[Theme.width100p]}>
                  <Text
                    style={[
                      Theme.textTitle,
                      Theme.textBold,
                      Theme.white,
                      Theme.padding10,
                    ]}>
                    Profession
                  </Text>
                </LinearGradient>
              </View>
              <View style={[Theme.width100p, Theme.padding10]}>
                {Object.keys(RegisterData.profession).map((data, index) => {
                  return (
                    <View>
                      <Text
                        style={[
                          Theme.textBody,
                          Theme.purple,
                          Theme.paddingBottom10,
                        ]}>
                        {data}
                      </Text>
                      {RegisterData.profession[data].map(profession => {
                        return (
                          <View
                            style={[
                              Theme.width100p,
                              Theme.row,
                              Theme.alignCenter,
                              Theme.paddingBottom10,
                            ]}>
                            <TouchableOpacity
                              style={[
                                Theme.width100p,
                                Theme.row,
                                Theme.alignCenter,
                                Theme.paddingHorizonal10p,
                                Theme.borderBox,
                              ]}>
                              <Text
                                style={[Theme.textCaption, Theme.padding10]}>
                                {profession}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

const Education = ({navigation}) => {
  const [edu, setEdu] = useState(false);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <EduModal state={edu} onPressCancel={() => setEdu(!edu)} />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <PickerInput
                title="Highest Education"
                items={RegisterData.higestEducation}
              />
              <PickerInput
                title="Education field"
                items={RegisterData.educationField}
              />
              <DropDownButton title="Profession" onPress={() => setEdu(!edu)} />
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
