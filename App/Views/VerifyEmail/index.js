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
import {
    TextInput,
    LinearButton,
    LinearGradient,
    Loading,
} from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axiosServ from '../../service/axios';

const VerifyEmail = ({ navigation }) => {
    const dis = useDispatch();
    const token = useSelector(state => state.auth.token)
    const emailid = useSelector(state => state.profile.user.email)
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState(emailid);
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    );
    const sendEmail = () => {
        axiosServ(token).post('/user/send-email-otp', {
            email: email
        }).then((resp) => {
            console.log(resp.data);
            setError('')
            setOtpSent(true)
        }).catch((er) => {
            console.log(er.response.data);
            Alert.alert('Unable to send otp.')
        })
    }

    const verifyEmail = () => {
        axiosServ(token).post('/user/verify-email-otp', {
            otp: otp
        }).then((resp) => {
            Alert.alert('Email Verified')
        }).catch((er) => {
            console.log(er.response.data);
            Alert.alert('Enter the correct otp.')
        })
    }


    return (
        <>
            <LinearGradient>
                <SafeAreaView style={[Theme.height100p]}>
                    <Loading visible={loading} />
                    <ScrollView contentContainerStyle={Theme.flexGrow}>
                        <View style={[Theme.flex1, Theme.totalView]}>
                            <Text style={[Theme.textHeader, Theme.purple]}>
                                {otpSent ? 'EMAIL ADDRESS' : 'ENTER EMAIL ADDRESS'}
                            </Text>
                            <View style={[Theme.justifySpcArnd, Theme.paddingVertical30p]}>
                                <Text
                                    style={[Theme.textTitle, Theme.grey, Theme.textFontWeight0]}>
                                    {otpSent ? 'Verify Email address' : ''}
                                </Text>
                                <Text style={[Theme.textBody, Theme.paddingVertical10p]}>
                                    {otpSent
                                        ? 'Enter the six digit code sent to your email adderss.'
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
                                    <View style={[Theme.width100p]}>
                                        <TextInput
                                            placeholder={'Email'}
                                            multiline={false}
                                            keyboardType="numeric"
                                            value={email}
                                            onChangeText={text => {
                                                setEmail(text);
                                                let err = validEmailRegex.test(text) ? '' : 'Email is not valid!';
                                                setError(err);
                                            }}
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
                                            onPress={verifyEmail}
                                        />
                                    </View>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setOtpSent(false);
                                            setEmail('');
                                            setOtp('');
                                        }}>
                                        <Text
                                            style={[
                                                Theme.textBody,
                                                Theme.textUnderLine,
                                                Theme.blue,
                                                Theme.paddingVertical10p,
                                            ]}>
                                            Change Email Address
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
                                            if (email === '') {
                                                setError('Please enter your email id.');
                                            } else if (!error) {
                                                sendEmail()
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

export default VerifyEmail;
