import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { LinearButton, LinearGradient } from '../../Components';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import { Menu, MenuItem } from 'react-native-material-menu';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import axiosServ from '../../service/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getConversations } from '../../Redux/actions';
import moment from 'moment-timezone';
import { SocketContext } from '../../Components/Socket'

const UserMsg = ({ toggle, data }) => {
  let dateData = moment(data.createdAt).isSame(new Date(), "day");
  if (dateData) {
    dateData = moment(data.createdAt).format('hh:mm A')
  } else {
    dateData = moment(data.createdAt).format('DD-MM-YYYY')
  }
  return (
    <View style={Theme.width100p}>
      <View style={toggle ? Theme.selfAlignEnd : Theme.selfAlignStart}>
        <View
          style={[
            Theme.maxWidth70,
            Theme.padding10,
            Theme.backgroundBlue,
            Theme.row,
            Theme.selfAlignStart,
          ]}>
          <Text style={[Theme.maxWidth80, Theme.textCaption]}>
            {data.message}
          </Text>
          <IconAwesome
            style={[Theme.maxWidth20, Theme.paddingLeft]}
            name={'user-circle'}
            size={25}
            color="white"
          />
        </View>
        <View>
          <Text style={[Theme.textCaption]}>{dateData}</Text>
        </View>
      </View>
    </View>
  );
};

