import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from './LinearGradient';
import LinearGradientButton from './LinearGradientButton';

const DrawerComponent = ({text, onPress, seperator}) => {
  const style =
    seperator === false
      ? [Theme.width90p, Theme.paddingVertical5p, Theme.flexStart]
      : [
          Theme.width90p,
          Theme.paddingVertical5p,
          Theme.flexStart,
          Theme.drawerSeparator,
        ];
  return (
    <TouchableOpacity
      style={[
        Theme.width100p,
        Theme.drawerHeight,
        Theme.row,
        Theme.alignContentCenter,
      ]}
      onPress={onPress}>
      <LinearGradient
        style={[
          Theme.width10p,
          Theme.alignContentCenter,
          Theme.smallButtonLook,
        ]}>
        <Icon name={'user-friends'} size={15} color="white" />
      </LinearGradient>
      <View style={style}>
        <Text style={[Theme.textBody]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const DrawerExtendedComponent = ({text, onPress, seperator}) => {
  const style =
    seperator === false
      ? [
          Theme.width90p,
          Theme.alignCenter,
          Theme.padding5,
          Theme.row,
          Theme.justifySpcBtw,
        ]
      : [
          Theme.width90p,
          Theme.alignCenter,
          Theme.padding5,
          Theme.row,
          Theme.drawerSeparator,
          Theme.justifySpcBtw,
        ];
  return (
    <TouchableOpacity
      style={[
        Theme.width100p,
        Theme.drawerHeight,
        Theme.row,
        Theme.alignContentCenter,
      ]}
      onPress={onPress}>
      <View style={[Theme.smallButtonLook, Theme.backgroundWhite]} />
      <View style={style}>
        <Text style={[Theme.textBody]}>{text}</Text>
        <View
          style={[
            Theme.smallButtonLook,
            Theme.alignContentCenter,
            Theme.backgroundBlue,
          ]}>
          <Text style={[Theme.textBody, Theme.white]}>9</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Drawer = props => {
  return (
    <View style={[Theme.flex1]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        {...props}
        contentContainerStyle={[Theme.flexGrow, Theme.width100p]}>
        <LinearGradient
          style={[
            Theme.width100p,
            Theme.alignContentCenter,
            Theme.paddingHorizonal20p,
            Theme.padding10,
          ]}>
          <View
            style={[
              Theme.width100p,
              Theme.drawerHeight,
              Theme.row,
              Theme.alignContentCenter,
            ]}>
            <View
              style={[
                Theme.width90p,
                Theme.alignCenter,
                Theme.padding5,
                Theme.row,
              ]}>
              <View
                style={[
                  Theme.alignContentCenter,
                  Theme.profileIcon,
                  Theme.backgroundWhite,
                ]}>
                <Icon name={'user-friends'} size={25} color="white" />
              </View>
              <Text style={[Theme.textBody, Theme.textHeader, Theme.white]}>
                Nothing
              </Text>
            </View>
            <View
              style={[
                Theme.width10p,
                Theme.alignContentCenter,
                Theme.smallButtonLook,
                Theme.backgroundWhite,
              ]}>
              <AntIcon
                name={'setting'}
                size={25}
                color="purple"
                onPress={() => props.navigation.navigate('settings')}
              />
            </View>
          </View>
        </LinearGradient>

        <View
          style={[Theme.width100p, Theme.alignContentCenter, Theme.padding10]}>
          <LinearGradientButton
            title="Trust score 40%"
            onPress={() => props.navigation.navigate('trustscore')}
          />
        </View>
        <View style={[Theme.drawerSeparator]} />
        <View style={[Theme.flex1, Theme.width100p, Theme.paddingHorizonal20p]}>
          <DrawerComponent
            text="My Matches"
            onPress={() => props.navigation.navigate('matchingprofile')}
          />
          <DrawerComponent
            text="Search"
            onPress={() => props.navigation.navigate('search')}
          />
          <DrawerComponent
            text="Likes "
            seperator={false}
            onPress={() => props.navigation.navigate('likesreceived')}
          />
          <DrawerExtendedComponent text="Regular" seperator={false} />
          <DrawerExtendedComponent text="Filtered out" />
          <DrawerComponent text="Chat Request" seperator={false} />
          <DrawerExtendedComponent text="Regular" seperator={false} />
          <DrawerExtendedComponent text="Filtered out" />
          <DrawerComponent
            text="Messages"
            onPress={() => props.navigation.navigate('message')}
          />
          <DrawerComponent
            text="Likes Sent"
            onPress={() => props.navigation.navigate('likes')}
          />
          <DrawerComponent text="Declined Profiles" />
        </View>
      </ScrollView>
      <View
        style={[Theme.width100p, Theme.alignContentCenter, Theme.padding10]}>
        <TouchableOpacity
          style={[
            Theme.width100p,
            Theme.flatButton,
            Theme.backgroundPink,
            Theme.alignContentCenter,
          ]}
          onPress={() => props.navigation.navigate('membership')}>
          <Text style={[Theme.textBody, Theme.white]}>Membership</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drawer;
