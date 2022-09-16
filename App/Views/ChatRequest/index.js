import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, ChatReqComp, LinearButton, Loading} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment-timezone';
import {useFocusEffect} from '@react-navigation/native';
import {getConversationsRequested} from '../../Redux/actions';
import {namePrivacy} from '../../service/utils';

const MessageTile = ({onPress, data}) => {
  let dateData = moment(data.createdAt).isSame(new Date(), 'day');
  if (dateData) {
    dateData = moment(data.createdAt).format('hh:mm');
  } else {
    dateData = moment(data.createdAt).format('DD-MM-YYYY');
  }
  return (
    <TouchableOpacity
      onPress={onPress}
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
              {data.userData.name}
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            <Text style={[Theme.selfAlignEnd]}>{dateData}</Text>
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
              {data.conversationData.lastMessage}
            </Text>
          </View>

          {data.unread === 0 ? null : (
            <View
              style={[
                Theme.width20p,
                Theme.backgroundPurple,
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

const ChatRequests = ({navigation, route}) => {
  const dis = useDispatch();
  useFocusEffect(
    useCallback(() => {
      if (route?.params?.change) {
        setToggle(true);
      }
      dis(getConversationsRequested());
    }, [route]),
  );
  const msglist = useSelector(state => state.chatRequested);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Loading visible={msglist.loading} />
        <Header
          left="menuunfold"
          right="home"
          title="Chat Requests"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <View style={[Theme.width100p]}>
          <View
            style={[
              Theme.width100p,
              Theme.paddingHorizonal10p,
              Theme.separator,
            ]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width40p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="Regular"
                  noGradient={toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(false)}
                />
              </View>
              <View style={[Theme.width60p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="Filtered Out"
                  noGradient={!toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(true)}
                />
              </View>
            </View>
          </View>
        </View>
        {!toggle && (
          <FlatList
            contentContainerStyle={[
              Theme.width100p,
              Theme.flexGrow,
              Theme.padding10,
            ]}
            data={msglist.data.regular}
            showsVerticalScrollIndicator={true}
            key={data => data._id}
            renderItem={data => {
              return (
                <ChatReqComp
                  data={data.item.user}
                  conversationData={data.item.lastMessage}
                  time={data.item.messageDateAndTime}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data.item.user._id,
                      name: namePrivacy(data.item.user),
                      data: data.item.user,
                    })
                  }
                  onPressProfile={() =>
                    navigation.navigate('otherprofile', {
                      data: data.item.user,
                    })
                  }
                />
              );
            }}
          />
        )}
        {toggle && (
          <FlatList
            contentContainerStyle={[
              Theme.width100p,
              Theme.flexGrow,
              Theme.padding10,
            ]}
            data={msglist.data.filterOut}
            showsVerticalScrollIndicator={true}
            key={data => data._id}
            renderItem={data => {
              return (
                <ChatReqComp
                  data={data.item.user}
                  time={data.item.messageDateAndTime}
                  conversationData={data.item.lastMessage}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data.item.user._id,
                      name: namePrivacy(data.item.user),
                      data: data.item.user,
                    })
                  }
                  onPressProfile={() =>
                    navigation.navigate('otherprofile', {
                      data: data.item.user,
                    })
                  }
                />
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default ChatRequests;
