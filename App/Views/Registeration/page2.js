import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  DropDownButton,
  LinearGradient,
} from '../../Components';
import {RegisterData} from '../../../data';

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
  const [professionModal, setProfessionModal] = useState(false);
  const [profession, setProfession] = useState('');
  const [professionError, setProfessionError] = useState(null);

  const [highEduOpen, setHighEduOpen] = useState(false);
  const [highEdu, setHighEdu] = useState('');
  const [highEduItems, setHighEduItems] = useState(
    RegisterData.higestEducation,
  );
  const [highEduError, setHighEduError] = useState(null);

  const [eduOpen, setEduOpen] = useState(false);
  const [edu, setEdu] = useState('');
  const [eduItems, setEduItems] = useState(RegisterData.educationField);
  const [eduError, setEduError] = useState(null);

  const [drinkOpen, setDrinkOpen] = useState(false);
  const [drink, setDrink] = useState('');
  const [drinkItems, setDrinkItems] = useState(RegisterData.drink);
  const [drinkError, setDrinkError] = useState(null);

  const [smokeOpen, setSmokeOpen] = useState(false);
  const [smoke, setSmoke] = useState('');
  const [smokeItems, setSmokeItems] = useState(RegisterData.smoke);
  const [smokeError, setSmokeError] = useState(null);

  const [maritalOpen, setMaritalOpen] = useState(false);
  const [marital, setMarital] = useState('');
  const [maritalItems, setMaritalItems] = useState(RegisterData.marital);
  const [maritalError, setMaritalError] = useState(null);

  const [religionOpen, setReligionOpen] = useState(false);
  const [religion, setReligion] = useState('');
  const [religionItems, setReligionItems] = useState(RegisterData.religion);
  const [religionError, setReligionError] = useState(null);

  const highEduOpens = useCallback(() => {
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const eduOpens = useCallback(() => {
    setHighEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const drinkOpens = useCallback(() => {
    setHighEduOpen(false);
    setEduOpen(false);
    // setDrinkOpen(false)
    setSmokeOpen(false);
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const smokeOpens = useCallback(() => {
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    // setSmokeOpen(false)
    setMaritalOpen(false);
    setReligionOpen(false);
  }, []);

  const maritalOpens = useCallback(() => {
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    // setMaritalOpen(false)
    setReligionOpen(false);
  }, []);

  const religionOpens = useCallback(() => {
    setHighEduOpen(false);
    setEduOpen(false);
    setDrinkOpen(false);
    setSmokeOpen(false);
    setMaritalOpen(false);
    // setReligionOpen(false)
  }, []);

  const sumbitForm = () => {
    console.log(highEdu.length);

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
      navigation.navigate('dashboard');
    }
  };

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Registration"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ProfessionModal
          array={RegisterData.profession}
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
              {/*
              <PickerInput
                title="Country"
                zIndex={21}
                zIndexTitle={22}
              />
              <PickerInput
                title="State/Province"
                zIndex={19}
                zIndexTitle={20}
              />
              <PickerInput
                title="City"
                zIndex={17}
                zIndexTitle={18}
              /> */}

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
