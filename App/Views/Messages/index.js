import React, {useCallback, useEffect, useRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, Loading} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { connect } from 'socket.io-client'
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment-timezone';
import {dateTime, imageFilter, namePrivacy} from '../../service/utils';
import {useFocusEffect} from '@react-navigation/native';
import {getConversations} from '../../Redux/actions';

const MessageTile = ({onPress, data}) => {
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
        {imageFilter(data.userData.photos).length === 0 ? (
          <Icon
            style={[Theme.paddingLeft]}
            name={'user-circle'}
            size={50}
            color="black"
          />
        ) : (
          <Image
            style={[{width: 50, height: 50, borderRadius: 25}]}
            source={{uri: imageFilter(data.userData.photos)[0].photo}}
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
              {namePrivacy(data.userData)}
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            <Text style={[Theme.selfAlignEnd, Theme.textBlack]}>
              {dateTime(data.conversationData.createdAt)}
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
            <Text
              style={[
                Theme.textCaption,
                data.conversationData.unread === 0 ? null : Theme.textBold,
              ]}
              numberOfLines={1}>
              {data.conversationData.lastMessage}
            </Text>
          </View>

          {data.conversationData.unread === 0 ? null : (
            <View
              style={[
                Theme.width20p,
                Theme.backgroundBlue,
                Theme.alignContentCenter,
                Theme.vsmallButtonLook,
              ]}>
              <Text style={[Theme.white]}>{data.conversationData.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Message = ({navigation}) => {
  const msglist = useSelector(state => state.chat);
  const dis = useDispatch();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dis(getConversations());
    });
    return unsubscribe;
  }, []);
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
            {msglist.data.length === 0 ? (
              <Text
                style={[
                  Theme.textBody,
                  Theme.selfAlignCenter,
                  Theme.paddingVertical20p,
                ]}>
                No messages found !
              </Text>
            ) : (
              msglist.data.map((data, index) => {
                return (
                  <MessageTile
                    data={data}
                    key={index}
                    onPress={() =>
                      navigation.navigate('chat', {
                        receiverId: data.userData._id,
                        name: namePrivacy(data.userData),
                        data: data.userData,
                      })
                    }
                  />
                );
              })
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Message;
