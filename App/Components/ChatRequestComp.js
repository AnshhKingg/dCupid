import React, {useState} from 'react';
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
import {dateTime, trustscore} from '../service/utils';
import axiosServ from '../service/axios';

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
  const accept = status => {
    axiosServ(token)
      .post(`/chat/accept`, {
        userId: data._id,
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
    <View
      style={[
        Theme.width100p,
        Theme.borderRadius10,
        Theme.marginBottom10,
        Theme.borderRed,
      ]}>
      {data.photos.length === 0 ? (
        <View
          style={[Theme.imageMatchingProfileWidth, Theme.alignContentCenter]}>
          <Icon name="user" size={230} color="black" />
        </View>
      ) : (
        <Carousel images={data.photos} />
      )}
      <LinearGradient
        style={[
          Theme.imageMatchingVerticalComponent,
          Theme.alignContentCenter,
        ]}>
        <Text style={[Theme.textTitle, Theme.white, Theme.textCenter]}>
          {trust}% Trust Score
        </Text>
      </LinearGradient>
      {profile.userLikes.includes(data._id) ? (
        <LinearGradient
          style={[
            Theme.imageMatchingHorizontalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
        </LinearGradient>
      ) : null}
      <LinearGradient
        style={[Theme.imageTimeComponent, Theme.alignContentCenter]}>
        <Text style={[Theme.textCaption, Theme.white]}>{dateTime(time)}</Text>
      </LinearGradient>
      <LinearGradient
        style={[Theme.width100p, Theme.padding10, Theme.alignContentCenter]}>
        <TouchableOpacity
          onPress={onPressProfile}
          disabled={disableButton ? true : false}>
          <Text style={[Theme.textCaption, Theme.white]}>
            {data.name} {ageCalc(data.dob)}
          </Text>
          <Text style={[Theme.textCaption, Theme.white]}>
            {data.skin} {data.marital} {data.religion}
          </Text>

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
    </View>
  );
};

export default ChatRequestComponent;
