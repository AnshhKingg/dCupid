import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, ActivityIndicator, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Theme } from '../../Assets/Styles';
import { Header, ProfileComp } from '../../Components';
import axios from '../../service/axios';

const MatchingProfile = ({ navigation, route }) => {
  const token = useSelector(state => state.auth.token)
  const profile = useSelector(state => state.profile.user);
  const page = useRef(0)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const endReached = useRef(false)
  useEffect(() => {
    userApi()
    return () => {
      setData([])
    }
  }, [])

  const userApi = () => {
    setLoading(true)
    axios(token).post('/search', {
      ageTo: route.params ? route.params.ageTo : profile.partnerpref.ageTo,
      ageFrom: route.params ? route.params.ageFrom : profile.partnerpref.ageFrom,
      country: route.params ? route.params.country : profile.partnerpref.country,
      marital: route.params ? route.params.marital : profile.partnerpref.marital,
      skin: route.params ? route.params.skin : profile.partnerpref.skin,
      page: page.current
    }).then((resp) => {
      if (resp.data.data.length === 0) {
        endReached.current = true
      } else {
        setData([...data, ...resp.data.data]);
      }
      setLoading(false)
    }).catch(er => {
      setLoading(false)
    })
  }

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left="arrowleft"
          title="Member Profile"
          leftnav={() => {
            navigation.goBack();
          }}
        />
        <View style={[Theme.flex1]}>
          <FlatList
            contentContainerStyle={[Theme.width100p, Theme.flexGrow, Theme.padding10]}
            data={data}
            ListFooterComponent={() => {
              {
                return loading ?
                  <View style={[Theme.width100p, Theme.height50p, Theme.alignContentCenter]}>
                    <ActivityIndicator size='large' color='black' />
                  </View> :
                  null
              }
            }}
            showsVerticalScrollIndicator={true}
            onEndReached={() => {
              console.log(endReached.current);
              if (endReached.current) {
                ToastAndroid.show('No more users to load', ToastAndroid.SHORT)
              } else {
                page.current += 1
                userApi()
              }
            }}
            key={data => data._id}
            renderItem={(data) => {
              return <ProfileComp
                data={data.item}
                onPress={() => navigation.navigate('chat', { receiverId: data.item._id })}
                onPressProfile={() => navigation.navigate('otherprofile', { data: data.item })}
              />
            }}
          />

        </View>
      </SafeAreaView>
    </>
  );
};

export default MatchingProfile;
