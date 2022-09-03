import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton} from '../../Components';
import axiosService from '../../service/axios';

const Country = ({navigation}) => {
  const dis = useDispatch();
  const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile.user);
  const [country, setCountry] = useState(profile.country);
  const [countryItems, setCountryItems] = useState([]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countryError, setCountryError] = useState(null);

  const [state, setState] = useState(profile.state);
  const [stateItems, setStateItems] = useState([]);
  const [stateOpen, setStateOpen] = useState(false);
  const [stateError, setStateError] = useState(null);

  const [city, setCity] = useState(profile.city);
  const [cityItems, setCityItems] = useState([]);
  const [cityOpen, setCityOpen] = useState(false);
  const [cityError, setCityError] = useState(null);

  useEffect(() => {
    // useCallback(() => {

    // }, [])
    axiosService(auth.token)
      .get('/location/country')
      .then(resp => {
        setCountryItems(resp.data.data);
        getState(profile.country);
        getCity(profile.state);
      })
      .catch(er => {
        console.log(er.response.data);
      });
  }, [auth.token, getCity, getState, profile, profile.country]);

  const getState = useCallback(
    data => {
      axiosService(auth.token)
        .get(`/location/state/${data}`)
        .then(resp => {
          setStateItems(resp.data.data);
        })
        .catch(er => {
          console.log('State failed');
          console.log(er.response.data);
        });
    },
    [auth.token],
  );

  const getCity = useCallback(
    data => {
      {
        axiosService(auth.token)
          .get(`/location/city/${data}`)
          .then(resp => {
            setCityItems(resp.data.data);
          })
          .catch(er => {
            console.log('City failed');
            console.log(er.response.data);
          });
      }
    },
    [auth.token],
  );

  const countryOpens = useCallback(() => {
    setStateOpen(false);
    setCityOpen(false);
  }, []);

  const stateOpens = useCallback(() => {
    setCountryOpen(false);
    setCityOpen(false);
  }, []);

  const cityOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
  }, []);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <View style={[Theme.width100p]}>
          <View style={[Theme.selectedItems, Theme.padding10]}>
            <PickerInput
              title="Country"
              zIndex={21}
              zIndexTitle={22}
              items={countryItems}
              value={country}
              setValue={data => {
                getState(data());
                setCountry(data());
                setCountryError(null);
                setState('');
                setCity('');
              }}
              setItems={setCountryItems}
              open={countryOpen}
              setOpen={setCountryOpen}
              onOpen={countryOpens}
              error={countryError}
            />
            <PickerInput
              title="State/Province"
              zIndex={19}
              zIndexTitle={20}
              items={stateItems}
              value={state}
              setValue={data => {
                getCity(data());
                setState(data());
                setStateError(null);
                setCity('');
              }}
              setItems={setStateItems}
              open={stateOpen}
              setOpen={setStateOpen}
              onOpen={stateOpens}
              error={stateError}
              disabled={country === ''}
            />
            <PickerInput
              title="City"
              zIndex={17}
              zIndexTitle={18}
              items={cityItems}
              value={city}
              setValue={data => {
                setCity(data());
                setCityError(null);
              }}
              setItems={setCityItems}
              open={cityOpen}
              setOpen={setCityOpen}
              onOpen={cityOpens}
              error={cityError}
              disabled={state === ''}
            />
            <View
              style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
              <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                <LinearButton
                  title="Save"
                  onPress={() => {
                    if (country.length === 0) {
                      setCountryError('Country is required');
                    }

                    if (state.length === 0) {
                      setStateError('State is required');
                    }

                    if (city.length === 0) {
                      setCityError('City is required');
                    }
                    if (
                      !countryError &&
                      country.length !== 0 &&
                      !stateError &&
                      state.length !== 0 &&
                      !cityError &&
                      city.length !== 0
                    ) {
                      dis(
                        updateProfile({
                          country: country,
                          city: city,
                          state: state,
                        }),
                      );
                      navigation.goBack();
                    }
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
      </SafeAreaView>
    </>
  );
};

export default Country;
