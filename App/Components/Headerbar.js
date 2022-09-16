import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMenu from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from './LinearGradient';

const HeaderBar = ({title, left, right, leftnav, rightnav}) => {
  return (
    <>
      <LinearGradient>
        <View
          style={[
            Theme.width100p,
            Theme.padding10,
            Theme.row,
            Theme.justifySpcBtw,
          ]}>
          <View style={[Theme.width60p, Theme.row, Theme.alignCenter]}>
            {left === 'menuunfold' && (
              <IconMenu name="menu" size={30} color="white" onPress={leftnav} />
            )}
            {left === 'arrowleft' && (
              <Icon name={left} size={30} color="white" onPress={leftnav} />
            )}

            <Text
              style={[Theme.textTitle, Theme.white, Theme.paddingHorizonal10p]}>
              {title}
            </Text>
          </View>
          <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
            {right === 'home' ? (
              <Entypo name="home" color="white" size={30} onPress={rightnav} />
            ) : (
              <Icon name={right} size={30} color="white" onPress={rightnav} />
            )}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderBar;
