import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import {
  DateTimeInput,
  Header,
  TextInput,
  PickerInput,
  LinearButton,
} from '../../Components';
import { RegisterData } from '../../../data';
import { logout } from '../../Redux/actions/auth';
import { useDispatch } from 'react-redux';

const Register = ({ navigation }) => {
  const dis = useDispatch();
  const [gender, setGender] = useState(0);
  const [dob, setDob] = useState(new Date());
  const [dobChange, setDobChange] = useState(false);

  const [skinOpen, setSkinOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [skin, setSkin] = useState('');
  const [privacy, setPrivacy] = useState('');
  const [skinItems, setSkinItems] = useState(RegisterData.skin);
  const [privacyItems, setPrivacyItems] = useState(RegisterData.privacy);

  const onSkinOpen = useCallback(() => {
    setPrivacyOpen(false);
  }, []);

  const onPrivacyOpen = useCallback(() => {
    setSkinOpen(false);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [skinError, setSkinError] = useState(null);
  const [privacyError, setPrivacyError] = useState(null);
  const [genderError, setGenderError] = useState(null);
  const [dobError, setDobError] = useState(null);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  );

  const handleChange = (field, obj) => {
    let err = null;
    switch (field) {
      case 'name':
        setName(obj);
        err = /\d/.test(obj)
          ? 'Numbers are not allowed'
          : obj.length < 3
            ? 'Name must be at least 3 characters long!'
            : null;
        setNameError(err);
        break;
      case 'email':
        setEmail(obj);
        err = validEmailRegex.test(obj) ? '' : 'Email is not valid!';
        setEmailError(err);
        break;
      default:
        break;
    }
  };

  const sumbitForm = () => {
    if (!gender) {
      setGenderError('Gender is required');
    }

    if (skin.length === 0) {
      setSkinError('Skin condition is required');
    }

    if (privacy.length === 0) {
      setPrivacyError('Privacy settings is required');
    }

    if (name.length === 0) {
      setNameError('Name is required');
    }

    if (email.length === 0) {
      setEmailError('Email is required');
    }
    if (!dobChange) {
      setDobError('Date is required');
    }

    if (
      !nameError &&
      name.length !== 0 &&
      !emailError &&
      email.length !== 0 &&
      dobChange &&
      !privacyError &&
      privacy.length !== 0 &&
      !skinError &&
      skin.length !== 0 &&
      gender !== 0
    ) {
      navigation.navigate('register2');
    } else {
      console.log(
        !nameError &&
        name.length !== 0 &&
        !emailError &&
        email.length !== 0 &&
        dobChange &&
        !privacyError &&
        privacy.length !== 0 &&
        !skinError &&
        skin.length === 0 &&
        gender !== 0,
      );
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        dis(logout());
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [dis]),
  );

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          left={'arrowleft'}
          title="Registration"
          leftnav={() => {
            dis(logout());
          }}
        />
        <ScrollView>
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
                  style={[Theme.width6p, Theme.backgroundGray, Theme.height3p]}
                />
                <View
                  style={[
                    Theme.width7p,
                    Theme.backgroundGray,
                    Theme.borderRadius10,
                    Theme.alignContentCenter,
                  ]}>
                  <Text style={Theme.padding2}>2</Text>
                </View>
                <View
                  style={[Theme.width40p, Theme.backgroundGray, Theme.height3p]}
                />
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.padding5,
                  Theme.row,
                  Theme.borderBox,
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    setGender(1);
                    setGenderError(null);
                  }}
                  style={[
                    Theme.width50p,
                    Theme.row,
                    Theme.padding10,
                    Theme.alignContentCenter,
                    Theme.borderRight,
                  ]}>
                  <Icon
                    name={'female'}
                    size={25}
                    color={gender === 1 ? 'purple' : 'black'}
                  />
                  <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                    Female
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setGender(2);
                    setGenderError(null);
                  }}
                  style={[
                    Theme.width50p,
                    Theme.row,
                    Theme.padding10,
                    Theme.alignContentCenter,
                  ]}>
                  <Icon
                    name={'male'}
                    size={25}
                    color={gender === 2 ? 'purple' : 'black'}
                  />
                  <Text style={[Theme.textBody, Theme.paddingHorizonal10p]}>
                    Male
                  </Text>
                </TouchableOpacity>
                <Text style={Theme.textInputLabelStyle}>Gender</Text>
              </View>

              {genderError ? (
                <Text style={[Theme.red, Theme.marginBottom10]}>
                  {genderError}
                </Text>
              ) : null}

              <DateTimeInput
                title="Date of birth"
                onChangeDate={date => {
                  setDob(date);
                  setDobError(null);
                  setDobChange(true);
                }}
                dobChange={dobChange}
                error={dobError}
              />

              <PickerInput
                title="Skin condition"
                items={skinItems}
                value={skin}
                setValue={data => {
                  setSkin(data());
                  setSkinError(null);
                }}
                setItems={setSkinItems}
                open={skinOpen}
                setOpen={setSkinOpen}
                onOpen={onSkinOpen}
                zIndex={15}
                zIndexTitle={16}
                error={skinError}
              />

              <TextInput
                title="Name"
                value={name}
                onChangeText={text => {
                  handleChange('name', text);
                }}
                placeholder="Enter your name"
                error={nameError}
              />

              <PickerInput
                title="Privacy setting for name"
                open={privacyOpen}
                setOpen={setPrivacyOpen}
                value={privacy}
                setValue={data => {
                  setPrivacy(data());
                  setPrivacyError(null);
                }}
                items={privacyItems}
                setItems={setPrivacyItems}
                zIndex={13}
                zIndexTitle={14}
                onOpen={onPrivacyOpen}
                error={privacyError}
              />
              <TextInput
                title="Email"
                value={email}
                placeholder="Enter your email address"
                onChangeText={text => {
                  handleChange('email', text);
                }}
                error={emailError}
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

export default Register;
