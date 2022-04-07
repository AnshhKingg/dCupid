import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { LinearGradient, SemiCircularBar } from '../../Components';
import { colors } from '../../Assets/Colors';
import { Menu, MenuItem } from 'react-native-material-menu';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ onPress }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selected = Math.ceil(contentOffset.x / viewSize.width);
    setSelectedIndex(selected);
  };
  return (
    <View style={[Theme.width100p, Theme.borderRadius10]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setIndex}>
        <View style={[Theme.row]}>
          <View
            style={[
              Theme.imageMatchingProfileWidth,
              Theme.alignCenter,
              Theme.backgroundBlue,
            ]}
          />
        </View>
        <View style={Theme.CircledivDown}>
          {[1].map((data, i) => {
            return (
              <View
                key={i}
                style={[
                  Theme.circle,
                  i === selectedIndex ? Theme.opacityFull : Theme.opacityHalf,
                ]}
              />
            );
          })}
        </View>
        <LinearGradient
          style={[
            Theme.imageMatchingVerticalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white, Theme.textCenter]}>
            40% Trust Score
          </Text>
        </LinearGradient>
        <LinearGradient
          style={[
            Theme.imageMatchingHorizontalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
        </LinearGradient>
      </ScrollView>
      <LinearGradient
        style={[Theme.width100p, Theme.padding10, Theme.alignContentCenter]}>
        <Text style={[Theme.textTitle, Theme.white]}>Vikaram 26</Text>
        <Text style={[Theme.textTitle, Theme.white]}>
          Psorisis Never married Athesit
        </Text>
        <View style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
          <View
            style={[
              Theme.width50p,
              Theme.paddingHorizonal10p,
              Theme.alignCenter,
            ]}>
            <TouchableOpacity
              style={[
                Theme.width100p,
                Theme.buttonLook,
                Theme.alignContentCenter,
                Theme.textBold,
                Theme.backgroundWhite,
              ]}>
              <Icon name={'heart'} size={30} color={colors.purpledark} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              Theme.width50p,
              Theme.paddingHorizonal10p,
              Theme.alignCenter,
            ]}>
            <TouchableOpacity
              style={[
                Theme.width100p,
                Theme.buttonLook,
                Theme.alignContentCenter,
                Theme.textBold,
                Theme.backgroundWhite,
              ]}
              onPress={onPress}>
              <IconMat
                name={'message-processing'}
                size={30}
                color={colors.purpledark}
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const OtherUsersProfile = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

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
              <IconAnt name='arrowleft' size={30} color="white" onPress={() => navigation.goBack()} />
              <Text
                style={[
                  Theme.textHeader,
                  Theme.white,
                  Theme.paddingHorizonal10p,
                ]}>
                Matching Profile
              </Text>
            </View>
            <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
              <Menu
                visible={visible}
                anchor={<IconMaterial name='do-not-disturb' onPress={showMenu} size={30} color="white" />}
                onRequestClose={hideMenu}
              >
                <MenuItem style={[Theme.textBold, Theme.textBody]} onPress={hideMenu}>Block</MenuItem>
                <MenuItem style={[Theme.textBold, Theme.textBody]} onPress={hideMenu}>Report</MenuItem>
              </Menu>
            </View>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={[Theme.width100p]}>
            <View style={[Theme.width100p, Theme.padding10, Theme.alignCenter]}>
              <Profile onPress={() => navigation.navigate('chat')} />
              <View style={[Theme.paddingVertical20p]}>
                <SemiCircularBar
                  progressWidth={20}
                  percentage={70}
                  interiorCircleColor="#f2f2f2"
                  progressColor="purple"
                  progressShadowColor="grey">
                  <Text style={[Theme.textHeader]}>40%</Text>
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
                  About me
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
                <Text style={[Theme.textCaption, Theme.paddingBottom10]} />

                <Text style={[Theme.textTitle]}>State</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]} />

                <Text style={[Theme.textTitle]}>Country</Text>
                <Text style={[Theme.textCaption, Theme.paddingBottom10]} />
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
                  Blogger Coumputer/IT
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
                  Blogger Coumputer/IT
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
              onPress={() => { }}>
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
