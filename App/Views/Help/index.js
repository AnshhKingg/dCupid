import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, TextInput} from '../../Components';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Assets/Colors';

const Help = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header title="Help" left="menufold" />
        <ScrollView style={[]}>
          <View style={Theme.width100p}>
            <TouchableOpacity
              style={[Theme.width100p, Theme.padding10, Theme.flexEnd]}
              onPress={() => {
                navigation.navigate('faq');
              }}>
              <Text style={[Theme.textTitle, Theme.blue]}>
                FAQS <Icon name="angle-right" size={20} color="black" />
              </Text>
            </TouchableOpacity>
            <View style={Theme.separator} />
            <View style={[Theme.alignContentCenter, Theme.width100p]}>
              <Text style={[Theme.textBody, Theme.padding5]}>
                Choose any of the below ways to contact us.
              </Text>
            </View>

            <View
              style={[
                Theme.totalView,
                Theme.alignContentCenter,
                Theme.padding5,
              ]}>
              <TouchableOpacity
                style={Theme.padding5}
                onPress={() =>
                  Linking.openURL('mailto:support@dermacupid.com')
                }>
                <Text style={[Theme.textBody, Theme.blue]}>
                  support@dermacupid.com
                </Text>
              </TouchableOpacity>
              <View style={[Theme.width100p, Theme.separator]} />
              <Text style={[Theme.textCaption, Theme.padding5]}>
                (We respond within 1 working day.)
              </Text>
            </View>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <TextInput title="Email*" />
              <TextInput title="Confirm Email*" />
              <TextInput title="Subject*" />
              <TextInput title="Description*" />
              <View>
                <TextInput title="Attach image*" editable={false} />
                <LinearGradient
                  style={[
                    Theme.alignContentCenter,
                    Theme.buttonLook,
                    Theme.textInputButton,
                  ]}
                  colors={[colors.purplelight, colors.purpledark]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('help');
                    }}>
                    <Text style={[Theme.textBody, Theme.white]}>Browse</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={Theme.width50p}>
                  <TouchableOpacity
                    style={[
                      Theme.alignContentCenter,
                      Theme.buttonLook,
                      Theme.backgroundGray,
                    ]}
                    onPress={() => {
                      navigation.navigate('help');
                    }}>
                    <Text style={[Theme.textBody, Theme.textBlack]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={Theme.width50p}>
                  <LinearGradient
                    style={[Theme.alignContentCenter, Theme.buttonLook]}
                    colors={[colors.purplelight, colors.purpledark]}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('help');
                      }}>
                      <Text style={[Theme.textBody, Theme.white]}>Submit</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Help;
