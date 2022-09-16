import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearButton, LinearGradient} from '.';
import moment from 'moment-timezone';
import {useSelector, useDispatch} from 'react-redux';
import Carousel from './Carousel';
import {
  getConversationsRequested,
  getConversations,
  getConversationsDeclined,
} from '../Redux/actions';
import {dateTime, imageFilter, namePrivacy, trustscore} from '../service/utils';
import axiosServ from '../service/axios';
import {useNavigation} from '@react-navigation/native';

const ChatRequestComponent = ({
  onPress,
  conversationData,
  onPressProfile,
  disableButton,
  data,
  time,
}) => {
  const dis = useDispatch();
  const profile = useSelector(state => state.profile.user);
  const token = useSelector(state => state.auth.token);
  const trust = trustscore(data);
  const ageCalc = date => {
    const newdate = new Date();
    const age = moment(newdate).diff(moment(date), 'years');
    return age;
  };
  const navigation = useNavigation();
  const accept = status => {
    axiosServ(token)
      .post('/chat/accept', {
        userId: data?._id,
        status: status,
      })
      .then(resp => {
        dis(getConversations());
        dis(getConversationsDeclined());
        dis(getConversationsRequested());
      })
      .catch(er => {
        Alert.alert('Error', 'Unable to perform this action.');
      });
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        Theme.width100p,
        Theme.borderRadius10,
        Theme.marginBottom10,
        Theme.borderRed,
      ]}>
      {imageFilter(data?.photos).length === 0 ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('otherprofile', {data: data});
          }}
          style={[Theme.imageMatchingProfileWidth, Theme.alignContentCenter]}>
          <Icon name="user" size={230} color="black" />
        </TouchableOpacity>
      ) : (
        <Carousel
          images={imageFilter(data?.photos)}
          onPress={() => {
            navigation.navigate('otherprofile', {data: data});
          }}
          disabled={disableButton}
        />
      )}
      <LinearGradient
        style={[
          Theme.imageMatchingVerticalComponent,
          Theme.alignContentCenter,
        ]}>
        <Text
          adjustsFontSizeToFit
          style={[
            Theme.textBody,
            Theme.white,
            Theme.textCenter,
            Theme.padding5,
          ]}>
          {trust}% Trust Score
        </Text>
      </LinearGradient>
      {/* {profile.userLikes.includes(data?._id) ? (
        <LinearGradient
          style={[
            Theme.imageMatchingHorizontalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
        </LinearGradient>
      ) : null} */}
      <LinearGradient
        style={[Theme.imageTimeComponent, Theme.alignContentCenter]}>
        <Text style={[Theme.textCaption, Theme.white]}>{dateTime(time)}</Text>
      </LinearGradient>
      <LinearGradient
        style={[Theme.width100p, Theme.padding10, Theme.alignContentCenter]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressProfile}
          disabled={disableButton ? true : false}>
          <Text style={[Theme.textCaption, Theme.white]}>
            {namePrivacy(data)} , ({ageCalc(data?.dob)}) , {data?.city} ,{'  '}
            {data?.country}
          </Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data?.skin}</Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data?.marital}</Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data?.religion}</Text>

          <View style={[Theme.width100p, Theme.marginVertical10]}>
            <Text style={[Theme.textBody, Theme.white]} numberOfLines={1}>
              Last message : {conversationData}
            </Text>
          </View>

          <View style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
            <View
              style={[
                Theme.width50p,
                Theme.paddingHorizonal10p,
                Theme.alignCenter,
              ]}>
              <LinearButton title="Reply" onPress={onPress} border />
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
                onPress={() => {
                  accept(2);
                }}>
                <Text style={[Theme.textTitle, Theme.textBold, Theme.purple]}>
                  Decline
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ChatRequestComponent;
