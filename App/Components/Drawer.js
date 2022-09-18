import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from './LinearGradient';
// import LinearGradientButton from './LinearGradientButton';
import {useSelector} from 'react-redux';
import {imageUserFilter, trustscore} from '../service/utils';
import axiosServ from '../service/axios';

const DrawerComponent = ({text, onPress, seperator, num, icon}) => {
  const style =
    seperator === false
      ? [Theme.width90p, Theme.paddingVertical5p, Theme.flexStart]
      : [
          Theme.width90p,
          Theme.paddingVertical5p,
          Theme.flexStart,
          Theme.row,
          Theme.justifySpcBtw,
          Theme.drawerSeparator,
          Theme.alignCenter,
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
        {icon ? icon : <Icon name={'user-friends'} size={15} color="white" />}
      </LinearGradient>
      <View style={style}>
        <Text style={[Theme.textBody]}>{text}</Text>
        {num ? (
          <View
            style={[
              Theme.smallButtonLook,
              Theme.alignContentCenter,
              Theme.backgroundPurple,
            ]}>
            <Text style={[Theme.textBody, Theme.white]}>{num}</Text>
          </View>
        ) : null}
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
              Theme.backgroundPurple,
            ]}>
            <Text style={[Theme.textBody, Theme.white]}>{num}</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const Drawer = props => {
  const token = useSelector(state => state.auth.token);
  const profile = useSelector(state => state.profile.user);
  const likes = useSelector(state => state.likesReceived.data);
  const like = likes.regular.filter(
    data => data.userLikes.isSeen === false,
  ).length;
  const likeFilter = likes.filterOut.filter(
    data => data.userLikes.isSeen === false,
  ).length;
  const chatReq = useSelector(state => state.chatRequested.data);
  const count = useSelector(state => state.notification);
  // const trust = trustscore(profile);
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
            Theme.paddingVertical20p,
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
                {imageUserFilter(profile.photos).length === 0 ? (
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
                    source={{uri: imageUserFilter(profile.photos)[0].photo}}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  Theme.width120,
                  Theme.textBody,
                  Theme.paddingLeft,
                  Theme.textHeader,
                  Theme.white,
                ]}
                onPress={() =>
                  props.navigation.navigate('profile', {change: false})
                }
                numberOfLines={1}>
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

        {/* <View
          style={[Theme.width100p, Theme.alignContentCenter, Theme.padding10]}>
          <LinearGradientButton
            title={`Trust score ${trust}%`}
            onPress={() => props.navigation.navigate('trustscore')}
          />
        </View>
        <View style={[Theme.drawerSeparator]} /> */}
        <View style={[Theme.flex1, Theme.width100p, Theme.paddingHorizonal20p]}>
          <DrawerComponent
            text="My Matches"
            onPress={() => props.navigation.navigate('matchingprofile')}
          />
          <DrawerComponent
            text="Search"
            onPress={() => props.navigation.navigate('searchmenu')}
            icon={<Icon name="search" size={20} color="white" />}
          />
          <DrawerComponent
            text="Likes "
            icon={<AntIcon name="heart" size={20} color="white" />}
            seperator={false}
            onPress={() => {
              axiosServ(token)
                .get('user/seen-like')
                .then(resp => {
                  props.navigation.navigate('likesreceived');
                })
                .catch(er => {
                  console.log(er);
                });
            }}
          />
          <DrawerExtendedComponent
            text="Regular"
            seperator={false}
            num={like}
            onPress={() => {
              axiosServ(token)
                .get('user/seen-like')
                .then(resp => {
                  props.navigation.navigate('likesreceived');
                })
                .catch(er => {
                  console.log(er);
                });
            }}
          />
          <DrawerExtendedComponent
            text="Filtered out"
            num={likeFilter}
            onPress={() => {
              axiosServ(token)
                .get('user/seen-like')
                .then(() => {
                  props.navigation.navigate('likesreceived', {change: true});
                })
                .catch(er => {
                  console.log(er);
                });
            }}
          />
          <DrawerComponent
            text="Chat Request"
            seperator={false}
            onPress={() => props.navigation.navigate('chatrequested')}
            icon={
              <IonIcon name="ios-chatbubbles-sharp" size={20} color="white" />
            }
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
            icon={
              <MaterialCommunityIcon
                name="message-processing"
                size={20}
                color="white"
              />
            }
            onPress={() => props.navigation.navigate('message')}
            num={count}
          />
          <DrawerComponent
            text="Likes Sent"
            onPress={() => props.navigation.navigate('likes')}
            icon={<AntIcon name="heart" size={20} color="white" />}
          />
          <DrawerComponent
            text="Declined Profiles"
            onPress={() => props.navigation.navigate('chatdeclined')}
            icon={<Icon name="user-slash" size={20} color="white" />}
          />
        </View>
      </ScrollView>
      <View
        style={[Theme.width100p, Theme.alignContentCenter, Theme.padding10]}>
        <TouchableOpacity
          style={[
            Theme.width100p,
            Theme.flatButton,
            Theme.backgroundPurple,
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
