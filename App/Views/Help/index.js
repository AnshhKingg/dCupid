import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, TextInput, LinearButton} from '../../Components';
import ImagePicker from 'react-native-image-crop-picker';
import {ip} from '../../Components/ipAddress';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const Help = ({navigation}) => {
  const [emailConfirm, setEmailConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirmError, setEmailConfirmError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState(null);
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  );

  const handleChange = (field, obj) => {
    let err = null;
    switch (field) {
      case 'emailconfirm':
        setEmailConfirm(obj);
        err = validEmailRegex.test(obj) ? '' : 'Confirm Email is not valid!';
        setEmailConfirmError(err);
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
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header title="Help" />
        <ScrollView style={[]}>
          <View style={Theme.width100p}>
            <TouchableOpacity
              style={[Theme.width100p, Theme.padding10, Theme.flexEnd]}
              onPress={() => {
                navigation.navigate('faq');
              }}>
              <Text style={[Theme.textTitle, Theme.blue]}>
                FAQS <Icon name="angle-right" size={20} color="black" />
              </Text>
            </TouchableOpacity>
            <View style={Theme.separator} />
            <View style={[Theme.alignContentCenter, Theme.width100p]}>
              <Text style={[Theme.textBody, Theme.padding5]}>
                Choose any of the below ways to contact us.
              </Text>
            </View>

            <View
              style={[
                Theme.totalView,
                Theme.alignContentCenter,
                Theme.padding5,
              ]}>
              <TouchableOpacity
                style={Theme.padding5}
                onPress={() =>
                  Linking.openURL('mailto:support@dermacupid.com')
                }>
                <Text style={[Theme.textBody, Theme.blue]}>
                  support@dermacupid.com
                </Text>
              </TouchableOpacity>
              <View style={[Theme.width100p, Theme.separator]} />
              <Text style={[Theme.textCaption, Theme.padding5]}>
                (We respond within 1 working day.)
              </Text>
            </View>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <TextInput
                title="Email*"
                value={email}
                placeholder="Email"
                onChangeText={text => {
                  handleChange('email', text);
                }}
                error={emailError}
              />
              <TextInput
                title="Confirm Email*"
                value={emailConfirm}
                onChangeText={text => {
                  handleChange('emailconfirm', text);
                }}
                placeholder="Confirm Email"
                error={emailConfirmError}
              />
              <TextInput
                title="Subject*"
                value={subject}
                onChangeText={text => {
                  setSubjectError(null);
                  setSubject(text);
                }}
                placeholder="Subject"
                error={subjectError}
              />
              <TextInput
                title="Description*"
                value={description}
                numberoflines={3}
                multiline
                onChangeText={text => {
                  setDescription(text);
                  setDescriptionError(null);
                }}
                placeholder="Description"
                error={descriptionError}
              />
              {/* <View
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.alignCenter,
                  Theme.justifySpcBtw,
                  Theme.paddingHorizonal5p,
                  Theme.paddingVertical5p,
                  Theme.paddingBottom30,
                ]}>
                <Text style={[Theme.toastFontMed, Theme.purple]}>
                  Attach a file
                </Text>
                <View style={[Theme.width40p]}>
                  <LinearButton
                    flat={true}
                    title="Browse"
                    onPress={async () => {
                      await ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        compressImageQuality: 0.2,
                      }).then(image => {
                        console.log(image);
                        let data = new FormData();
                        data.append('contact-photo', {
                          uri: image.path,
                          name: 'image.jpg',
                          type: 'image/jpeg',
                        });
                        try {
                          fetch(`${ip}/api/v1/user/upload-contactus-photo`, {
                            method: 'POST',
                            body: data,
                          })
                            .then(response => response.json())
                            .then(data => setImageUrl(data.data));
                        } catch (er) {
                          console.log(er);
                        }
                      });
                    }}
                  />
                </View>
              </View> */}
              <View style={[Theme.width100p, Theme.row]}>
                <View style={Theme.width50p}>
                  <TouchableOpacity
                    style={[
                      Theme.alignContentCenter,
                      Theme.buttonLook,
                      Theme.backgroundGray,
                    ]}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Text style={[Theme.textBody, Theme.textBlack]}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={Theme.width50p}>
                  <LinearButton
                    title="Submit"
                    onPress={() => {
                      if (email.length === 0) {
                        setEmailError('Email is required.');
                      }
                      if (emailConfirm.length === 0) {
                        setEmailConfirmError('Confirm email is required.');
                      }
                      if (subject.length === 0) {
                        setSubjectError('Subject is required.');
                      } else {
                        setSubjectError(null);
                      }
                      if (description.length === 0) {
                        setDescriptionError('Description is required.');
                      } else {
                        setDescriptionError(null);
                      }
                      if (email.toLowerCase() !== emailConfirm.toLowerCase()) {
                        setEmailConfirmError('Email id do not match.');
                      } else {
                        setEmailConfirmError(null);
                      }
                      if (
                        !emailError &&
                        email.length !== 0 &&
                        !emailConfirmError &&
                        emailConfirm.length !== 0 &&
                        email.toLowerCase() === emailConfirm.toLowerCase() &&
                        !subjectError &&
                        subject.length !== 0 &&
                        !descriptionError &&
                        description.length !== 0
                      ) {
                        axios
                          .post(`${ip}/api/v1/user/contact-us`, {
                            email: email.toLowerCase(),
                            subject: subject,
                            description: description,
                            image: imageUrl,
                          })
                          .then(resp => {
                            setEmail('');
                            setEmailConfirm('');
                            setSubject('');
                            setDescription('');
                            setImageUrl('');
                            Alert.alert(
                              'Alert',
                              'Your response has been recorded.',
                            );
                            navigation.goBack();
                          })
                          .catch(er => {
                            console.log(er);
                          });
                      } else {
                        console.log('nope');
                        Toast.show({
                          type: 'error',
                          text1: 'Please check all the fields',
                        });
                      }
                    }}
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

export default Help;
