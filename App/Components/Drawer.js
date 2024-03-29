import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from './LinearGradient';
import LinearGradientButton from './LinearGradientButton';
import {useSelector} from 'react-redux';
import {trustscore} from '../service/utils';

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

const DrawerExtendedComponent = ({text, onPress, seperator, num}) => {
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

        {num ? (
          <View
            style={[
              Theme.smallButtonLook,
              Theme.alignContentCenter,
              Theme.backgroundBlue,
            ]}>
            <Text style={[Theme.textBody, Theme.white]}>{num}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const Drawer = props => {
  const profile = useSelector(state => state.profile.user);
  const like = useSelector(state => state.likesReceived.data);
  const chatReq = useSelector(state => state.chatRequested.data);
  const trust = trustscore(profile);
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
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('photo');
                }}>
                {profile.photos.length === 0 ? (
                  <View
                    style={[
                      Theme.alignContentCenter,
                      Theme.profileIcon,
                      Theme.blackFaded,
                    ]}>
                    <Icon name={'user-friends'} size={25} color="white" />
                  </View>
                ) : (
                  <Image
                    style={{width: 70, height: 70, borderRadius: 35}}
                    source={{uri: profile.photos[0].photo}}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  Theme.textBody,
                  Theme.paddingLeft,
                  Theme.textHeader,
                  Theme.white,
                ]}
                onPress={() =>
                  props.navigation.navigate('profile', {change: false})
                }>
                {profile.name}
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
            title={`Trust score ${trust}%`}
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
            onPress={() => props.navigation.navigate('searchmenu')}
          />
          <DrawerComponent
            text="Likes "
            seperator={false}
            onPress={() => props.navigation.navigate('likesreceived')}
          />
          <DrawerExtendedComponent
            text="Regular"
            seperator={false}
            num={like.regular.length}
            onPress={() => props.navigation.navigate('likesreceived')}
          />
          <DrawerExtendedComponent
            text="Filtered out"
            num={like.filterOut.length}
            onPress={() =>
              props.navigation.navigate('likesreceived', {change: true})
            }
          />
          <DrawerComponent
            text="Chat Request"
            seperator={false}
            onPress={() => props.navigation.navigate('chatrequested')}
          />
          <DrawerExtendedComponent
            text="Regular"
            seperator={false}
            num={chatReq.regular.length}
            onPress={() => props.navigation.navigate('chatrequested')}
          />
          <DrawerExtendedComponent
            text="Filtered out"
            num={chatReq.filterOut.length}
            onPress={() =>
              props.navigation.navigate('chatrequested', {change: true})
            }
          />
          <DrawerComponent
            text="Messages"
            onPress={() => props.navigation.navigate('message')}
          />
          <DrawerComponent
            text="Likes Sent"
            onPress={() => props.navigation.navigate('likes')}
          />
          <DrawerComponent
            text="Declined Profiles"
            onPress={() => props.navigation.navigate('chatdeclined')}
          />
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
