import React, {useCallback} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, Loading} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {ageCalc, dateTime} from '../../service/utils';
import {useFocusEffect} from '@react-navigation/native';
import {likeUser} from '../../Redux/actions';

const LikesTile = ({data}) => {
  return (
    <View
      style={[
        Theme.width100p,
        Theme.row,
        Theme.separator,
        Theme.alignContentCenter,
      ]}>
      <View style={[Theme.width20p]}>
        <View style={[Theme.alignContentCenter, Theme.profileIcon]}>
          <Icon name={'user-circle'} size={50} color="black" />
        </View>
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
              {data.name} {ageCalc(data.dob)}
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            <Text
              style={[Theme.textCaption, Theme.textBlack, Theme.selfAlignEnd]}>
              {dateTime(data.createdAt)}
            </Text>
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
              {data.city} {data.state}
            </Text>
          </View>
        </View>
      </View>
    </View>
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
        {likes.loading && <Loading />}
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
              return <LikesTile key={i} data={data.user} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LikesSent;
