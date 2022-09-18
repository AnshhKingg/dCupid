import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
  Image,
  Modal,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {LinearButton, LinearGradient} from '../../Components';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';
import {Menu, MenuItem} from 'react-native-material-menu';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import axiosServ from '../../service/axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  getConversations,
  getConversationsDeclined,
  getConversationsRequested,
} from '../../Redux/actions';
import {SocketContext} from '../../Components/Socket';
import {imageFilter} from '../../service/utils';
import Loading from '../../Components/Loading';
import moment from 'moment-timezone';

const UpgradeMembershipForm = ({state, setState, close}) => {
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <View style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded]}>
        <View style={[Theme.width90]}>
          <LinearGradient>
            <Text style={[Theme.padding10, Theme.textBody, Theme.white]}>
              Upgrade Membership
            </Text>
          </LinearGradient>
          <View
            style={[
              Theme.paddingVertical10p,
              Theme.paddingHorizonal10p,
              Theme.alignContentCenter,
              Theme.backgroundWhite,
            ]}>
            <Text style={[Theme.textHeader]}>
              Upgrade now to send unlimited chat messages
            </Text>
            <View style={[Theme.width100p, Theme.row, Theme.justifySpcArnd]}>
              <View style={[Theme.width40p]}>
                <LinearButton title="Upgrade" flat={true} onPress={setState} />
              </View>
              <View style={[Theme.width40p]}>
                <LinearButton title="Cancel" flat={true} onPress={close} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const dateTime = date => {
  let dateData = moment(date).isSame(new Date(), 'day');
  if (dateData) {
    dateData = moment(date).format('hh:mm A');
  } else {
    dateData = moment(date).format('MMM DD,YYYY hh:mm A');
  }
  return dateData;
};

