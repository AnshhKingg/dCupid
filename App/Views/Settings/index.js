import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/Feather';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Component = ({title, icon}) => {
  return (
    <View
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
    </View>
  );
};

const Settings = ({navigation}) => {
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
              <Component title="Your contact details" icon="mobile" />
              <Component title="Blocked profiles" icon="user-times" />
              <View
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
              </View>
              <Component title="Invite friends" icon="user-friends" />

              <View
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
                  <Text style={[Theme.textBody]}>
                    How to get better matches
                  </Text>
                </View>
              </View>

              <View
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
              </View>

              <View
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
              </View>

              <Component title="Privacy policy" icon="file-alt" />
              <Component title="Terms and conditions" icon="check-square" />
            </View>
            <View
              style={[
                Theme.width60p,
                Theme.selfAlignCenter,
                Theme.paddingBottom20,
              ]}>
              <LinearButton title="LOG OUT" />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('delete')}
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
