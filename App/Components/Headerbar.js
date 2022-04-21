import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/AntDesign';
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
            {left ? (
              <Icon name={left} size={30} color="white" onPress={leftnav} />
            ) : null}

            <Text
              style={[Theme.textTitle, Theme.white, Theme.paddingHorizonal10p]}>
              {title}
            </Text>
          </View>
          <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
            {right ? (
              <Icon name={right} size={30} color="white" onPress={rightnav} />
            ) : null}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderBar;
