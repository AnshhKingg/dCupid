import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearGradient} from '../../Components';
import {colors} from '../../Assets/Colors';

const Slider = ({onPress, onPressProfile}) => {
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
        <TouchableOpacity onPress={onPressProfile}>
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
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const MatchingProfile = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="arrowleft"
          title="Matching Profile"
          leftnav={() => {
            navigation.goBack();
          }}
        />
        <View style={[Theme.width100p, Theme.padding10]}>
          <Slider
            onPress={() => navigation.navigate('chat')}
            onPressProfile={() => navigation.navigate('otherprofile')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MatchingProfile;
