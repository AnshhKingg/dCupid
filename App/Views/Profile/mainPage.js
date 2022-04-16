import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import {
  Header,
  LinearButton,
  LinearGradient,
  SemiCircularBar,
} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../Assets/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { RegisterData } from '../../../data';

const Tiles = ({ text }) => {
  return (
    <View style={[Theme.alignContentCenter, Theme.row]}>
      <Icon name="user" size={20} color={colors.purpledark} />
      <Text
        style={[
          Theme.textCaption,
          Theme.textBlack,
          Theme.paddingHorizonal10p,
          Theme.paddingVertical5p,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const InterestModal = ({ state, onPress, onPressCancel, array }) => {
  const arr = [];
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[
          Theme.flex1,
          Theme.alignContentCenter,
          Theme.blackFaded,
          Theme.padding10,
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
                    Interest
                  </Text>
                </LinearGradient>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.alignCenter,
                  Theme.flexWrap,
                  Theme.padding10,
                ]}>
                {/* <TouchableOpacity style={[Theme.modalButton, Theme.row, { borderWidth: 1, borderColor: 'red' },
                Theme.alignContentCenter, Theme.backgroundGray, Theme.paddingHorizonal10p]}>
                  <Text style={[Theme.textCaption, Theme.paddingHorizonal10p]}>aadadasdasd</Text>
                </TouchableOpacity> */}

                {RegisterData.interests.map(data => {
                  return (
                    <TouchableOpacity style={Theme.paddingHorizonal5p}>
                      <LinearGradient
                        style={[
                          { borderWidth: 1, borderColor: 'red' },
                          Theme.modalButton,
                          Theme.alignContentCenter,
                          Theme.width100p,
                        ]}>
                        <View
                          style={[Theme.width100p, Theme.alignContentCenter]}>
                          <Text
                            style={[
                              Theme.textBody,
                              Theme.white,
                              Theme.paddingHorizonal10p,
                            ]}>
                            {data}
                          </Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <View style={[Theme.width100p, Theme.row, Theme.backgroundWhite]}>
          <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
            <LinearButton
              title="Cancel"
              noGradient={true}
              color="lightgrey"
              onPress={onPressCancel}
            />
          </View>
          <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
            <LinearButton title="Save" onPress={onPress} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const Profile = ({ navigation, route }) => {
  const [toggle, setToggle] = useState(false);
  const [interestModal, setInterestModal] = useState(false);
  const bottom = useRef(null)

  useEffect(() => {
    if (route.params.change) {
      setToggle(true)
      bottom.current.scrollToEnd({ animated: true });
    }
  }, [])


  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          right="home"
          title="Profile"
          leftnav={() => navigation.openDrawer()}
        />
        <InterestModal
          state={interestModal}
          onPressCancel={() => setInterestModal(!interestModal)}
        />
        <ScrollView ref={bottom}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.width100p, Theme.alignContentCenter]}>
              <TouchableOpacity
                style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}
                onPress={() => {
                  navigation.navigate('photo');
                }}>
                <LinearGradient
                  style={[
                    Theme.profileIcon,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="user" size={30} color="white" />
                  <View
                    style={[
                      Theme.profileIconNotification,
                      Theme.alignContentCenter,
                      Theme.backgroundBlue,
                    ]}>
                    <Icon name="camera" size={20} color="white" />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={[Theme.textHeader, Theme.textFontWeight0]}>
                Username
              </Text>
              <Text style={[Theme.textCaption]}>40 yrs</Text>
            </View>
          </View>

          <View
            style={[
              Theme.width100p,
              Theme.paddingHorizonal30p,
              Theme.separator,
            ]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <Tiles text="Psorisis" />
              </View>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <Tiles text="Never married" />
              </View>
            </View>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <Tiles text="Hindu" />
              </View>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <Tiles text="Non it-engineer" />
              </View>
            </View>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <Tiles text="India" />
              </View>
            </View>
          </View>

          <View style={[Theme.width100p]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <SemiCircularBar
                  progressWidth={20}
                  percentage={70}
                  interiorCircleColor="#f2f2f2"
                  progressColor="purple"
                  progressShadowColor="grey">
                  <Text style={[Theme.textHeader]}>40%</Text>
                </SemiCircularBar>
              </View>
            </View>
          </View>

          <View style={[Theme.width100p, Theme.separator, Theme.marginBottom0]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <View
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundGray,
                  ]}>
                  <Icon name="user" size={20} color="black" />
                </View>
                <Text style={[Theme.textCaption, Theme.textCenter]}>
                  Verify Email 20%
                </Text>
              </View>

              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <View
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundGray,
                  ]}>
                  <Icon name="photo" size={20} color="black" />
                </View>
                <Text style={[Theme.textBody, Theme.textCenter]}>
                  Verify mobile 20%
                </Text>
              </View>

              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <View
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundGray,
                  ]}>
                  <Icon name="user" size={25} color="black" />
                </View>
                <Text style={[Theme.textCaption, Theme.textCenter]}>
                  Verify Photo ID 20%
                </Text>
              </View>

              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <View
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundGray,
                  ]}>
                  <Icon name="user" size={25} color="black" />
                </View>
                <Text style={[Theme.textCaption, Theme.textCenter]}>
                  Verify Photo ID 20%
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              Theme.width100p,
              Theme.paddingHorizonal10p,
              Theme.separator,
            ]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width40p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="My Profile"
                  noGradient={toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(false)}
                />
              </View>
              <View style={[Theme.width60p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="Partner Preference"
                  noGradient={!toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(true)}
                />
              </View>
            </View>
          </View>

          {toggle ? (
            <View
              style={[
                Theme.width100p,
                Theme.alignCenter,
                Theme.paddingHorizonal5p,
              ]}>
              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Age</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Skin Condition
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Marital Status
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('age')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Location</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('location')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Religion</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('religion')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={[
                Theme.width100p,
                Theme.alignCenter,
                Theme.paddingHorizonal5p,
              ]}>
              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>About me</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('aboutme')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Name</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Privacy setting for name
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Date of birth
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Skin Condition
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Marital Status
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('name')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Country</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>State</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>City</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('country')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Highest Education</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Education field
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>
                    Profession
                  </Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('education')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Interest</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => setInterestModal(!interestModal)}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.justifySpcBtw,
                  Theme.row,
                  Theme.padding5,
                  Theme.separator,
                  Theme.paddingVertical20p,
                ]}>
                <View style={[Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Drink</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>

                  <Text style={[Theme.textBody, Theme.marginTop10]}>Smoke</Text>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.grey,
                      Theme.paddingVertical5p,
                    ]}>
                    abcd
                  </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('drink')}>
                  <Icon name="pencil" size={25} color="orange" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
