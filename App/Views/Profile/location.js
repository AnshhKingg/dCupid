import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  LinearButton,
  MultiSelect,
  DropDownButton,
} from '../../Components';
import axiosService from '../../service/axios';

const Location = ({navigation}) => {
  const dis = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile.user);
  const [country, setCountry] = useState(profile.partnerpref.country);
  const [countryItems, setCountryItems] = useState([]);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    axiosService(auth.token)
      .get('/location/country')
      .then(resp => {
        setCountryItems(resp.data.data);
      })
      .catch(er => {
        console.log(er.response.data);
      });
  }, [auth.token]);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Location"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <MultiSelect
          state={countryOpen}
          array={countryItems}
          selectedItems={profile.partnerpref.country}
          onPressCancel={() => setCountryOpen(!countryOpen)}
          onPress={data => {
            setCountry(data);
            setCountryOpen(false);
          }}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <DropDownButton
                title="Location"
                text={country.toString()}
                onPress={() => setCountryOpen(!countryOpen)}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Save"
                    onPress={() => {
                      dis(
                        updateProfile({
                          partnerpref: {
                            ...profile.partnerpref,
                            country: country,
                          },
                        }),
                      );
                      navigation.goBack();
                    }}
                  />
                </View>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    noGradient={true}
                    title="Cancel"
                    onPress={() => {
                      navigation.goBack();
                    }}
                    color="lightgrey"
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Location;
