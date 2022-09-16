import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  DropDownButton,
  MultiSelect,
} from '../../Components';
import {useSelector} from 'react-redux';
import axiosService from '../../service/axios';

const SearchMenu = ({navigation}) => {
  const auth = useSelector(state => state.auth);
  const [country, setCountry] = useState([]);
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

  const selecterData = useSelector(state => state.masterData.data);

  const [skinCondition, SetSkinCondition] = useState(false);
  const [maritalStatus, setMartitalStatus] = useState(false);

  const [skin, setSkin] = useState([]);
  const [marital, setMartital] = useState([]);

  const age1 = [...Array(71).keys()].splice(parseInt(18, 10)).map(data => {
    return {value: data, label: data};
  });
  const age2 = [...Array(71).keys()].splice(parseInt(22, 10)).map(data => {
    return {value: data, label: data};
  });

  const [ageFromOpen, setAgeFromOpen] = useState(false);
  const [ageFrom, setAgeFrom] = useState(parseInt(18, 10));
  const [ageFromItems, setAgeFromItems] = useState(age1);

  const [ageToOpen, setAgeToOpen] = useState(false);
  const [ageTo, setAgeTo] = useState(parseInt(70, 10));
  const [ageToItems, setAgeToItems] = useState(age2);

  const onAgeToOpen = useCallback(() => {
    setAgeFromOpen(false);
  }, []);

  const onAgeFromOpen = useCallback(() => {
    setAgeToOpen(false);
  }, []);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Search"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <MultiSelect
          title="Skin Condition"
          state={skinCondition}
          array={selecterData.skin}
          selectedItems={[]}
          onPressCancel={() => SetSkinCondition(!skinCondition)}
          onPress={data => {
            setSkin(data);
            SetSkinCondition(false);
          }}
        />
        <MultiSelect
          title="Marital Status"
          state={maritalStatus}
          array={selecterData.maritalStatus}
          selectedItems={[]}
          onPressCancel={() => setMartitalStatus(!maritalStatus)}
          onPress={data => {
            setMartital(data);
            setMartitalStatus(false);
          }}
        />
        <MultiSelect
          title="Location"
          state={countryOpen}
          array={countryItems}
          selectedItems={[]}
          onPressCancel={() => setCountryOpen(!countryOpen)}
          onPress={data => {
            setCountry(data);
            setCountryOpen(false);
          }}
        />
        <View style={[Theme.width100p]}>
          <View style={[Theme.selectedItems, Theme.padding10]}>
            <View style={[Theme.width100p, Theme.row]}>
              <View style={[Theme.width40p]}>
                <PickerInput
                  title="Age"
                  zIndex={15}
                  zIndexTitle={16}
                  open={ageFromOpen}
                  setOpen={setAgeFromOpen}
                  value={ageFrom}
                  setValue={data => {
                    setAgeFrom(data());
                    if (data() + 4 > ageTo) {
                      setAgeTo(() => {
                        return data() + 4 > 70
                          ? 70
                          : data() > ageTo
                          ? data() + 4
                          : data() + 4;
                      });
                    }
                    setAgeToItems(() => {
                      const newageArray = [...Array(71).keys()]
                        .splice(
                          data() + 4 > 70
                            ? 70
                            : data() > ageTo
                            ? data() + 4
                            : data() + 4,
                        )
                        .map(val => {
                          return {value: val, label: val};
                        });
                      return newageArray;
                    });
                  }}
                  items={ageFromItems}
                  setItems={setAgeFromItems}
                  onOpen={onAgeFromOpen}
                />
              </View>
              <View style={[Theme.width20p, Theme.alignContentCenter]}>
                <Text>To</Text>
              </View>
              <View style={[Theme.width40p]}>
                <PickerInput
                  title="Age"
                  zIndex={15}
                  zIndexTitle={16}
                  open={ageToOpen}
                  setOpen={setAgeToOpen}
                  value={ageTo}
                  setValue={data => {
                    setAgeTo(data());
                  }}
                  items={ageToItems}
                  setItems={setAgeToItems}
                  onOpen={onAgeToOpen}
                />
              </View>
            </View>
            <DropDownButton
              title="Skin Condition"
              onPress={() => SetSkinCondition(!skinCondition)}
              text={
                skin.length === 0
                  ? "Doesn't matter"
                  : skin.toString().replace(/,/g, ' , ')
              }
            />
            <DropDownButton
              title="Maritial Status"
              onPress={() => setMartitalStatus(!maritalStatus)}
              text={
                marital.length === 0
                  ? "Doesn't matter"
                  : marital.toString().replace(/,/g, ' , ')
              }
            />
            <DropDownButton
              title="Location"
              text={
                country.length === 0
                  ? "Doesn't matter"
                  : country.toString().replace(/,/g, ' , ')
              }
              onPress={() => setCountryOpen(!countryOpen)}
            />
            <View
              style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
              <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                <LinearButton
                  title="Search"
                  onPress={() => {
                    navigation.navigate('matchingprofile', {
                      ageTo: ageTo,
                      ageFrom: ageFrom,
                      country: country,
                      marital: marital,
                      skin: skin,
                    });
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

export default SearchMenu;
