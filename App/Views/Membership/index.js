import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, LinearButton, LinearGradient } from '../../Components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Component = ({ title, icon }) => {
  return (
    <View
      style={[
        Theme.row,
        Theme.selfAlignStart,
        Theme.alignContentCenter,
      ]}>
      <LinearGradient
        style={[
          Theme.width20p,
          Theme.alignContentCenter,
          Theme.smallButtonLook,
        ]}>
        <Icon name={icon} size={20} color="white" />
      </LinearGradient>
      <View style={[
        Theme.width80p,]}>
        <Text style={[Theme.textBody, Theme.textBold]}>{title}</Text>
      </View>
    </View>
  );
};

const Membership = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p, Theme.alignCenter]}>
        <Header
          left="menuunfold"
          title="Membership"
          leftnav={() => navigation.openDrawer()}
        />

        <View style={[Theme.flex1, Theme.alignContentCenter, Theme.totalView, Theme.row]}>
          <ScrollView contentContainerStyle={[Theme.flexGrow]}>
            <View style={[Theme.flex1, Theme.width100p, Theme.justifySpcBtw]}>
              <View style={[Theme.alignContentCenter, Theme.width100p]}>
                <Text
                  style={[
                    Theme.textBody,
                    Theme.textBold,
                    Theme.textCenter,
                    Theme.paddingBottom30,
                  ]}>
                  Become a premium member to chat , send messages and connect with
                  interesting profiles instantly
                </Text>
              </View>
              <View
                style={[
                  Theme.alignContentCenter,
                  Theme.width100p,
                  Theme.paddingBottom30,
                ]}>
                <Text style={[Theme.textBody, Theme.textBold, Theme.textCenter]}>
                  399 for 1 month
                </Text>
                <View style={[Theme.alignContentCenter, Theme.width60p]}>
                  <LinearButton title="Upgrade" flat={true} />
                </View>
              </View>
              <View style={[Theme.width100p]}>
                <Text
                  style={[
                    Theme.textBody,
                    Theme.selfAlignCenter,
                    Theme.textBold,
                    Theme.textCenter,
                  ]}>
                  PREMIUM MEMBERSHIP BENEFITS
                </Text>

                <Component title="Appear on top of search results" icon="heart" />
                <Component title="Send unlimited chat messages" icon="heart" />
                <Component title="Send unlimited likes" icon="heart" />
                <Component title="10x higher chance of match" icon="heart" />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Membership;
