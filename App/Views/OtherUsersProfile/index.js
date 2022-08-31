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
import {trustscore} from '../../service/utils';

const OtherUsersProfile = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  const {data} = route.params;
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
            <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
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
                  onPress={hideMenu}>
                  Block
                </MenuItem>
                <MenuItem
                  style={[Theme.textBold, Theme.textBody]}
                  onPress={hideMenu}>
                  Report
                </MenuItem>
              </Menu>
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={[Theme.width100p]}>
            <View style={[Theme.width100p, Theme.padding10, Theme.alignCenter]}>
              <ProfileComp
                data={data}
                onPress={() => navigation.navigate('chat')}
                disableButton={true}
              />
              <View style={[Theme.paddingVertical20p]}>
                <SemiCircularBar
                  progressWidth={20}
                  percentage={trustscore(data)}
                  interiorCircleColor="#f2f2f2"
                  progressColor="purple"
                  progressShadowColor="grey">
                  <Text style={[Theme.textHeader]}>{trustscore(data)}%</Text>
                </SemiCircularBar>
              </View>
              <View
                style={[Theme.width100p, Theme.separator, Theme.marginBottom0]}>
                <View style={[Theme.width100p, Theme.row]}>
                  <View
                    style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
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
                    <Text style={[Theme.textBody, Theme.textCenter]}>
                      Mobile Number Verified
                    </Text>
                  </View>

                  <View
                    style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                    {/* <View
                                            style={[
                                                Theme.smallButtonLook,
                                                Theme.alignContentCenter,
                                                Theme.backgroundGray,
                                            ]}>
                                            <Icon name="photo" size={20} color="black" />
                                        </View>
                                        <Text style={[Theme.textBody, Theme.textCenter]}>
                                            Verify mobile 20%
                                        </Text> */}
                  </View>

                  <View
                    style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                    {/* <View
                                            style={[
                                                Theme.smallButtonLook,
                                                Theme.alignContentCenter,
                                                Theme.backgroundGray,
                                            ]}>
                                            <Icon name="user" size={25} color="black" />
                                        </View>
                                        <Text style={[Theme.textBody, Theme.textCenter]}>
                                            Verify Photo ID 20%
                                        </Text> */}
                  </View>
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
                <Text style={[Theme.textCaption, Theme.paddingBottom10]}>
                  {data.aboutme}
                </Text>
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
                  {data.education}
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
              </View>
            </View>
          </View>
        </ScrollView>
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
                  name: data.name,
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
      </SafeAreaView>
    </>
  );
};

export default OtherUsersProfile;
