import React, {useState, memo} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from '.';
import {colors} from '../Assets/Colors';
import moment from 'moment-timezone';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../service/axios';
import {getProfile} from '../Redux/actions/profile';
import Carousel from './Carousel';
import {dateTime, trustscore, imageFilter, namePrivacy} from '../service/utils';
import {useNavigation} from '@react-navigation/native';

const ProfileComponent = ({
  onPress,
  onPressProfile,
  disableButton,
  data,
  time,
}) => {
  const dis = useDispatch();
  const profile = useSelector(state => state.profile.user);
  const token = useSelector(state => state.auth.token);
  const trust = trustscore(data);
  const navigation = useNavigation();
  const ageCalc = date => {
    const newdate = new Date();
    const age = moment(newdate).diff(moment(date), 'years');
    return age;
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
          <Icon name="user-circle" size={200} color="black" />
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
      {time ? (
        <LinearGradient
          style={[Theme.imageTimeComponent, Theme.alignContentCenter]}>
          <Text style={[Theme.textCaption, Theme.white]}>{dateTime(time)}</Text>
        </LinearGradient>
      ) : null}
      {profile.userLikes.includes(data?._id) ? (
        <LinearGradient
          style={[
            Theme.imageMatchingHorizontalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
        </LinearGradient>
      ) : null}

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
          {disableButton ? null : (
            <View
              style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
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
                    if (
                      !profile.userLikes.find(e => data?._id === e.likedUser)
                        ? true
                        : false
                    ) {
                      axios(token)
                        .post('/user/add-like', {liked_user: data?._id})
                        .then(() => {
                          console.log(data?._id);
                          dis(getProfile());
                        })
                        .catch(er => {
                          console.log(er);
                        });
                    } else {
                      ToastAndroid.show(
                        'Your have already liked this user',
                        ToastAndroid.SHORT,
                      );
                    }
                  }}>
                  <Icon
                    name={
                      profile.userLikes.find(e => data?._id === e.likedUser)
                        ? 'heart'
                        : 'heart-o'
                    }
                    size={30}
                    color={colors.purpledark}
                  />
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
          )}
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProfileComponent;