const UserMsg = ({toggle, data, photo}) => {
  return (
    <View style={Theme.width100p}>
      <View style={toggle ? Theme.selfAlignEnd : Theme.selfAlignStart}>
        <View
          style={[
            Theme.maxWidth70,
            Theme.padding10,
            Theme.backgroundPink,
            Theme.row,
            Theme.justifySpcBtw,
            {overflow: 'hidden'},
          ]}>
          {toggle && (
            <Text
              style={[
                Theme.maxWidth200,
                Theme.selfAlignStart,
                Theme.textCaption,
              ]}>
              {data.message}
            </Text>
          )}
          <View style={[{width: 35}, Theme.alignCenter]}>
            {imageFilter(photo).length === 0 ? (
              <IconAwesome name={'user-circle'} size={25} color="black" />
            ) : (
              <Image
                style={[
                  {
                    width: 25,
                    height: 25,
                    borderRadius: 13,
                  },
                ]}
                resizeMode="contain"
                source={{uri: imageFilter(photo)[0].photo}}
              />
            )}
          </View>
          {!toggle && (
            <Text
              style={[
                Theme.maxWidth200,
                Theme.textCaption,
                Theme.selfAlignStart,
              ]}>
              {data.message}
            </Text>
          )}
        </View>
        <View>
          <Text style={[Theme.textCaption]}>{dateTime(data.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const Chat = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const socket = useContext(SocketContext);
  const bottom = useRef();
  const pos = useRef(true);
  const page = useRef(0);
  const endReached = useRef(false);
  const [msgs, setMsgs] = useState([]);
  const [conversation, setConversation] = useState(0);
  const [createdBy, setCreatedBy] = useState(id);
  const [chatMsg, setChatMsg] = useState('');
  const dis = useDispatch();
  const token = useSelector(state => state.auth.token);
  const id = useSelector(state => state.profile.user._id);
  const userPhotos = useSelector(state => state.profile.user.photos);
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    socket.emit('join', id);
  });

  const getMessages = () => {
    setLoading(true);
    axiosServ(token)
      .post('/chat/get-user-conversation', {
        userId: route.params.receiverId,
        page: page.current,
      })
      .then(resp => {
        setLoading(false);
        setConversation(resp.data.conversation);
        if (resp.data.data.length === 0) {
          endReached.current = true;
        } else {
          setMsgs(prev => [...prev, ...resp.data.data]);
        }
        setCreatedBy(resp.data.createdBy);
        axiosServ(token)
          .post('/chat/chat-read', {
            senderId: route.params.receiverId,
            receiverId: id,
          })
          .then(() => {
            dis(getConversations());
          });
      })
      .catch(er => {
        setLoading(false);
        console.log('i failed');
        console.log(er.response);
      });
  };

  useEffect(() => {
    socket.on('update_messages', resp => {
      if (route.params.receiverId === resp.senderId) {
        setMsgs(prev => [resp, ...prev]);
        axiosServ(token)
          .post('/chat/chat-read', {
            senderId: route.params.receiverId,
            receiverId: id,
          })
          .then(resp => {
            dis(getConversations());
            bottom.current.scrollToIndex({animated: true, index: 0});
          });
      }
    });
    getMessages();
    return () => {
      socket.off('update_messages');
    };
  }, [route.params.receiverId]);

  const sendmsg = () => {
    try {
      axiosServ(token)
        .post('/chat/send-msg', {
          receiverId: route.params.receiverId,
          senderId: id,
          message: chatMsg,
        })
        .then(resp => {
          setMsgs(prev => [
            {
              createdAt: new Date(),
              message: chatMsg,
              readStatus: false,
              receiverId: route.params.receiverId,
              senderId: id,
            },
            ...prev,
          ]);
          setChatMsg(prev => {
            socket.emit('messagedetection', {
              createdAt: new Date(),
              message: prev,
              readStatus: false,
              receiverId: route.params.receiverId,
              senderId: id,
            });
            return '';
          });
          setConversation(resp.data.data.conversation.accepted);
          setCreatedBy(resp.data.data.conversation.created_by);
          axiosServ(token)
            .post('/chat/chat-read', {
              senderId: route.params.receiverId,
              receiverId: id,
            })
            .then(() => {
              bottom.current.scrollToIndex({animated: false, index: 0});
            })
            .catch(er => {
              console.log(er.response);
            });
        })
        .catch(er => {
          if (er.response?.data?.error === 'Sender is not the paid user') {
            setModalVisible(true);
          }
        });
    } catch (er) {
      console.log(er);
    }
  };

  const accept = status => {
    axiosServ(token)
      .post('/chat/accept', {
        userId: route.params.receiverId,
        status: status,
      })
      .then(resp => {
        setConversation(resp.data.conversation);
        setCreatedBy(resp.data.createdBy);
        dis(getConversationsDeclined());
        dis(getConversationsRequested());
        if (status === 2) {
          navigation.goBack();
        }
      })
      .catch(er => {
        Alert.alert('Error', 'Unable to perform this action.');
      });
  };

  // useEffect(() => {
  //   Keyboard.addListener('keyboardDidShow', () => {
  //     if (pos.current) {
  //       bottom.current.scrollToIndex({animated: false, index: 0});
  //     }
  //   });
  //   return () => {
  //     Keyboard.removeAllListeners('keyboardDidShow');
  //   };
  // }, []);

  return (
    <>
      <Loading visible={loading} />
      <UpgradeMembershipForm
        state={modalVisible}
        setState={() => {
          setModalVisible(false);
          navigation.navigate('membership');
        }}
        close={() => {
          setModalVisible(false);
        }}
      />
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
              {imageFilter(route.params.data.photos).length === 0 ? (
                <IconAwesome
                  style={[Theme.paddingLeft]}
                  name={'user-circle'}
                  size={30}
                  color="white"
                />
              ) : (
                <Image
                  style={[{width: 30, height: 30, borderRadius: 15}]}
                  source={{uri: imageFilter(route.params.data.photos)[0].photo}}
                />
              )}
              <Text
                style={[Theme.textHeader, Theme.white, Theme.padding5]}
                onPress={() => {
                  navigation.navigate('otherprofile', {
                    data: route.params.data,
                    change: true,
                  });
                }}>
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
                  textStyle={[Theme.textBlack]}
                  style={[Theme.textBold, Theme.textBody]}
                  onPress={hideMenu}>
                  Block
                </MenuItem>
                <MenuItem
                  textStyle={[Theme.textBlack]}
                  style={[Theme.textBold, Theme.textBody]}
                  onPress={hideMenu}>
                  Report
                </MenuItem>
              </Menu>
            </View>
          </View>
        </LinearGradient>

        {/* <ScrollView
          ref={bottom}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              getMessages();
            }
          }}
          scrollEventThrottle={400}
          onContentSizeChange={() =>
            bottom.current.scrollToEnd({animated: false})
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            Theme.flexGrow,
            Theme.width100p,
            Theme.justifyEnd,
          ]}
          onScrollEndDrag={e => {
            if (
              e.nativeEvent.contentSize.height -
                e.nativeEvent.layoutMeasurement.height -
                e.nativeEvent.contentOffset.y <
              10
            ) {
              pos.current = true;
            } else {
              pos.current = false;
            }
          }}>
          <View style={[Theme.width100p, Theme.padding5]}>
            {msgs?.map((data, index) => {
              return (
                <UserMsg
                  key={index}
                  data={data}
                  toggle={data.senderId === id}
                  photo={
                    data.senderId === id ? route.params.data.photos : userPhotos
                  }
                />
              );
            })}
          </View>
        </ScrollView> */}
        <View style={[Theme.flex1]}>
          <FlatList
            ref={bottom}
            inverted
            maxToRenderPerBatch={50}
            contentContainerStyle={[
              Theme.width100p,
              Theme.flexGrow,
              Theme.padding10,
            ]}
            data={msgs}
            ListFooterComponent={() => {
              {
                return loading ? (
                  <View
                    style={[
                      Theme.width100p,
                      Theme.height50p,
                      Theme.alignContentCenter,
                    ]}>
                    <ActivityIndicator size="large" color="black" />
                  </View>
                ) : null;
              }
            }}
            showsVerticalScrollIndicator={true}
            onEndReached={() => {
              console.log(endReached.current);
              if (endReached.current) {
                // ToastAndroid.show('No more messages.', ToastAndroid.SHORT);
              } else {
                page.current += 1;
                getMessages();
              }
            }}
            key={data => data._id}
            renderItem={data => {
              return (
                <UserMsg
                  key={data.index}
                  data={data.item}
                  toggle={data.item.senderId === id}
                  photo={
                    data.item.senderId === id
                      ? userPhotos
                      : route.params.data.photos
                  }
                />
              );
            }}
          />
        </View>
        {createdBy === id && conversation === 0 ? (
          <View
            style={[Theme.width100p, Theme.alignCenter, Theme.marginBottom10]}>
            <Text style={[Theme.textCaption]}>
              {route?.params?.name} has not accepted your chat request yet.
            </Text>
          </View>
        ) : null}

        {createdBy !== id && (conversation === 0 || conversation === 2) ? (
          <View style={[Theme.width100p, Theme.row, Theme.alignContentCenter]}>
            <View
              style={[
                Theme.width50p,
                Theme.selfAlignCenter,
                Theme.marginBottom10,
                ,
                Theme.padding10,
              ]}>
              <LinearButton title="Reply" onPress={() => accept(1)} />
            </View>
            {createdBy !== id && conversation === 2 ? null : (
              <View
                style={[
                  Theme.width50p,
                  Theme.selfAlignCenter,
                  Theme.marginBottom10,
                  ,
                  Theme.padding10,
                ]}>
                <LinearButton title="Decline" onPress={() => accept(2)} />
              </View>
            )}
          </View>
        ) : null}

        {createdBy !== id &&
        (conversation === 0 || conversation === 2) ? null : (
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
                  multiline={true}
                  style={Theme.chatTextInputStyle}
                  placeholder="Type Something"
                  placeholderTextColor="grey"
                  value={chatMsg}
                  onChangeText={text => setChatMsg(text)}
                />
              </View>
              <TouchableOpacity
                style={[Theme.width20p, Theme.alignContentCenter]}
                onPress={sendmsg}>
                <LinearGradient
                  style={[Theme.alignContentCenter, Theme.largeButtonLook]}>
                  <IconIon name={'send-sharp'} size={40} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Chat;
