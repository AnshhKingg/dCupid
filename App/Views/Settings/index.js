import React from 'react';
import {View, Text, ScrollView, Alert, Share, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {logout} from '../../Redux/actions/auth';
import auth from '@react-native-firebase/auth';

const Component = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Theme.width100p,
        Theme.row,
        Theme.padding10,
        Theme.alignContentCenter,
      ]}>
      <View
        style={[
          Theme.width10p,
          Theme.alignContentCenter,
          Theme.smallButtonLook,
        ]}>
        <Icon name={icon} size={30} color="purple" />
      </View>
      <View style={[Theme.width90p, Theme.flexStart]}>
        <Text style={[Theme.textBody]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Settings = ({navigation}) => {
  const dis = useDispatch();
  const shareLink = () => {
    Share.share(
      {
        message:
          'Derma Cupid – dating and matchmaking app for people with skin conditions. http://dermacupid.com/',
        title: 'Derma Cupid',
      },
      {
        dialogTitle: 'Derma Cupid',
      },
    );
  };
  return (
    <>
      <SafeAreaView style={[Theme.height100p, Theme.alignCenter]}>
        <Header
          left="menuunfold"
          title="Settings"
          leftnav={() => navigation.openDrawer()}
        />

        <View style={[Theme.flex1, Theme.width100p]}>
          <ScrollView contentContainerStyle={[Theme.flexGrow]}>
            <View style={[Theme.width100p]}>
              {/* <Component title="Your contact details" icon="mobile" />
              <Component title="Blocked profiles" icon="user-times" /> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('help')}
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.padding10,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width10p,
                    Theme.alignContentCenter,
                    Theme.smallButtonLook,
                  ]}>
                  <IconF name="help-circle" size={30} color="purple" />
                </View>
                <View style={[Theme.width90p, Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Help</Text>
                </View>
              </TouchableOpacity>
              <Component
                title="Invite friends"
                icon="user-friends"
                onPress={() => shareLink()}
              />

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://dermacupid.com/community-guidelines')
                }
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.padding10,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width10p,
                    Theme.alignContentCenter,
                    Theme.smallButtonLook,
                  ]}>
                  <IconFoundation
                    name="torsos-male-female"
                    size={30}
                    color="purple"
                  />
                </View>
                <View style={[Theme.width90p, Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Community guidelines</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://dermacupid.com/safety-tips')
                }
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.padding10,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width10p,
                    Theme.alignContentCenter,
                    Theme.smallButtonLook,
                  ]}>
                  <IconM name="verified-user" size={30} color="purple" />
                </View>
                <View style={[Theme.width90p, Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>Safety Guidelines</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => Linking.openURL('https://dermacupid.com/about')}
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.padding10,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width10p,
                    Theme.alignContentCenter,
                    Theme.smallButtonLook,
                  ]}>
                  <IconE name="info-with-circle" size={30} color="purple" />
                </View>
                <View style={[Theme.width90p, Theme.flexStart]}>
                  <Text style={[Theme.textBody]}>About</Text>
                </View>
              </TouchableOpacity>

              <Component
                title="Privacy policy"
                icon="file-alt"
                onPress={() =>
                  Linking.openURL('https://dermacupid.com/privacy-policy')
                }
              />
              <Component
                title="Terms and conditions"
                icon="check-square"
                onPress={() =>
                  Linking.openURL('https://dermacupid.com/terms-of-use')
                }
              />
            </View>
            <View
              style={[
                Theme.width60p,
                Theme.selfAlignCenter,
                Theme.paddingBottom20,
              ]}>
              <LinearButton
                title="LOG OUT"
                onPress={() => {
                  auth().signOut();
                  dis(logout());
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('delete');
              }}
              style={[
                Theme.width60p,
                Theme.selfAlignCenter,
                Theme.alignCenter,
                Theme.paddingBottom20,
              ]}>
              <Text style={[Theme.textBody, Theme.textUnderLine, Theme.blue]}>
                Delete Profile
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Settings;
