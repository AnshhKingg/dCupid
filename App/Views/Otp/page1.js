import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { TextInput, LinearButton, LinearGradient, Loading } from '../../Components';
import CountryPicker from 'react-native-country-picker-modal';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../Redux/actions/auth';
import { removeProfile } from '../../Redux/actions/profile';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp = ({ navigation }) => {
  const dis = useDispatch();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [country, setcountry] = useState('');
  const [countryCode, setcountryCode] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const timer = useRef(null);
  const [count, setCount] = useState(60);
  // const state = useSelector(state => state.auth)

  const onAuthStateChanged = user => {
    if (user) {
      dis(login(user.uid, `+${countryCode}${mobile}`));
    } else {
      dis(removeProfile());
      dis(logout());
    }
  };

  useEffect(() => {
    const listener = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    if (otpSent && count !== 0) {
      timer.current = setInterval(() => {
        setCount(state => state - 1);
      }, 1000);
    } else {
      clearInterval(timer.current);
    }

    return () => {
      clearInterval(timer.current);
    };
  }, [timer, count, otpSent]);

  // const state = useSelector(state => state)

  // Handle the button press
  function signInWithPhoneNumber(phoneNumber) {
    setLoading(true)
    auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(resp => {
        setLoading(false)
        console.log('OTP send.');
        setOtpSent(true);
        setConfirmation(resp);
        ToastAndroid.show(
          'Otp is sent to your mobile number',
          ToastAndroid.SHORT,
        );
      })
      .catch(err => {
        setLoading(false)
        const firebaseerr = err.message.split('] ');
        Alert.alert('Error', firebaseerr[1]);
      });
  }

  async function confirmCode(number) {
    setLoading(true)
    try {
      const { user } = await confirmation.confirm(otp);
      console.log(number);
      dis(login(user.uid, number));
      setLoading(false)
    } catch (err) {
      const firebaseerr = err.message.split('] ');
      Alert.alert('Error', firebaseerr[1]);
      setLoading(false)
    }
  }

  return (
    <>
      <LinearGradient>
        <SafeAreaView style={[Theme.height100p]}>
          <Loading visible={loading} />
          <ScrollView contentContainerStyle={Theme.flexGrow}>
            <View style={[Theme.flex1, Theme.totalView]}>
              <Text style={[Theme.textHeader, Theme.purple]}>
                {otpSent ? 'Mobile Number' : 'Enter Mobile Number'}
              </Text>
              <View style={[Theme.justifySpcArnd, Theme.paddingVertical30p]}>
                <Text
                  style={[Theme.textTitle, Theme.grey, Theme.textFontWeight0]}>
                  {otpSent ? 'Verify mobile number' : ''}
                </Text>
                <Text style={[Theme.textBody, Theme.paddingVertical10p]}>
                  {otpSent
                    ? 'Enter the six digit code sent to your mobile number.'
                    : ''}
                </Text>
              </View>

              {otpSent ? (
                <View style={[Theme.OtpContainer]}>
                  <OTPInputView
                    style={[Theme.width100p]}
                    pinCount={6}
                    code={otp}
                    clearInputs={otp === ''}
                    onCodeChanged={code => {
                      setOtp(code);
                    }}
                    codeInputFieldStyle={[Theme.underlineStyleBase]}
                    onCodeFilled={code => {
                      console.log(`Code is ${code}, you are good to go!`);
                    }}
                  />
                </View>
              ) : (
                <View style={[Theme.width100p, Theme.row, Theme.flexStart]}>
                  <View style={[Theme.width30p, Theme.marginVertical10]}>
                    <View style={[Theme.textInput, Theme.alignContentCenter]}>
                      <CountryPicker
                        placeholder={<Text style={Theme.textCaption}>ISD</Text>}
                        withCallingCodeButton
                        countryCode={country}
                        withCloseButton
                        containerButtonStyle={Theme.paddingHorizonal5p}
                        withAlphaFilter
                        withFilter
                        withEmoji
                        withFlag
                        withCallingCode
                        onSelect={text => {
                          setCountryError('');
                          setcountry(text.cca2);
                          setcountryCode(text.callingCode);
                        }}
                      />
                    </View>
                    {countryError !== '' ? (
                      <Text style={Theme.red}>{countryError}</Text>
                    ) : null}
                  </View>
                  <View style={[Theme.width70p]}>
                    <TextInput
                      placeholder={'Mobile number'}
                      multiline={false}
                      keyboardType="numeric"
                      value={mobile}
                      onChangeText={text =>
                        setMobile(text.replace(/[^0-9]/g, ''))
                      }
                      error={error}
                    />
                  </View>
                </View>
              )}

              {otpSent ? (
                <View
                  style={[
                    Theme.width100p,
                    Theme.alignContentCenter,
                    Theme.paddingVertical10p,
                  ]}>
                  <View style={[Theme.width60p, Theme.alignContentCenter]}>
                    <LinearButton
                      disabled={otp.length !== 6}
                      title="Submit"
                      onPress={() => {
                        confirmCode(`+${countryCode}${mobile}`);
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      if (count === 0) {
                        signInWithPhoneNumber(`+${countryCode}${mobile}`);
                        setCount(60);
                      } else {
                        ToastAndroid.show(
                          `Please wait for ${count} seconds`,
                          ToastAndroid.SHORT,
                        );
                      }
                    }}>
                    <Text
                      style={[
                        Theme.textBody,
                        Theme.textUnderLine,
                        Theme.blue,
                        Theme.paddingVertical10p,
                      ]}>
                      Resend
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setCount(60);
                      clearInterval(timer.current);
                      setOtpSent(false);
                      setMobile('');
                      setOtp('');
                    }}>
                    <Text
                      style={[
                        Theme.textBody,
                        Theme.textUnderLine,
                        Theme.blue,
                        Theme.paddingVertical10p,
                      ]}>
                      Change Mobile Number
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={[
                    Theme.width60p,
                    Theme.selfAlignCenter,
                    Theme.marginVertical10,
                  ]}>
                  <LinearButton
                    title="Submit"
                    onPress={() => {
                      if (mobile === '') {
                        setError('Please enter your mobile number.');
                      } else if (country === '') {
                        setCountryError('Please select country code.');
                      } else {
                        signInWithPhoneNumber(`+${countryCode}${mobile}`);
                        setCountryError('');
                        setError('');
                      }
                    }}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default Otp;
