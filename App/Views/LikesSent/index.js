import React, {useCallback} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, Loading} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {ageCalc, dateTime, imageFilter, namePrivacy} from '../../service/utils';
import {useFocusEffect} from '@react-navigation/native';
import {likeUser} from '../../Redux/actions';

const LikesTile = ({data, onPress}) => {
  const id = useSelector(state => state.profile.user._id);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Theme.width100p,
        Theme.row,
        Theme.separator,
        Theme.alignContentCenter,
      ]}>
      <View style={[Theme.width20p, Theme.alignContentCenter]}>
        {imageFilter(data.photos).length === 0 ? (
          <Icon
            style={[Theme.paddingLeft]}
            name={'user-circle'}
            size={50}
            color="black"
          />
        ) : (
          <Image
            style={[{width: 50, height: 50, borderRadius: 25}]}
            source={{uri: imageFilter(data.photos)[0].photo}}
          />
        )}
      </View>
      <View
        style={[
          Theme.width80p,
          Theme.paddingVertical5p,
          Theme.alignContentCenter,
          Theme.paddingHorizonal10p,
        ]}>
        <View
          style={[
            Theme.width100p,
            Theme.alignCenter,
            Theme.justifySpcBtw,
            Theme.row,
            Theme.marginBottom10,
          ]}>
          <View style={[Theme.width60p]}>
            <Text style={[Theme.textBody, Theme.textBold]} numberOfLines={1}>
              {namePrivacy(data)} {ageCalc(data.dob)}
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            {/* <Text
              style={[Theme.textCaption, Theme.textBlack, Theme.selfAlignEnd]}>
              {dateTime(
                data.userLikes.find(data => data.likedUser === id).createdAt,
              )}
            </Text> */}
          </View>
        </View>
        <View
          style={[
            Theme.width100p,
            Theme.alignCenter,
            Theme.justifySpcBtw,
            Theme.row,
          ]}>
          <View style={[Theme.width80p]}>
            <Text style={[Theme.textCaption, Theme.textBold]} numberOfLines={1}>
              {data.city} {data.country}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const LikesSent = ({navigation}) => {
  const dis = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dis(likeUser());
    }, []),
  );
  const likes = useSelector(state => state.likeUser);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Loading visible={likes.loading} />
        <Header
          left="menuunfold"
          right="home"
          title="Like Sent"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <ScrollView contentContainerStyle={[]}>
          <View style={[Theme.width100p]}>
            {likes.data.map((data, i) => {
              return (
                <LikesTile
                  key={i}
                  data={data.user}
                  onPress={() =>
                    navigation.navigate('otherprofile', {
                      data: data.user,
                    })
                  }
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LikesSent;
