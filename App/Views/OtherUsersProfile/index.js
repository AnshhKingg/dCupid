import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {LinearGradient, ProfileComp, SemiCircularBar} from '../../Components';
import {colors} from '../../Assets/Colors';
import {Menu, MenuItem} from 'react-native-material-menu';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {imageFilter, namePrivacy, trustscore} from '../../service/utils';

const OtherUsersProfile = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  const {data, change} = route?.params;
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <LinearGradient>
          <View
            style={[
              Theme.width100p,
              Theme.padding10,
              Theme.row,
              Theme.justifySpcBtw,
            ]}>
            <View style={[Theme.width60p, Theme.row, Theme.alignCenter]}>
              <IconAnt
                name="arrowleft"
                size={30}
                color="white"
                onPress={() => navigation.goBack()}
              />
              <Text
                style={[
                  Theme.textTitle,
                  Theme.white,
                  Theme.paddingHorizonal10p,
                ]}>
                User Profile
              </Text>
            </View>
            {change ? null : (
              <View
                style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
                <Menu
                  visible={visible}
                  anchor={
                    <IconMaterial
                      name="do-not-disturb"
                      onPress={showMenu}
                      size={30}
                      color="white"
                    />
                  }
                  onRequestClose={hideMenu}>
                  <MenuItem
                    style={[Theme.textBold, Theme.textBody]}
                    textStyle={[Theme.textBlack]}
                    onPress={hideMenu}>
                    Block
                  </MenuItem>
                  <MenuItem
                    style={[Theme.textBold, Theme.textBody]}
                    textStyle={[Theme.textBlack]}
                    onPress={hideMenu}>
                    Report
                  </MenuItem>
                </Menu>
              </View>
            )}
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={[Theme.width100p]}>
            <View style={[Theme.width100p, Theme.padding10, Theme.alignCenter]}>
              <ProfileComp data={data} disableButton={true} />
              <View style={[Theme.paddingVertical20p]}>
                <SemiCircularBar
                  progressWidth={15}
                  percentage={trustscore(data)}
                  interiorCircleColor="#f2f2f2"
                  progressColor="purple"
                  progressShadowColor="grey">
                  <Text style={[Theme.textHeader, Theme.purple]}>
                    {trustscore(data)}%
                  </Text>
                  <Text style={[Theme.textHeader, Theme.purple]}>
                    Trust Score
                  </Text>
                </SemiCircularBar>
              </View>
              <View
                style={[Theme.width100p, Theme.separator, Theme.marginBottom0]}>
                <View style={[Theme.width100p, Theme.row]}>
                  <View
                    style={[
                      Theme.width25p,
                      Theme.padding10,
                      Theme.alignCenter,
                    ]}>
                    <View
                      style={[
                        Theme.smallButtonLook,
                        Theme.alignContentCenter,
                        Theme.backgroundGray,
                      ]}>
                      <Icon name="mobile" size={30} color="black" />
                      <View
                        style={[
                          Theme.notificationLook,
                          Theme.alignContentCenter,
                          Theme.backgroundBlue,
                        ]}>
                        <Icon name="check" size={15} color="white" />
                      </View>
                    </View>
                    <Text
                      adjustsFontSizeToFit
                      style={[Theme.textBody, Theme.textCenter]}>
                      Mobile Number Verified
                    </Text>
                  </View>

                  {data.emailVerified ? (
                    <View
                      style={[
                        Theme.width25p,
                        Theme.padding10,
                        Theme.alignCenter,
                      ]}>
                      <View
                        style={[
                          Theme.smallButtonLook,
                          Theme.alignContentCenter,
                          Theme.backgroundGray,
                        ]}>
                        <Entypo name="mail" size={25} color="black" />
                        <View
                          style={[
                            Theme.notificationLook,
                            Theme.alignContentCenter,
                            Theme.backgroundBlue,
                          ]}>
                          <Icon name="check" size={15} color="white" />
                        </View>
                      </View>
                      <Text
                        adjustsFontSizeToFit
                        style={[Theme.textBody, Theme.textCenter]}>
                        Email Verified
                      </Text>
                    </View>
                  ) : null}

                  {imageFilter(data.photos).length > 0 ? (
                    <View
                      style={[
                        Theme.width25p,
                        Theme.padding10,
                        Theme.alignCenter,
                      ]}>
                      <View
                        style={[
                          Theme.smallButtonLook,
                          Theme.alignContentCenter,
                          Theme.backgroundGray,
                        ]}>
                        <Icon name="photo" size={25} color="black" />
                        <View
                          style={[
                            Theme.notificationLook,
                            Theme.alignContentCenter,
                            Theme.backgroundBlue,
                          ]}>
                          <Icon name="check" size={15} color="white" />
                        </View>
                      </View>
                      <Text
                        adjustsFontSizeToFit
                        style={[Theme.textBody, Theme.textCenter]}>
                        Photo Verified
                      </Text>
                    </View>
                  ) : null}

                  {data.photoIDApproved === 1 ? (
                    <View
                      style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                      <View
                        style={[
                          Theme.smallButtonLook,
                          Theme.alignContentCenter,
                          Theme.backgroundGray,
                        ]}>
                        <Icon name="user" size={25} color="black" />
                        <View
                          style={[
                            Theme.notificationLook,
                            Theme.alignContentCenter,
                            Theme.backgroundBlue,
                          ]}>
                          <Icon name="check" size={15} color="white" />
                        </View>
                      </View>
                      <Text
                        adjustsFontSizeToFit
                        style={[Theme.textBody, Theme.textCenter]}>
                        Photo ID Verified
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>About me</Text>
                {data.aboutmeVerified === true ? (
                  <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                    {data.aboutme}
                  </Text>
                ) : null}
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>City</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.city}
                </Text>

                <Text style={[Theme.textTitle]}>State</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.state}
                </Text>

                <Text style={[Theme.textTitle]}>Country</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.country}
                </Text>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>Education</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.highestEdu} - {data.education}
                </Text>
              </View>

              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>Professsion</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.profession}
                </Text>
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>Interest</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.interest
                    ? data.interest.toString().replace(/,/g, ' , ')
                    : ''}
                </Text>
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.separator,
                  Theme.marginBottom0,
                  Theme.padding10,
                ]}>
                <Text style={[Theme.textTitle]}>Drink</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.drink}
                </Text>
                <Text style={[Theme.textTitle]}>Smoke</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.smoke}
                </Text>
                {data?.diet !== '' ? (
                  <View>
                    <Text style={[Theme.textTitle]}>Diet</Text>
                    <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                      {data.diet}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </ScrollView>
        {change ? null : (
          <LinearGradient style={[Theme.width100p]}>
            <View
              style={[
                Theme.width50p,
                Theme.paddingHorizonal10p,
                Theme.alignCenter,
                Theme.selfAlignCenter,
              ]}>
              <TouchableOpacity
                style={[
                  Theme.width100p,
                  Theme.buttonLook,
                  Theme.alignContentCenter,
                  Theme.textBold,
                  Theme.backgroundWhite,
                ]}
                onPress={() =>
                  navigation.navigate('chat', {
                    receiverId: data._id,
                    name: namePrivacy(data),
                    data: data,
                  })
                }>
                <IconMat
                  name={'message-processing'}
                  size={30}
                  color={colors.purpledark}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        )}
      </SafeAreaView>
    </>
  );
};

export default OtherUsersProfile;
