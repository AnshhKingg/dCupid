import React from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, LinearButton } from '../../Components';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

const MessageTile = ({ toggle, togglemsg, header, des, title, onPress }) => {
  return (
    <View
      style={[
        Theme.width100p,
        toggle ? Theme.row : null,
        toggle ? Theme.alignCenter : Theme.alignContentCenter,
        Theme.totalView,
      ]}>
      {toggle ? (
        <>
          <IconMaterial name="verified-user" size={30} color="green" />
          <Text style={[Theme.textBody, Theme.paddingVertical10p]}>
            {' '}
            {togglemsg}
          </Text>
        </>
      ) : (
        <>
          {header ? (
            <Text
              style={[
                Theme.textBody,
                Theme.paddingVertical10p,
                Theme.textCenter,
              ]}>
              {header}
            </Text>
          ) : null}
          {des ? (
            <Text
              style={[
                Theme.textCaption,
                Theme.paddingVertical10p,
                Theme.textCenter,
              ]}>
              {des}
            </Text>
          ) : null}
          <View style={[Theme.width60p]}>
            <LinearButton title={title} onPress={onPress} />
          </View>
        </>
      )}
    </View>
  );
};

const TrustScore = ({ navigation }) => {
  const profile = useSelector(state => state.profile.user)
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          title="Trust Score"
          leftnav={() => navigation.openDrawer()}
        />
        <ScrollView contentContainerStyle={[]}>
          <View
            style={[
              Theme.width100p,
              Theme.alignCenter,
              Theme.paddingHorizonal20p,
            ]}>
            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.paddingVertical10p,
              ]}>
              <IconMaterial name="verified-user" size={40} color="green" />
              <Text style={[Theme.textTitle, Theme.textCenter]}>
                YOUR PROFILE TRUST SCORE
              </Text>
              <Text style={[Theme.textTitle, Theme.textCenter, Theme.purple]}>
                {((profile.photos.length > 0 ? 1 : 0) + (profile.mobileVerified ? 1 : 0) + (profile.photoID ? 1 : 0) + (profile.emailVerified ? 1 : 0)) * 25}%
              </Text>
            </View>
            <MessageTile
              toggle={profile.photos.length > 0}
              togglemsg={profile.photos.length > 0 ? profile.photos[0].photoApproved ? "Photograph verified" : "Profile photo is under verification" : ""}
              header="Add your recent photo (20%)"
              title={'Add Photo'}
              onPress={() => navigation.navigate('photo')}
            />

            <MessageTile
              toggle={profile.mobileVerified ? true : false}
              togglemsg="Mobile verified"
              header="Verify your mobile number (20%)"
              title={'Verify mobile'}
              onPress={() => {

              }}
            />

            {/* <MessageTile toggle={false} togglemsg='Facebook profile verified'
              header='Connect your facebook profile (20%)' des='We will never post anything on your facebook profile'
              title='Connect now' onPress={{}} /> */}

            <MessageTile
              toggle={profile.emailVerified ? true : false}
              togglemsg="Email id verified"
              header="Verify your email (20%)"
              des="We will never share your email with other users."
              title="Verify email"
              onPress={async () => {

              }}
            />
            <MessageTile
              toggle={profile.photoID ? true : false}
              togglemsg={profile.photoIDApproved ? "Photo Id verified" : "Photo Id under verification."}
              header="Verify your photo id (20%)"
              des="Upload a copy of your driving licence , passport or any other photo id that has your photo ,date of birth and name mentioned on it."
              title="Upload"
              onPress={{}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TrustScore;
