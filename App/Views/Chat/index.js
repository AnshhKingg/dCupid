import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {LinearButton, LinearGradient} from '../../Components';
import Icon from 'react-native-vector-icons/AntDesign';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIon from 'react-native-vector-icons/Ionicons';

const UserMsg = ({toggle}) => {
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
            Name sdff sdf sdfsdfsdf sdfsdfsd sdsdfsdfsfsd f sfsd ssdfsdfsdfs sdf
            sdfsdfsdf sdfsdf sdfsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfsdfsdfsdfsdf
          </Text>
          <IconAwesome
            style={[Theme.maxWidth20, Theme.paddingLeft]}
            name={'user-circle'}
            size={25}
            color="white"
          />
        </View>
        <View>
          <Text style={[Theme.textCaption]}>5:00 am</Text>
        </View>
      </View>
    </View>
  );
};

const Chat = ({navigation}) => {
  const bottom = useRef(null);
  useEffect(() => {
    bottom.current.scrollToEnd({animated: true});
  }, []);

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
                Name
              </Text>
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
          ]}>
          <View style={[Theme.width100p, Theme.padding5]}>
            <UserMsg />

            <UserMsg toggle={true} />

            <UserMsg />

            <UserMsg />

            <View
              style={[
                Theme.width100p,
                Theme.alignCenter,
                Theme.marginBottom10,
              ]}>
              <Text style={[Theme.textCaption]}>
                Name has not accepted your friend request.
              </Text>
            </View>
            <View
              style={[
                Theme.width70p,
                Theme.selfAlignCenter,
                Theme.marginBottom10,
              ]}>
              <LinearButton title="Decline" />
            </View>
          </View>
        </ScrollView>

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
              />
            </View>
            <TouchableOpacity
              style={[Theme.width20p, Theme.alignContentCenter]}>
              <LinearGradient
                style={[Theme.alignContentCenter, Theme.largeButtonLook]}>
                <IconIon name={'send-sharp'} size={40} color="white" />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Chat;