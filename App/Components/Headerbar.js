import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const HeaderBar = ({title}) => {
  return (
    <>
      <LinearGradient colors={['#ce306b', '#951151']}>
        <View
          style={[
            Theme.width100p,
            Theme.mainHeadingView,
            Theme.row,
            Theme.justifySpcBtw,
          ]}>
          <View style={[Theme.width60p, Theme.row, Theme.alignCenter]}>
            <Icon
              name="align-left"
              size={30}
              color="white"
              onPress={() => {
                console.log('yoo');
              }}
            />
            <Text style={[Theme.mainHeading, Theme.paddingHorizonal10p]}>
              {title}
            </Text>
          </View>
          <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
            <Icon name="home" size={30} color="white" />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderBar;
