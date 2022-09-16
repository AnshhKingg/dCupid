import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearButton, LinearGradient} from '.';
import moment from 'moment-timezone';
import {useSelector, useDispatch} from 'react-redux';
// import {getProfile} from '../Redux/actions/profile';
import Carousel from './Carousel';
import {
  /*dateTime,*/ trustscore,
  imageFilter,
  namePrivacy,
} from '../service/utils';
import {useNavigation} from '@react-navigation/native';

const ChatDeclinedComponent = ({
  onPress,
  conversationData,
  onPressProfile,
  disableButton,
  data,
  time,
}) => {
  // const profile = useSelector(state => state.profile.user);
  const trust = trustscore(data);
  const ageCalc = date => {
    const newdate = new Date();
    const age = moment(newdate).diff(moment(date), 'years');
    return age;
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        Theme.width100p,
        Theme.borderRadius10,
        Theme.marginBottom10,
        Theme.borderRed,
      ]}>
      {imageFilter(data.photos).length === 0 ? (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('otherprofile', {data: data});
          }}
          style={[Theme.imageMatchingProfileWidth, Theme.alignContentCenter]}>
          <Icon name="user-circle" size={230} color="black" />
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
      {/* {profile.userLikes.includes(data._id) ? (
        <LinearGradient
          style={[
            Theme.imageMatchingHorizontalComponent,
            Theme.alignContentCenter,
          ]}>
          <Text style={[Theme.textTitle, Theme.white]}>He likes you</Text>
        </LinearGradient>
      ) : null} */}
      {/* <LinearGradient
        style={[Theme.imageTimeComponent, Theme.alignContentCenter]}>
        <Text style={[Theme.textCaption, Theme.white]}>{dateTime(time)}</Text>
      </LinearGradient> */}
      <LinearGradient
        style={[Theme.width100p, Theme.padding10, Theme.alignContentCenter]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressProfile}
          disabled={disableButton ? true : false}>
          <Text style={[Theme.textCaption, Theme.white]}>
            {namePrivacy(data)} , ({ageCalc(data.dob)}) , {data.city} ,
            {data.country}
          </Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data.skin}</Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data.marital}</Text>
          <Text style={[Theme.textCaption, Theme.white]}>{data.religion}</Text>

          <View style={[Theme.width100p, Theme.marginVertical10]}>
            <Text style={[Theme.textBody, Theme.white]} numberOfLines={1}>
              Last message : {conversationData}
            </Text>
          </View>

          <View style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
            <LinearButton title="Reply" onPress={onPress} border />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ChatDeclinedComponent;
