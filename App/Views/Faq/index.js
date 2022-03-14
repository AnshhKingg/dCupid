import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';

const Faqs = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <ScrollView contentContainerStyle={[Theme.alignContentCenter]}>
          <View style={[Theme.width100p, Theme.spacingViewHorizontal]}>
            <View
              style={[
                Theme.width100p,
                Theme.paddingVertical10p,
                Theme.flexStart,
              ]}>
              <Text
                style={[
                  Theme.textTitle,
                  Theme.textBold,
                  Theme.paddingVertical5p,
                  Theme.red,
                ]}>
                General queries
              </Text>
            </View>

            <Text style={[Theme.textBody, Theme.textBold]}>
              Q : Why is why?
            </Text>
            <Text style={[Theme.textBody]}>Q : Why is why?</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Faqs;
