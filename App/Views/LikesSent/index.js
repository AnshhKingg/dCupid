import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikesTile = () => {
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
              This is a loooong message. This is a loooong message
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            <Text
              style={[Theme.textCaption, Theme.textBlack, Theme.selfAlignEnd]}>
              Feb 2021
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
            <Text style={[]} numberOfLines={1}>
              This is a loooong message. This is a loooong message
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const LikesSent = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          right="home"
          title="Likes"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <ScrollView contentContainerStyle={[]}>
          <View style={[Theme.width100p]}>
            <LikesTile />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LikesSent;
