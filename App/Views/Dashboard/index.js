import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  CircularBar,
  Header,
  LinearButton,
  LinearGradient,
} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/native';
import {getProfile} from '../../Redux/actions/profile';
import {useDispatch, useSelector} from 'react-redux';
import {
  likeUser,
  getConversations,
  getLikedReceivedUsers,
  getConversationsDeclined,
  getConversationsRequested,
} from '../../Redux/actions/index';
import {SocketContext} from '../../Components/Socket';
import axios from '../../service/axios';
import {trustscore} from '../../service/utils';

const Dashboard = ({navigation}) => {
  const socket = useContext(SocketContext);
  const dis = useDispatch();
  const [count, setCount] = useState(0);
  const profile = useSelector(state => state.profile.user);
  const token = useSelector(state => state.auth.token);
  const like = useSelector(state => state.likesReceived.data);
  const conversationRequestedData = useSelector(
    state => state.chatRequested.data.length,
  );

  const trust = trustscore(profile);

  useFocusEffect(
    React.useCallback(() => {
      dis(getProfile());
      dis(likeUser());
      dis(getConversations());
      socket.on('update_unread_count', resp => {
        console.log(resp);
        axios(token)
          .get('/chat/get-unread-count')
          .then(resp => setCount(resp.data.data))
          .catch(er => console.log(er));
      });
      const onBackPress = () => {
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        socket.off('update_unread_count');
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation]),
  );

  useEffect(() => {
    socket.emit('join', profile._id);
    axios(token)
      .get('/chat/get-unread-count')
      .then(resp => setCount(resp.data.data))
      .catch(er => console.log(er));
    dis(getConversationsDeclined());
    dis(getConversationsRequested());
    dis(getLikedReceivedUsers());
  }, []);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          right="home"
          title="Dashboard"
          leftnav={() => {
            navigation.openDrawer();
          }}
        />
        <ScrollView contentContainerStyle={[Theme.alignContentCenter]}>
          <View style={[Theme.width100p, Theme.separator]}>
            <View style={[Theme.width100p, Theme.row]}>
              <TouchableOpacity
                style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}
                onPress={() => {
                  navigation.navigate('profile', {
                    change: false,
                  });
                }}>
                <LinearGradient
                  style={[
                    Theme.mediumButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="user" size={30} color="white" />
                </LinearGradient>
                <Text style={[Theme.textBody]}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  Theme.flex1,
                  Theme.padding10,
                  Theme.alignCenter,
                  Theme.borderRight,
                  Theme.borderLeft,
                ]}
                onPress={() => {
                  navigation.navigate('photo');
                }}>
                <LinearGradient
                  style={[
                    Theme.mediumButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="photo" size={30} color="white" />
                </LinearGradient>
                <Text style={[Theme.textBody]}>Photos</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}
                onPress={() => {
                  navigation.navigate('profile', {
                    change: true,
                  });
                }}>
                <LinearGradient
                  style={[
                    Theme.mediumButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="user" size={30} color="white" />
                </LinearGradient>
                <Text style={[Theme.textBody, Theme.textCenter]}>
                  Partner preference
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[Theme.width100p, Theme.separator]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                <CircularBar percent={trust} />
              </View>

              <View
                style={[
                  Theme.flex1,
                  Theme.padding10,
                  Theme.alignContentCenter,
                ]}>
                <Text style={[Theme.textBody, Theme.textCenter]}>
                  Trust Factor
                </Text>
                <Text style={[Theme.textHeader, Theme.textCenter]}>
                  {trust}%
                </Text>
              </View>
            </View>
            <Text style={[Theme.textCaption, Theme.textCenter]}>
              Trust score determines your profile credibility
            </Text>
          </View>

          <View style={[Theme.width100p, Theme.separator, Theme.marginBottom0]}>
            <View style={[Theme.width100p, Theme.row]}>
              {profile.mobileVerified ? null : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('trustscore')}
                  style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                  <View
                    style={[
                      Theme.smallButtonLook,
                      Theme.alignContentCenter,
                      Theme.backgroundGray,
                    ]}>
                    <Icon name="photo" size={20} color="black" />
                  </View>
                  <Text style={[Theme.textCaption, Theme.textCenter]}>
                    Verify mobile 20%
                  </Text>
                </TouchableOpacity>
              )}

              {profile.emailVerified ? null : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('trustscore')}
                  style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                  <View
                    style={[
                      Theme.smallButtonLook,
                      Theme.alignContentCenter,
                      Theme.backgroundGray,
                    ]}>
                    <Icon name="user" size={20} color="black" />
                  </View>
                  <Text style={[Theme.textCaption, Theme.textCenter]}>
                    Verify Email 20%
                  </Text>
                </TouchableOpacity>
              )}

              {profile.photos.length > 0 ? null : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('trustscore')}
                  style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                  <View
                    style={[
                      Theme.smallButtonLook,
                      Theme.alignContentCenter,
                      Theme.backgroundGray,
                    ]}>
                    <Icon name="user" size={20} color="black" />
                  </View>
                  <Text style={[Theme.textCaption, Theme.textCenter]}>
                    Upload Photo 20%
                  </Text>
                </TouchableOpacity>
              )}

              {profile.photoID ? null : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('trustscore')}
                  style={[Theme.flex1, Theme.padding10, Theme.alignCenter]}>
                  <View
                    style={[
                      Theme.smallButtonLook,
                      Theme.alignContentCenter,
                      Theme.backgroundGray,
                    ]}>
                    <Icon name="user" size={20} color="black" />
                  </View>
                  <Text style={[Theme.textCaption, Theme.textCenter]}>
                    Verify Photo ID 20%
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={[Theme.width100p, Theme.separator]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.flex1, Theme.alignCenter, Theme.padding5]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('likesreceived')}>
                  <Icon name="heart-o" size={50} color="grey" />
                  <View
                    style={[
                      Theme.notificationLook,
                      Theme.alignContentCenter,
                      Theme.backgroundBlue,
                    ]}>
                    <Text style={[Theme.textCaption, Theme.white]}>
                      {like.regular.length}
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text style={[Theme.textCaption, Theme.textCenter]}>Likes</Text>
              </View>

              <View
                style={[
                  Theme.flex1,
                  Theme.alignCenter,
                  Theme.padding5,
                  Theme.borderLeft,
                  Theme.borderRight,
                ]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('message')}>
                  <IconFeather name="message-square" size={50} color="grey" />
                  {count === 0 ? null : (
                    <View
                      style={[
                        Theme.notificationLook,
                        Theme.alignContentCenter,
                        Theme.backgroundBlue,
                      ]}>
                      <Text style={[Theme.textCaption, Theme.white]}>
                        {count}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={[Theme.textCaption, Theme.textCenter]}>
                  Messages
                </Text>
              </View>

              <View style={[Theme.flex1, Theme.alignCenter, Theme.padding5]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('chatrequested')}>
                  <IconMaterial
                    name="message-text-outline"
                    size={50}
                    color="grey"
                  />
                  {count === 0 ? null : (
                    <View
                      style={[
                        Theme.notificationLook,
                        Theme.alignContentCenter,
                        Theme.backgroundBlue,
                      ]}>
                      <Text style={[Theme.textCaption, Theme.white]}>
                        {conversationRequestedData}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
                <Text style={[Theme.textCaption, Theme.textCenter]}>
                  Chat requests
                </Text>
              </View>
            </View>
          </View>

          <View style={[Theme.width100p, Theme.separator]}>
            <View style={[Theme.width100p, Theme.padding10]}>
              <View style={[Theme.row, Theme.alignCenter]}>
                <LinearGradient
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="user" size={25} color="white" />
                </LinearGradient>
                <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                  My Matches
                </Text>
              </View>
              <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                View all profiles who matches your partner preferences.{' '}
              </Text>

              <View style={[Theme.padding10]}>
                <LinearButton
                  title="View matching profiles"
                  onPress={() => {
                    navigation.navigate('matchingprofile');
                  }}
                />
              </View>
            </View>
          </View>

          <View style={[Theme.width100p, Theme.separator]}>
            <View style={[Theme.width100p, Theme.padding10]}>
              <View style={[Theme.row, Theme.alignCenter]}>
                <LinearGradient
                  style={[
                    Theme.smallButtonLook,
                    Theme.alignContentCenter,
                    Theme.backgroundBlue,
                  ]}>
                  <Icon name="search" size={25} color="white" />
                </LinearGradient>
                <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                  Search
                </Text>
              </View>
              <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                View all profiles who matches your partner preferences.{' '}
              </Text>
              <View style={[Theme.padding10]}>
                <LinearButton
                  title="Search"
                  onPress={() => {
                    navigation.navigate('searchmenu');
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
