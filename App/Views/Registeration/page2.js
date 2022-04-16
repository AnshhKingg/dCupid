import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  DropDownButton,
  LinearGradient,
} from '../../Components';
import {RegisterData} from '../../../data';

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
        <ScrollView contentContainerStyle={[Theme.flexGrow]}>
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

const Register2 = ({navigation}) => {
  const [edu, setEdu] = useState(false);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Registeration"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <EduModal state={edu} onPressCancel={() => setEdu(!edu)} />
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
              <PickerInput
                title="Highest Education"
                items={RegisterData.higestEducation}
              />
              <PickerInput
                title="Educational Field"
                items={RegisterData.educationField}
              />
              <DropDownButton title="Profession" onPress={() => setEdu(!edu)} />
              <PickerInput title="Drink" items={RegisterData.drink} />
              <PickerInput title="Smoke" items={RegisterData.smoke} />
              <PickerInput
                title="Maritial Status"
                items={RegisterData.marital}
              />
              <PickerInput title="Religion" items={RegisterData.religion} />

              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <View style={Theme.width60p}>
                  <LinearButton
                    title="Continue"
                    onPress={() => {
                      navigation.navigate('dashboard');
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

export default Register2;
