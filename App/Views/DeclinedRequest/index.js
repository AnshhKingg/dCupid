import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  ChatDeclinedComp,
  LinearButton,
  Loading,
} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment-timezone';
import {dateTime} from '../../service/utils';
import {useFocusEffect} from '@react-navigation/native';
import {getConversationsDeclined} from '../../Redux/actions';

const MessageTile = ({data, time}) => {
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
              {data.name}
            </Text>
          </View>
          <View style={[Theme.width40p]}>
            <Text style={[Theme.selfAlignEnd]}>{dateTime(time)}</Text>
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
            <Text style={[Theme.textCaption]} numberOfLines={1}>
              {data?.city} {data?.state} {data?.country}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DeclinedRequests = ({navigation}) => {
  const dis = useDispatch();
  useFocusEffect(
    useCallback(() => {
      dis(getConversationsDeclined());
    }, []),
  );

  const msglist = useSelector(state => state.chatDeclined);
  const [toggle, setToggle] = useState(false);
  console.log(msglist.loading);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        {msglist.loading && <Loading />}
        <Header
          left="menuunfold"
          right="home"
          title="Declined Chats"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <View style={[Theme.width100p]}>
          <View style={[Theme.width100p, Theme.paddingHorizonal10p]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="BY ME"
                  noGradient={toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(false)}
                />
              </View>
              <View style={[Theme.width50p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="BY OTHERS"
                  noGradient={!toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(true)}
                />
              </View>
            </View>
          </View>
        </View>
        {toggle && (
          <FlatList
            contentContainerStyle={[
              Theme.width100p,
              Theme.flexGrow,
              Theme.padding10,
            ]}
            data={msglist.data.byOther}
            showsVerticalScrollIndicator={true}
            key={data => data._id}
            renderItem={data => {
              return (
                <MessageTile
                  data={data.item.user}
                  time={data.item.requestedTime}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data.item.user._id,
                      name: data.item.user.name,
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
        {!toggle && (
          <FlatList
            contentContainerStyle={[
              Theme.width100p,
              Theme.flexGrow,
              Theme.padding10,
            ]}
            data={msglist.data.byMe}
            showsVerticalScrollIndicator={true}
            key={data => data._id}
            renderItem={data => {
              return (
                <ChatDeclinedComp
                  data={data.item.user}
                  time={data.item.requestedTime}
                  conversationData={data.item.lastMessage}
                  contentContainerStyle={[
                    Theme.width100p,
                    Theme.flexGrow,
                    Theme.padding10,
                  ]}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data.item.user._id,
                      name: data.item.user.name,
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

export default DeclinedRequests;
