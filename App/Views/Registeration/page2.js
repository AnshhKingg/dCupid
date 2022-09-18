import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  DropDownButton,
  LinearGradient,
  Loading,
} from '../../Components';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import axiosService from '../../service/axios';
import {setProfile} from '../../Redux/actions/profile';
import {logout} from '../../Redux/actions/auth';
import fireAuth from '@react-native-firebase/auth';

const ProfessionModal = ({state, onPress, onPressCancel, array}) => {
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[
          Theme.flex1,
          Theme.alignContentCenter,
          Theme.blackFaded,
          Theme.padding10,
          Theme.paddingHorizonal30p,
        ]}
        onPress={onPressCancel}>
        <ScrollView contentContainerStyle={[Theme.flexGrow]}>
          <TouchableWithoutFeedback>
            <View style={[Theme.flex1, Theme.width100p, Theme.backgroundWhite]}>
              <View style={[Theme.width100p, Theme.row]}>
                <LinearGradient style={[Theme.width100p]}>
                  <Text
                    style={[
                      Theme.textTitle,
                      Theme.textBold,
                      Theme.white,
                      Theme.padding10,
                    ]}>
                    Profession
                  </Text>
                </LinearGradient>
              </View>
              <View style={[Theme.width100p, Theme.padding10]}>
                {Object.keys(array).map((data, index) => {
                  return (
                    <View key={index}>
                      <Text
                        style={[
                          Theme.textBody,
                          Theme.purple,
                          Theme.paddingBottom10,
                        ]}>
                        {data}
                      </Text>
                      {array[data].map(profession => {
                        return (
                          <View
                            key={profession}
                            style={[
                              Theme.width100p,
                              Theme.row,
                              Theme.alignCenter,
                              Theme.paddingBottom10,
                            ]}>
                            <TouchableOpacity
                              style={[
                                Theme.width100p,
                                Theme.row,
                                Theme.alignCenter,
                                Theme.paddingHorizonal10p,
                                Theme.borderBox,
                              ]}
                              onPress={() => onPress(profession)}>
                              <Text
                                style={[Theme.textCaption, Theme.padding10]}>
                                {profession}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </TouchableOpacity>
    </Modal>
  );
};

const Register2 = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const selecterData = useSelector(state => state.masterData.data);
  const dis = useDispatch();

  const [country, setCountry] = useState('');
  const [countryItems, setCountryItems] = useState([]);
  const [countryError, setCountryError] = useState(null);
  const [countryOpen, setCountryOpen] = useState(false);

  const [state, setState] = useState('');
  const [stateItems, setStateItems] = useState([]);
  const [stateError, setStateError] = useState(null);
  const [stateOpen, setStateOpen] = useState(false);

  const [city, setCity] = useState('');
  const [cityItems, setCityItems] = useState([]);
  const [cityError, setCityError] = useState(null);
  const [cityOpen, setCityOpen] = useState(false);

  const [loading, setLoading] = useState(false);

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

  const getState = data => {
    axiosService(auth.token)
      .get(`/location/state/${data}`)
      .then(resp => {
        setStateItems(resp.data.data);
      })
      .catch(er => {
        console.log('State failed');
        console.log(er.response.data);
      });
  };

  const getCity = data => {
    axiosService(auth.token)
      .get(`/location/city/${data}`)
      .then(resp => {
        setCityItems(resp.data.data);
      })
      .catch(er => {
        console.log('City failed');
        console.log(er.response.data);
      });
  };

  const [professionModal, setProfessionModal] = useState(false);
  const [profession, setProfession] = useState('');
  const [professionError, setProfessionError] = useState(null);

  const [highEduOpen, setHighEduOpen] = useState(false);
  const [highEdu, setHighEdu] = useState('');
  const [highEduItems, setHighEduItems] = useState(
    selecterData.highestEducation,
  );
  const [highEduError, setHighEduError] = useState(null);

  const [eduOpen, setEduOpen] = useState(false);
  const [edu, setEdu] = useState('');
  const [eduItems, setEduItems] = useState(selecterData.education);
  const [eduError, setEduError] = useState(null);

  const [drinkOpen, setDrinkOpen] = useState(false);
  const [drink, setDrink] = useState('');
  const [drinkItems, setDrinkItems] = useState(selecterData.drink);
  const [drinkError, setDrinkError] = useState(null);

  const [smokeOpen, setSmokeOpen] = useState(false);
  const [smoke, setSmoke] = useState('');
  const [smokeItems, setSmokeItems] = useState(selecterData.smoke);
  const [smokeError, setSmokeError] = useState(null);

  const [maritalOpen, setMaritalOpen] = useState(false);
  const [marital, setMarital] = useState('');
  const [maritalItems, setMaritalItems] = useState(selecterData.maritalStatus);
  const [maritalError, setMaritalError] = useState(null);

  const [religionOpen, setReligionOpen] = useState(false);
  const [religion, setReligion] = useState('');
  const [religionItems, setReligionItems] = useState(selecterData.religion);
  const [religionError, setReligionError] = useState(null);

  const countryOpens = useCallback(() => {
    setStateOpen(false);
    setCityOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const stateOpens = useCallback(() => {
    setCountryOpen(false);
    setCityOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const cityOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const highEduOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const eduOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setHighEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const drinkOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setHighEduOpen(false);
    setEduOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const smokeOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const maritalOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setReligionOpen(false);
  }, []);

  const religionOpens = useCallback(() => {
    setCountryOpen(false);
    setStateOpen(false);
    setCityOpen(false);
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
  }, []);

  const sumbitForm = () => {
    if (country.length === 0) {
      setCountryError('Country is required');
    }

    if (state.length === 0) {
      setStateError('State is required');
    }

    if (city.length === 0) {
      setCityError('City is required');
    }

    if (highEdu.length === 0) {
      setHighEduError('High Education field is required');
    }

    if (edu.length === 0) {
      setEduError('Education is required');
    }

    if (profession.length === 0) {
      setProfessionError('Profession is required');
    }

    if (drink.length === 0) {
      setDrinkError('Drink field is required');
    }

    if (smoke.length === 0) {
      setSmokeError('Smoke field is required');
    }

    if (marital.length === 0) {
      setMaritalError('Marital status is required');
    }

    if (religion.length === 0) {
      setReligionError('Religion is required');
    }

    if (
      !highEduError &&
      highEdu.length !== 0 &&
      !eduError &&
      edu.length !== 0 &&
      !professionError &&
      profession.length !== 0 &&
      !drinkError &&
      drink.length !== 0 &&
      !smokeError &&
      smoke.length !== 0 &&
      !maritalError &&
      marital.length !== 0 &&
      !religionError &&
      religion.length !== 0
    ) {
      setLoading(true);
      axiosService(auth.token)
        .post('/register/second', {
          country: country,
          state: state,
          city: city,
          education: edu,
          highesteducation: highEdu,
          profession: profession,
          drink: drink,
          smoke: smoke,
          marital: marital,
          religion: religion,
        })
        .then(resp => {
          setLoading(false);
          dis(setProfile(resp.data.user));
          console.log(resp.data.user);
          navigation.navigate('dashboard');
        })
        .catch(er => {
          setLoading(false);
          console.log(er.response.data);
          console.log('Er ran');
          Alert.alert('Something went wrong');
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please check all the fields',
      });
    }
  };

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Loading visible={loading} />
        <Header
          title="Registration"
          left="arrowleft"
          leftnav={async () => {
            await fireAuth().signOut();
            dis(logout());
          }}
        />
        <ProfessionModal
          array={selecterData.profession}
          state={professionModal}
          onPressCancel={() => setProfessionModal(!professionModal)}
          onPress={data => {
            setProfession(data);
            setProfessionModal(false);
            setProfessionError(false);
          }}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p, Theme.paddingHorizonal20p]}>
            <Text
              style={[
                Theme.textBody,
                Theme.paddingVertical10p,
                Theme.marginTop10,
              ]}>
              Let's build your profile
            </Text>
          </View>
          <View style={Theme.width100p}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <View
                style={[
                  Theme.row,
                  Theme.paddingVertical20p,
                  Theme.alignContentCenter,
                ]}>
                <View
                  style={[
                    Theme.width40p,
                    Theme.height3p,
                    Theme.backgroundPurple,
                  ]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundPurple,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={[Theme.padding2, Theme.white]}>1</Text>
                </View>
                <View
                  style={[
                    Theme.width6p,
                    Theme.backgroundPurple,
                    Theme.height3p,
                  ]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundPurple,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={[Theme.padding2, Theme.white]}>2</Text>
                </View>
                <View
                  style={[
                    Theme.width40p,
                    Theme.backgroundPurple,
                    Theme.height3p,
                  ]}
                />
              </View>

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

              <PickerInput
                title="Highest Education"
                items={highEduItems}
                zIndex={15}
                zIndexTitle={16}
                value={highEdu}
                setValue={data => {
                  setHighEdu(data());
                  setHighEduError(null);
                }}
                setItems={setHighEduItems}
                open={highEduOpen}
                setOpen={setHighEduOpen}
                onOpen={highEduOpens}
                error={highEduError}
              />
              <PickerInput
                title="Educational Field"
                items={eduItems}
                value={edu}
                setValue={data => {
                  setEdu(data());
                  setEduError(null);
                }}
                setItems={setEduItems}
                open={eduOpen}
                setOpen={setEduOpen}
                onOpen={eduOpens}
                zIndex={13}
                zIndexTitle={14}
                error={eduError}
              />

              <DropDownButton
                title="Profession"
                text={profession}
                onPress={() => setProfessionModal(!professionModal)}
                error={professionError}
              />

              <PickerInput
                title="Drink"
                items={drinkItems}
                value={drink}
                setValue={data => {
                  setDrink(data());
                  setDrinkError(null);
                }}
                setItems={setDrinkItems}
                open={drinkOpen}
                setOpen={setDrinkOpen}
                onOpen={drinkOpens}
                zIndex={11}
                zIndexTitle={12}
                error={drinkError}
              />
              <PickerInput
                title="Smoke"
                items={smokeItems}
                value={smoke}
                setValue={data => {
                  setSmoke(data());
                  setSmokeError(null);
                }}
                setItems={setSmokeItems}
                open={smokeOpen}
                setOpen={setSmokeOpen}
                onOpen={smokeOpens}
                zIndex={9}
                zIndexTitle={10}
                error={smokeError}
              />
              <PickerInput
                title="Maritial Status"
                items={maritalItems}
                value={marital}
                setValue={data => {
                  setMarital(data());
                  setMaritalError(null);
                }}
                setItems={setMaritalItems}
                open={maritalOpen}
                setOpen={setMaritalOpen}
                onOpen={maritalOpens}
                zIndex={7}
                zIndexTitle={8}
                error={maritalError}
              />
              <PickerInput
                title="Religion"
                items={religionItems}
                value={religion}
                setValue={data => {
                  setReligion(data());
                  setReligionError(null);
                }}
                setItems={setReligionItems}
                open={religionOpen}
                setOpen={setReligionOpen}
                onOpen={religionOpens}
                dropDownDirection="TOP"
                zIndex={5}
                zIndexTitle={6}
                error={religionError}
              />

              <View style={[Theme.width100p, Theme.alignContentCenter]}>
                <View style={Theme.width60p}>
                  <LinearButton title="Continue" onPress={sumbitForm} />
                </View>
                <Text style={[Theme.textCaption]}>
                  By clicking continue , you agree to our
                </Text>
                <Text style={[Theme.textCaption]}>
                  <Text style={[Theme.textCaption, Theme.blue]}>
                    Terms and conditions
                  </Text>{' '}
                  {'&'}{' '}
                  <Text style={[Theme.textCaption, Theme.blue]}>
                    Privacy policy
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Register2;
