import React, {useCallback, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  LinearGradient,
  DropDownButton,
} from '../../Components';

const EduModal = ({state, onPress, onPressCancel, array}) => {
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
                {Object.keys(array).map((data, index) => {
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
                      {array[data].map(profession => {
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
                              ]}
                              onPress={() => onPress(profession)}>
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
  const dis = useDispatch();
  const profile = useSelector(state => state.profile.user);
  const selecterData = useSelector(state => state.masterData.data);
  const [professionModal, setProfessionModal] = useState(false);
  const [profession, setProfession] = useState(profile.profession);
  const [professionError, setProfessionError] = useState(null);

  const [highEduOpen, setHighEduOpen] = useState(false);
  const [highEdu, setHighEdu] = useState(profile.highestEdu);
  const [highEduItems, setHighEduItems] = useState(
    selecterData.highestEducation,
  );
  const [highEduError, setHighEduError] = useState(null);

  const [eduOpen, setEduOpen] = useState(false);
  const [edu, setEdu] = useState(profile.education);
  const [eduItems, setEduItems] = useState(selecterData.education);
  const [eduError, setEduError] = useState(null);

  const highEduOpens = useCallback(() => {
    setEduOpen(false);
  }, []);

  const eduOpens = useCallback(() => {
    setHighEduOpen(false);
  }, []);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <EduModal
          array={selecterData.profession}
          state={professionModal}
          onPressCancel={() => setProfessionModal(!professionModal)}
          onPress={data => {
            setProfession(data);
            setProfessionModal(false);
            setProfessionError(false);
          }}
        />

        <View style={[Theme.width100p]}>
          <View style={[Theme.selectedItems, Theme.padding10]}>
            <PickerInput
              title="Highest Education"
              items={highEduItems}
              zIndex={15}
              zIndexTitle={16}
              value={highEdu}
              setValue={data => {
                setHighEdu(data());
                setHighEduError(null);
              }}
              setItems={setHighEduItems}
              open={highEduOpen}
              setOpen={setHighEduOpen}
              onOpen={highEduOpens}
              error={highEduError}
            />
            <PickerInput
              title="Educational Field"
              items={eduItems}
              value={edu}
              setValue={data => {
                setEdu(data());
                setEduError(null);
              }}
              setItems={setEduItems}
              open={eduOpen}
              setOpen={setEduOpen}
              onOpen={eduOpens}
              zIndex={13}
              zIndexTitle={14}
              error={eduError}
            />

            <DropDownButton
              title="Profession"
              text={profession}
              onPress={() => setProfessionModal(!professionModal)}
              error={professionError}
            />
            <View
              style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
              <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                <LinearButton
                  title="Save"
                  onPress={() => {
                    dis(
                      updateProfile({
                        profession: profession,
                        highestEdu: highEdu,
                        education: edu,
                      }),
                    );
                    navigation.goBack();
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
      </SafeAreaView>
    </>
  );
};

export default Education;
