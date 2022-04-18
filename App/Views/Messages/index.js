import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageTile = () => {
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
            <Text style={[Theme.selfAlignEnd]}>Feb 2021</Text>
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

          <View
            style={[
              Theme.width20p,
              Theme.backgroundBlue,
              Theme.alignContentCenter,
              Theme.vsmallButtonLook,
            ]}>
            <Text style={[Theme.white]}>9</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Message = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          right="home"
          title="Messages"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <ScrollView contentContainerStyle={[]}>
          <View style={[Theme.width100p]}>
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
            <MessageTile />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Message;