const Chat = ({ navigation, route }) => {
  const socket = useContext(SocketContext);
  const bottom = useRef();
  const pos = useRef(true);
  const [msgs, setMsgs] = useState([])
  const [conversation, setConversation] = useState(0)
  const [createdBy, setCreatedBy] = useState(id)
  const [convId, setConvId] = useState('')
  const [chatMsg, setChatMsg] = useState('')
  const dis = useDispatch()
  const token = useSelector(state => state.auth.token)
  const id = useSelector(state => state.profile.user._id)

  useEffect(() => {
    socket.on('update_messages', (resp) => {
      console.log(resp);
      setMsgs(prev => [...prev, resp])
      bottom.current.scrollToEnd({ animated: true });
    })
    axiosServ(token).post(`/chat/get-user-conversation`,
      { 'userId': route.params.receiverId }).then((resp) => {
        setConversation(resp.data.conversation);
        setMsgs(resp.data.data)
        setCreatedBy(resp.data.createdBy)
        setConvId(resp.data.conversationId)
        axiosServ(token).post(`/chat/chat-read`, { 'conversationId': resp.data.conversationId }).then(() => {
          dis(getConversations())
        })
        bottom.current.scrollToEnd({ animated: true });
      }).catch((er) => {
        console.log('i failed');
        console.log(er.response);
      })
    return () => {
      socket.off('update_messages')
    }
  }, [route.params.receiverId])

  const sendmsg = () => {
    try {
      axiosServ(token).post(`/chat/send-msg`, {
        'receiverId': route.params.receiverId,
        'senderId': id,
        'message': chatMsg
      }).then((resp) => {
        console.log(resp.data.data);
        setMsgs([...msgs, {
          "createdAt": new Date(),
          "message": chatMsg,
          "readStatus": false,
          "receiverId": route.params.receiverId,
          "senderId": id,
        }])
        setChatMsg((prev) => {
          socket.emit('messagedetection', {
            "createdAt": new Date(),
            "message": prev,
            "readStatus": false,
            "receiverId": route.params.receiverId,
            "senderId": id,
          })
          return ''
        })
        setConversation(resp.data.data.conversation.accepted);
        setCreatedBy(resp.data.data.conversation.created_by)
        axiosServ(token).post(`/chat/chat-read`, { 'conversationId': resp.data.data.conversation._id })
        .catch((er) => { console.log(er.response) })
      }).catch((er) => {
        if (er.response?.data?.error === 'Sender is not the paid user') {
          Alert.alert('Error', 'You are not a paid user')
        }
        console.log(er);
      })
    } catch (er) {
      console.log(er);
    }

  }

  const accept = (status) => {
    axiosServ(token).post(`/chat/accept`, {
      'userId': route.params.receiverId,
      'status': status
    }).then((resp) => {
      setConversation(resp.data.conversation);
      setCreatedBy(resp.data.createdBy)
    }).catch((er) => {
      Alert.alert('Error', 'Unable to perform this action.')
    })
  }


  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      if (pos.current) {
        bottom.current.scrollToEnd({ animated: true });
      }
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
    };
  }, []);

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <LinearGradient>
          <View
            style={[
              Theme.width100p,
              Theme.padding10,
              Theme.row,
              Theme.justifySpcBtw,
            ]}>
            <View style={[Theme.width60p, Theme.row, Theme.alignCenter]}>
              <Icon
                name={'arrowleft'}
                size={30}
                color="white"
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <IconAwesome
                style={[Theme.paddingLeft]}
                name={'user-circle'}
                size={30}
                color="white"
              />
              <Text style={[Theme.textHeader, Theme.white, Theme.padding5]}>
                {route?.params?.name}
              </Text>
            </View>
            <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
              <Menu
                visible={visible}
                anchor={
                  <IconMaterial
                    name="do-not-disturb"
                    onPress={showMenu}
                    size={30}
                    color="white"
                  />
                }
                onRequestClose={hideMenu}>
                <MenuItem
                  style={[Theme.textBold, Theme.textBody]}
                  onPress={hideMenu}>
                  Block
                </MenuItem>
                <MenuItem
                  style={[Theme.textBold, Theme.textBody]}
                  onPress={hideMenu}>
                  Report
                </MenuItem>
              </Menu>
            </View>
          </View>
        </LinearGradient>

        <ScrollView
          ref={bottom}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            Theme.flexGrow,
            Theme.width100p,
            Theme.justifyEnd,
          ]}
          // onScrollEndDrag={e => {
          //   if (
          //     e.nativeEvent.contentSize.height -
          //     e.nativeEvent.layoutMeasurement.height -
          //     e.nativeEvent.contentOffset.y <
          //     10
          //   ) {
          //     pos.current = true;
          //   } else {
          //     pos.current = false;
          //   }
          // }}
          >
          <View style={[Theme.width100p, Theme.padding5]}>
            {
              msgs?.map((data, index) => {
                return <UserMsg key={index} data={data} toggle={data.senderId === id} />
              })
            }
            {
              createdBy === id && conversation === 0 ?
                <View
                  style={[
                    Theme.width100p,
                    Theme.alignCenter,
                    Theme.marginBottom10,
                  ]}>
                  <Text style={[Theme.textCaption]}>
                    {route?.params?.name} has not accepted your chat request.
                  </Text>
                </View>
                :
                null
            }

            {
              createdBy !== id && conversation === 0 ?
                <View style={[Theme.width100p, Theme.row]}>
                  {
                    createdBy !== id && conversation === 2 ?
                      null :
                      <View
                        style={[
                          Theme.width50p,
                          Theme.selfAlignCenter,
                          Theme.marginBottom10,
                          , Theme.padding10
                        ]}>
                        <LinearButton title="Reply" onPress={() => accept(1)} />
                      </View>
                  }

                  <View
                    style={[
                      Theme.width50p,
                      Theme.selfAlignCenter,
                      Theme.marginBottom10,
                      , Theme.padding10
                    ]}>
                    <LinearButton title="Decline" onPress={() => accept(2)} />
                  </View>
                </View>

                : null
            }
          </View>
        </ScrollView>
        {
          createdBy !== id && conversation === 0 ?
            null
            :
            <View style={[Theme.alignCenter]}>
              <View
                style={[
                  Theme.width100p,
                  Theme.alignContentCenter,
                  Theme.row,
                  Theme.marginHorizontal10,
                ]}>
                <View
                  style={[
                    Theme.width80p,
                    Theme.alignContentCenter,
                    Theme.paddingHorizonal5p,
                  ]}>
                  <TextInput
                    style={Theme.chatTextInputStyle}
                    placeholder="Type Something"
                    value={chatMsg}
                    onChangeText={(text) => setChatMsg(text)}
                  />
                </View>
                <TouchableOpacity
                  style={[Theme.width20p, Theme.alignContentCenter]}
                  onPress={sendmsg}
                >
                  <LinearGradient
                    style={[Theme.alignContentCenter, Theme.largeButtonLook]}>
                    <IconIon name={'send-sharp'} size={40} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
        }
      </SafeAreaView>
    </>
  );
};

export default Chat;
