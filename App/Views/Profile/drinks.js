import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';

const Drinks = ({navigation}) => {
  const dis = useDispatch();
  // const auth = useSelector(state => state.auth);
  const profile = useSelector(state => state.profile.user);
  const selecterData = useSelector(state => state.masterData.data);
  const [drinkOpen, setDrinkOpen] = useState(false);
  const [drink, setDrink] = useState(profile.drink);
  const [drinkItems, setDrinkItems] = useState(selecterData.drink);

  const [smokeOpen, setSmokeOpen] = useState(false);
  const [smoke, setSmoke] = useState(profile.smoke);
  const [smokeItems, setSmokeItems] = useState(selecterData.smoke);

  const [dietOpen, setDietOpen] = useState(false);
  const [diet, setDiet] = useState(profile.diet ? profile.diet : '');
  const [dietItems, setDietItems] = useState(selecterData.diet);

  const drinkOpens = useCallback(() => {
    setDietOpen(false);
    setSmokeOpen(false);
  }, []);

  const smokeOpens = useCallback(() => {
    setDrinkOpen(false);
    setDietOpen(false);
  }, []);

  const dietOpens = useCallback(() => {
    setDrinkOpen(false);
    setSmokeOpen(false);
  }, []);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        {/* <ScrollView style={[Theme.flexGrow]}> */}
        <View style={[Theme.flex1, Theme.width100p]}>
          <View style={[Theme.selectedItems, Theme.padding10]}>
            <PickerInput
              title="Drink"
              items={drinkItems}
              value={drink}
              setValue={data => {
                setDrink(data());
              }}
              setItems={setDrinkItems}
              open={drinkOpen}
              setOpen={setDrinkOpen}
              onOpen={drinkOpens}
              zIndex={11}
              zIndexTitle={12}
            />
            <PickerInput
              title="Smoke"
              items={smokeItems}
              value={smoke}
              setValue={data => {
                setSmoke(data());
              }}
              setItems={setSmokeItems}
              open={smokeOpen}
              setOpen={setSmokeOpen}
              onOpen={smokeOpens}
              zIndex={9}
              zIndexTitle={10}
            />
            <PickerInput
              title="Diet"
              items={dietItems}
              value={diet}
              setValue={data => {
                setDiet(data());
              }}
              setItems={setDietItems}
              open={dietOpen}
              setOpen={setDietOpen}
              onOpen={dietOpens}
              zIndex={7}
              zIndexTitle={8}
            />
            <View
              style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
              <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                <LinearButton
                  title="Save"
                  onPress={() => {
                    dis(
                      updateProfile({drink: drink, smoke: smoke, diet: diet}),
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
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

export default Drinks;
