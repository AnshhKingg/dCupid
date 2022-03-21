import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../Assets/Styles';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../Assets/Colors';

const HeaderBar = ({title, left, right}) => {
  return (
    <>
      <LinearGradient colors={[colors.purplelight, colors.purpledark]}>
        <View
          style={[
            Theme.width100p,
            Theme.padding10,
            Theme.row,
            Theme.justifySpcBtw,
          ]}>
          <View style={[Theme.width60p, Theme.row, Theme.alignCenter]}>
            {left ? (
              <Icon
                name={left}
                size={30}
                color="white"
                onPress={() => {
                  console.log('yoo');
                }}
              />
            ) : null}

            <Text
              style={[
                Theme.textHeader,
                Theme.white,
                Theme.paddingHorizonal10p,
              ]}>
              {title}
            </Text>
          </View>
          <View style={[Theme.width40p, Theme.flexEnd, Theme.justifyCenter]}>
            {right ? <Icon name={right} size={30} color="white" /> : null}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderBar;
