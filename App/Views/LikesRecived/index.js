import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton, ProfileComp} from '../../Components';

const LikesReceived = ({navigation}) => {
  const data = useSelector(state => state.likesReceived.data);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="menuunfold"
          right="home"
          title="Likes"
          leftnav={() => navigation.openDrawer()}
          rightnav={() => navigation.navigate('dashboard')}
        />
        <View style={[Theme.width100p]}>
          <View
            style={[
              Theme.width100p,
              Theme.paddingHorizonal10p,
              Theme.separator,
            ]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width40p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="Regular"
                  noGradient={toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(false)}
                />
              </View>
              <View style={[Theme.width60p, Theme.padding5, Theme.flexStart]}>
                <LinearButton
                  title="Filtered Out"
                  noGradient={!toggle ? true : false}
                  color="lightgrey"
                  onPress={() => setToggle(true)}
                />
              </View>
            </View>
          </View>
        </View>
        <ScrollView contentContainerStyle={[Theme.flexGrow, Theme.padding10]}>
          {!toggle &&
            data.regular.map((data, index) => {
              return (
                <ProfileComp
                  key={index}
                  data={data.user}
                  time={data.requestedTime}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data._id,
                      name: data.name,
                    })
                  }
                  onPressProfile={() =>
                    navigation.navigate('otherprofile', {data: data})
                  }
                />
              );
            })}
          {toggle &&
            data.filterOut.map((data, index) => {
              return (
                <ProfileComp
                  key={index}
                  data={data}
                  time={data.requestedTime}
                  onPress={() =>
                    navigation.navigate('chat', {
                      receiverId: data._id,
                      name: data.name,
                    })
                  }
                  onPressProfile={() =>
                    navigation.navigate('otherprofile', {data: data})
                  }
                />
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LikesReceived;
