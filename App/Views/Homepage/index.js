import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {LinearGradient} from '../../Components';

const FaceBookQuestionMarkModal = ({state, setState}) => {
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <View style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded]}>
        <View style={[Theme.width90]}>
          <LinearGradient>
            <Text style={[Theme.padding10, Theme.textBody, Theme.white]}>
              Help
            </Text>
          </LinearGradient>
          <View
            style={[
              Theme.paddingVertical30p,
              Theme.paddingHorizonal20p,
              Theme.alignContentCenter,
              Theme.backgroundWhite,
            ]}>
            <Text style={[Theme.textCaption]}>
              We use your facebook information only to build an authenticated
              and verified profile. We will never post anything on your facebook
              profile.{' '}
            </Text>
            <LinearGradient
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.buttonLook,
                Theme.paddingHorizonal20p,
              ]}>
              <TouchableOpacity
                style={[Theme.width100p, Theme.alignContentCenter]}
                onPress={setState}>
                <Text style={[Theme.textBody, Theme.white]}>Ok</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Tiles = ({text}) => {
  return (
    <View
      style={[
        Theme.backgroundWhite,
        Theme.alignContentCenter,
        Theme.marginBottom10,
      ]}>
      <Text
        style={[
          Theme.textBlack,
          Theme.paddingHorizonal30p,
          Theme.paddingVertical10p,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selected = Math.ceil(contentOffset.x / viewSize.width);
    setSelectedIndex(selected);
  };
  return (
    <View style={[Theme.flex1]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setIndex}>
        <View style={[Theme.sliderWidth, Theme.height100p, Theme.row]}>
          <View
            style={[
              Theme.fullWidth,
              Theme.alignCenter,
              Theme.paddingHorizonal30p,
              Theme.paddingVertical30p,
            ]}>
            <Text style={[Theme.textBody, Theme.white, Theme.textCenter]}>
              Dating and matchmaking App for people with skin condition.
            </Text>
          </View>
          <View
            style={[
              Theme.fullWidth,
              Theme.alignCenter,
              Theme.paddingHorizonal30p,
              Theme.paddingVertical30p,
            ]}>
            <Text style={[Theme.textBody, Theme.white, Theme.textCenter]}>
              Discover a partner with similar life experience for better
              understanding , comfort and mutual respect.{' '}
            </Text>
          </View>
          <View
            style={[
              Theme.fullWidth,
              Theme.paddingHorizonal30p,
              Theme.paddingVertical30p,
            ]}>
            <Text style={[Theme.textBody, Theme.white, Theme.textCenter]}>
              Skin condition wise matching profile.
            </Text>
            <View style={[Theme.width100p]}>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
              </View>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
              </View>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
              </View>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
                <View style={[Theme.width50p, Theme.padding5]}>
                  <Tiles text="Psorisis" />
                </View>
              </View>
              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <View style={[Theme.width80p, Theme.padding5]}>
                  <Tiles text="Other skin conditions" />
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              Theme.fullWidth,
              Theme.alignCenter,
              Theme.paddingHorizonal30p,
              Theme.paddingVertical30p,
            ]}>
            <Text style={[Theme.textBody, Theme.white, Theme.textCenter]}>
              People without any skin condition are welcome to join in if they
              are open to date someone with a skin condition.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={Theme.Circlediv}>
        {[1, 2, 3, 4].map(data => {
          return (
            <View
              key={data}
              style={[
                Theme.circle,
                data - 1 === selectedIndex
                  ? Theme.opacityFull
                  : Theme.opacityHalf,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const Homepage = ({navigation}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <FaceBookQuestionMarkModal
        state={modal}
        setState={() => setModal(!modal)}
      />
      <LinearGradient>
        <SafeAreaView style={[Theme.height100p]}>
          <View style={[Theme.flex5, Theme.width100p]}>
            <Slider />
          </View>
          <View
            style={[Theme.flex5, Theme.width100p, Theme.alignContentCenter]}>
            <View style={[Theme.width90p, Theme.alignContentCenter]}>
              {/* <View
                style={[Theme.width90p, Theme.alignContentCenter, Theme.row]}>
                <TouchableOpacity
                  style={[
                    Theme.width90p,
                    Theme.alignContentCenter,
                    Theme.buttonLook,
                    Theme.backgroundBlue,
                    Theme.row,
                  ]}
                  onPress={() => {
                    // navigation.navigate('help'); facebook-square
                  }}>
                  <Icon
                    name={'facebook-square'}
                    size={30}
                    color="white"
                    onPress={() => {
                      console.log('yoo');
                    }}
                  />
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.white,
                      Theme.paddingHorizonal10p,
                    ]}>
                    CONTINUE WITH FACEBOOK
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Theme.alignContentCenter,
                    Theme.smallButtonLook,
                    Theme.row,
                    Theme.backgroundWhite,
                  ]}
                  onPress={() => {
                    setModal(!modal);
                  }}>
                  <Icon
                    name={'question'}
                    size={20}
                    color={colors.purpledark}
                    onPress={() => {
                      console.log('yoo');
                    }}
                  />
                </TouchableOpacity>
              </View> */}
              <View
                style={[Theme.width90p, Theme.alignContentCenter, Theme.row]}>
                <TouchableOpacity
                  style={[
                    Theme.width100p,
                    Theme.alignContentCenter,
                    Theme.buttonLook,
                    Theme.row,
                    Theme.backgroundBlue,
                  ]}
                  onPress={() => {
                    navigation.navigate('otp');
                  }}>
                  <Icon name={'mobile-phone'} size={30} color="white" />
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.white,
                      Theme.paddingHorizonal10p,
                    ]}>
                    CONTINUE WITH PHONE NUMBER
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.alignContentCenter,
                  Theme.marginTop10,
                ]}>
                <Text
                  style={[Theme.textCaption, Theme.textUnderLine, Theme.white]}>
                  Contact Us
                </Text>
                <Text style={[Theme.textCaption, Theme.white]}>
                  By clicking continue , u agree to
                </Text>
                <Text style={[Theme.textCaption, Theme.white]}>
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.textUnderLine,
                      Theme.white,
                    ]}>
                    Terms and condition
                  </Text>{' '}
                  {'&'}{' '}
                  <Text
                    style={[
                      Theme.textCaption,
                      Theme.textUnderLine,
                      Theme.white,
                    ]}>
                    Privacy policy
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Homepage;
