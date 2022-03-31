import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton} from '../../Components';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const MessageTile = ({toggle, togglemsg, header, des, title, onPress}) => {
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

const TrustScore = ({navigation}) => {
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
                20%
              </Text>
            </View>
            <MessageTile
              toggle={false}
              togglemsg="Photograph verified"
              header="Add your recent photo (20%)"
              title={'Add Photo'}
              onPress={() => navigation.navigate('photo')}
            />

            <MessageTile
              toggle={true}
              togglemsg="Mobile verified"
              // header='Add your recent photo (20%)' title={'Add Photo'}
              // onPress={() => navigation.navigate('photo')}
            />

            {/* <MessageTile toggle={false} togglemsg='Facebook profile verified'
                            header='Connect your facebook profile (20%)' des='We will never post anything on your facebook profile'
                            title='Connect now' onPress={{}} /> */}

            <MessageTile
              toggle={false}
              togglemsg="Email id verified"
              header="Verify your email (20%)"
              des="We will never share your email with other users."
              title="Verify email"
              onPress={{}}
            />

            <MessageTile
              toggle={false}
              togglemsg="Photo id verified"
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
