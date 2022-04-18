import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, ProfileComp} from '../../Components';

const MatchingProfile = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="arrowleft"
          title="Member Profile"
          leftnav={() => {
            navigation.goBack();
          }}
        />

        <View style={[Theme.width100p, Theme.padding10]}>
          <ProfileComp
            onPress={() => navigation.navigate('chat')}
            onPressProfile={() => navigation.navigate('otherprofile')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MatchingProfile;
