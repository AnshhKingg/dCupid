import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, PermissionsAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton, Loading} from '../../Components';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import {ip} from '../../Components/ipAddress';
import {imageFilter, imageUserFilter, trustscore} from '../../service/utils';
import {getProfile} from '../../Redux/actions';
import axios from 'axios';

const MessageTile = ({toggle, togglemsg, header, des, title, onPress}) => {
  return (
    <View
      style={[
        Theme.width100p,
        toggle ? Theme.row : null,
        toggle ? Theme.alignCenter : Theme.alignContentCenter,
        Theme.totalView,
      ]}>
      {toggle ? (
        <>
          <IconMaterial name="verified-user" size={30} color="green" />
          <Text style={[Theme.textBody, Theme.paddingVertical10p]}>
            {' '}
            {togglemsg}
          </Text>
        </>
      ) : (
        <>
          {header ? (
            <Text
              style={[
                Theme.textBody,
                Theme.paddingVertical10p,
                Theme.textCenter,
              ]}>
              {header}
            </Text>
          ) : null}
          {des ? (
            <Text
              style={[
                Theme.textCaption,
                Theme.paddingVertical10p,
                Theme.textCenter,
              ]}>
              {des}
            </Text>
          ) : null}
          <View style={[Theme.width60p]}>
            <LinearButton title={title} onPress={onPress} />
          </View>
        </>
      )}
    </View>
  );
};

const TrustScore = ({navigation}) => {
  const profile = useSelector(state => state.profile.user);
  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(false);
  const dis = useDispatch();
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Loading visible={loading} />
        <Header
          left="menuunfold"
          title="Trust Score"
          leftnav={() => navigation.openDrawer()}
        />
        <ScrollView contentContainerStyle={[]}>
          <View
            style={[
              Theme.width100p,
              Theme.alignCenter,
              Theme.paddingHorizonal20p,
            ]}>
            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.paddingVertical10p,
              ]}>
              <IconMaterial name="verified-user" size={40} color="green" />
              <Text style={[Theme.textTitle, Theme.textCenter]}>
                YOUR PROFILE TRUST SCORE
              </Text>
              <Text style={[Theme.textTitle, Theme.textCenter, Theme.purple]}>
                {trustscore(profile)}%
              </Text>
            </View>
            <MessageTile
              toggle={imageUserFilter(profile.photos).length > 0}
              togglemsg={
                imageFilter(profile.photos).length > 0
                  ? 'Photograph verified'
                  : 'Profile photo is under verification'
              }
              header="Add your recent photo (30%)"
              title={'Add Photo'}
              onPress={() => navigation.navigate('photo')}
            />

            <MessageTile
              toggle={profile.mobileVerified ? true : false}
              togglemsg="Mobile verified"
              header="Verify your mobile number (20%)"
              title={'Verify mobile'}
              onPress={() => {}}
            />

            {/* <MessageTile toggle={false} togglemsg='Facebook profile verified'
              header='Connect your facebook profile (25%)' des='We will never post anything on your facebook profile'
              title='Connect now' onPress={{}} /> */}

            <MessageTile
              toggle={profile.emailVerified ? true : false}
              togglemsg="Email id verified"
              header="Verify your email (20%)"
              des="We will never share your email with other users."
              title="Verify email"
              onPress={() => {
                navigation.navigate('verifyemail');
              }}
            />

            <MessageTile
              toggle={
                profile.photoID &&
                (profile.photoIDApproved === 0 || profile.photoIDApproved === 1)
                  ? true
                  : false
              }
              togglemsg={
                profile.photoIDApproved === 1
                  ? 'Photo Id verified'
                  : profile.photoIDApproved === 0
                  ? 'Photo Id under verification.'
                  : ''
              }
              header="Verify your photo id (30%)"
              des="Upload a copy of your driving licence , passport or any other photo id that has your photo ,date of birth and name mentioned on it."
              title="Upload"
              onPress={() => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: false,
                  compressImageQuality: 0.2,
                }).then(image => {
                  console.log(image);
                  let data = new FormData();
                  data.append('photo', {
                    uri: image.path,
                    name: image.path.split('/').pop(),
                    type: image.mime,
                  });
                  data.append('type', 'photoId');
                  setLoading(true);

                  // fetch(`${ip}/api/v1/user/upload-photos`, {
                  //   method: 'POST',
                  //   headers: {
                  //     'Content-Type': 'multipart/form-data',
                  //     Authorization: `${token}`,
                  //   },
                  //   body: data,
                  // }) // .then(resp => resp.json())
                  //   .then(resp => {
                  //     console.log(resp);
                  //     if (resp.status === 201) {
                  //       setLoading(false);
                  //       dis(getProfile());
                  //       Alert.alert(
                  //         'Upload Photo ID',
                  //         'Your photo Id has been uploaded successfully.',
                  //       );
                  //     } else {
                  //       setLoading(false);
                  //       Alert.alert(
                  //         `Upload Photo Error - ${resp.status}`,
                  //         'Error is uploading photo. Please try again.',
                  //       );
                  //     }
                  //   })
                  //   .catch(er => {
                  //     setLoading(false);
                  //   });
                  axios
                    .post(`${ip}/api/v1/user/upload-photos`, data, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `${token}`,
                      },
                    })
                    .then(resp => {
                      if (resp.status === 201) {
                        setLoading(false);
                        dis(getProfile());
                        Alert.alert(
                          'Upload Photo',
                          'Your photo has been uploaded successfully. It will go live after screening',
                        );
                      }
                    })
                    .catch(er => {
                      console.log(er);
                      setLoading(false);
                      Alert.alert(
                        'Upload Photo',
                        'Error is uploading photo. Please try again.',
                      );
                    });
                  // var data = new FormData();
                  // data.append('photo', {
                  //   uri: image.path,
                  //   name: image.path.split('/').pop(),
                  //   type: image.mime,
                  // });
                  // data.append('type', 'photo');
                  // setLoadingTrue();
                  // try {
                  //   const response = await axios.post(
                  //     `${ip}/api/v1/user/upload-photos`,
                  //     data,
                  //     {
                  //       headers: {
                  //         'Content-Type': 'multipart/form-data',
                  //         Authorization: `${token}`,
                  //       },
                  //     },
                  //   );
                  //   if (response.status === 201) {
                  //     setLoadingFalse();
                  //     dis(getProfile());
                  //     Alert.alert(
                  //       'Upload Photo',
                  //       'Your photo has been uploaded successfully. It will go live after screening',
                  //     );
                  //     setState();
                  //   } else {
                  //     setLoadingFalse();
                  //     Alert.alert(
                  //       'Upload Photo',
                  //       'Error is uploading photo. Please try again.',
                  //     );
                  //     setState();
                  //   }
                  // } catch (error) {
                  //   setLoadingFalse();
                  //   console.log(error);
                  //   Alert.alert('Error', 'Please try again later.');
                  // }
                });
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TrustScore;
