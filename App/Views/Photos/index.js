import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  PermissionsAndroid,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, LinearButton, LinearGradient, Loading} from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCircle from 'react-native-vector-icons/Feather';
import {colors} from '../../Assets/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';

import {ip} from '../../Components/ipAddress';
import {getProfile} from '../../Redux/actions/profile';

import {imageFilter, imageUserFilter} from '../../service/utils';
import axios from 'axios';
import mime from 'mime';
import RNFetchBlob from 'rn-fetch-blob';
const GuidelinesModal = ({state, setState}) => {
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded]}
        onPress={setState}>
        <TouchableWithoutFeedback style={[Theme.width100p]}>
          <View style={[Theme.width90, Theme.backgroundWhite, Theme.padding10]}>
            <Text style={[Theme.textTitle, Theme.marginBottom10, Theme.purple]}>
              Do's
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - Your face should be clearly visible in the picture.
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - Upload solo/selfie pictures with no one else in the pictures.
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - You should be properly dressed in the photos.
            </Text>

            <Text style={[Theme.textTitle, Theme.marginBottom10, Theme.purple]}>
              Dont's
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - Avoid group photos.
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - No photos in bikinis/swimwear.
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - No pictures in underwear.
            </Text>
            <Text style={[Theme.textCaption, Theme.marginBottom10]}>
              - No shirtless/underwear mirror selfies.
            </Text>
            <View style={[Theme.width50p, Theme.selfAlignCenter]}>
              <LinearButton title="OK" onPress={setState} flat={true} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const api = ({image, setLoadingTrue, setLoadingFalse, setState}) => {
  var data = new FormData();
  data.append('photo', {
    uri: image.path,
    name: image.path.split('/').pop(),
    type: image.mime,
  });
  data.append('type', 'photo');
  setLoadingTrue();
  axios
    .post(`${ip}/api/v1/user/upload-photos`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${token}`,
      },
    })
    .then(resp => {
      if (resp.status === 201) {
        setLoadingFalse();
        setState();
        dispatch();
        Alert.alert(
          'Upload Photo',
          'Your photo has been uploaded successfully. It will go live after screening',
        );
      }
    })
    .catch(er => {
      setState();
      setLoadingFalse();
      Alert.alert(
        'Upload Photo',
        'Error is uploading photo. Please try again.',
      );
    });
};

const PhotoModal = ({
  state,
  setState,
  token,
  setLoadingFalse,
  setLoadingTrue,
  dispatch,
}) => {
  return (
    <Modal visible={state} animationType="slide" transparent={true}>
      <TouchableOpacity
        style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded]}
        onPress={setState}>
        <TouchableWithoutFeedback style={[Theme.width100p]}>
          <View
            style={[
              Theme.width90,
              Theme.backgroundWhite,
              Theme.alignContentCenter,
            ]}>
            <LinearGradient style={[Theme.width100p]}>
              <Text
                style={[
                  Theme.textTitle,
                  Theme.textBold,
                  Theme.white,
                  Theme.padding10,
                ]}>
                Upload Photo
              </Text>
            </LinearGradient>
            <TouchableOpacity
              style={[
                Theme.width100p,
                Theme.padding10,
                Theme.marginTop10,
                Theme.row,
                Theme.alignCenter,
                Theme.separator,
                Theme.paddingVertical20p,
              ]}
              onPress={() => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                  compressImageQuality: 0.6,
                }).then(image => {
                  var data = new FormData();
                  data.append('photo', {
                    uri: image.path,
                    name: image.path.split('/').pop(),
                    type: image.mime,
                  });
                  data.append('type', 'photo');
                  // setLoadingTrue();
                  axios
                    .post(`${ip}/api/v1/user/upload-photos`, data, {
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        Authorization: `${token}`,
                      },
                    })
                    .then(resp => {
                      setLoadingFalse();
                      setState();
                      dispatch();
                      Alert.alert(
                        'Upload Photo',
                        'Your photo has been uploaded successfully. It will go live after screening',
                      );
                    })
                    .catch(er => {
                      setState();
                      setLoadingFalse();
                      Alert.alert(
                        'Upload Photo',
                        'Error is uploading photo. Please try again.',
                      );
                    });

                  //     RNFetchBlob.fetch(
                  //       'POST',
                  //       `${ip}/api/v1/user/upload-photos`,
                  //       {
                  //         Authorization: `${token}`,
                  //         otherHeader: 'foo',
                  //         'Content-Type': 'multipart/form-data',
                  //       },
                  //       [
                  //         {name: 'type', data: 'photo'},
                  //         {
                  //           name: 'photo',
                  //           filename: 'image.jpeg',
                  //           type: image.mime,
                  //           data: RNFetchBlob.wrap(image.path),
                  //         },
                  //       ],
                  //     )
                  //       .then(resp => {
                  //         if (resp.respInfo.status === 201) {
                  //           setLoadingFalse();
                  //           setState();
                  //           dispatch();
                  //           Alert.alert(
                  //             'Upload Photo',
                  //             'Your photo has been uploaded successfully. It will go live after screening',
                  //           );
                  //         } else {
                  //           setState();
                  //           setLoadingFalse();
                  //           Alert.alert(
                  //             'Upload Photo',
                  //             'Error is uploading photo. Please try again.',
                  //           );
                  //         }
                  //       })
                  //       .catch(err => {
                  //         setState();
                  //         setLoadingFalse();
                  //         Alert.alert(
                  //           'Upload Photo',
                  //           'Error is uploading photo. Please try again.',
                  //         );
                  //       });
                });
              }}
              // onPress={() => {
              //   launchImageLibrary(
              //     {
              //       maxWidth: 300,
              //       maxHeight: 400,
              //       quality: 0.6,
              //     },
              //     image => {
              //       var data = new FormData();
              //       data.append('photo', {
              //         uri: image.assets[0].uri,
              //         name: image.assets[0].fileName,
              //         type: image.assets[0].type,
              //       });
              //       data.append('type', 'photo');
              //       setLoadingTrue();
              //       axios
              //         .post(`${ip}/api/v1/user/upload-photos`, data, {
              //           headers: {
              //             'Content-Type': 'multipart/form-data',
              //             Authorization: `${token}`,
              //           },
              //         })
              //         .then(resp => {
              //           if (resp.status === 201) {
              //             setLoadingFalse();
              //             setState();
              //             dispatch();
              //             Alert.alert(
              //               'Upload Photo',
              //               'Your photo has been uploaded successfully. It will go live after screening',
              //             );
              //           }
              //         })
              //         .catch(er => {
              //           console.log(er);
              //           setState();
              //           setLoadingFalse();
              //           Alert.alert(
              //             'Upload Photo',
              //             'Error is uploading photo. Please try again.',
              //           );
              //         });
              //     },
              //   );
              // }}
            >
              <Icon name="photo" size={25} color={colors.purpledark} />
              <Text style={[Theme.textCaption, Theme.paddingHorizonal10p]}>
                From gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Theme.width100p,
                Theme.padding10,
                Theme.paddingVertical20p,
                Theme.row,
                Theme.alignCenter,
                Theme.separator,
                Theme.marginBottom10,
              ]}
              onPress={async () => {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  ImagePicker.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true,
                    compressImageQuality: 0.8,
                  })
                    .then(image => {
                      let data = new FormData();
                      data.append('type', 'photo');
                      data.append('photo', {
                        uri: image.path,
                        name: 'image.jpg',
                        type: image.mime,
                      });
                      // try {
                      //   setLoadingTrue();
                      //   fetch(`${ip}/api/v1/user/upload-photos`, {
                      //     method: 'POST',
                      //     headers: {
                      //       'Content-Type': 'multipart/form-data',
                      //       Authorization: `${token}`,
                      //     },
                      //     body: data,
                      //   })
                      //     .then(resp => {
                      //       console.log(resp);
                      //       if (resp.status === 201) {
                      //         setLoadingFalse();
                      //         dis(getProfile());
                      //         Alert.alert(
                      //           'Upload Photo',
                      //           'Your photo has been uploaded successfully. It will go live after screening',
                      //         );
                      //         setState();
                      //       } else {
                      //         setLoadingFalse();
                      //         setState();
                      //         Alert.alert(
                      //           'Upload Photo',
                      //           'Error is uploading photo. Please try again.',
                      //         );
                      //       }
                      //     })
                      //     .catch(er => {
                      //       setLoadingFalse();
                      //       setState();
                      //       console.log('Type Error 1');
                      //       console.log(er.response);
                      //     });
                      // } catch (er) {
                      //   setLoadingFalse();
                      //   setState();
                      //   console.log('Type Error 2');
                      //   console.log(er.response);
                      // }
                      axios
                        .post(`${ip}/api/v1/user/upload-photos`, data, {
                          headers: {
                            'Content-Type': 'multipart/form-data',
                            Accept: 'application/json',
                            Authorization: `${token}`,
                          },
                        })
                        .then(resp => {
                          if (resp.status === 201) {
                            setLoadingFalse();
                            setState();
                            dispatch();
                            Alert.alert(
                              'Upload Photo',
                              'Your photo has been uploaded successfully. It will go live after screening',
                            );
                          }
                        })
                        .catch(er => {
                          console.log(er.response);
                          setState();
                          setLoadingFalse();
                          Alert.alert(
                            'Upload Photo',
                            'Error is uploading photo. Please try again.',
                          );
                        });
                    })
                    .catch(er => {
                      console.log(er);
                    });
                }
              }}>
              <Icon name="camera" size={25} color={colors.purpledark} />
              <Text style={[Theme.textCaption, Theme.paddingHorizonal10p]}>
                Take a selfie
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const Photos = ({navigation}) => {
  const dis = useDispatch();
  const [guideline, setGuideline] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [loading, setLoading] = useState(false);
  const profile = useSelector(state => state.profile.user);
  const token = useSelector(state => state.auth.token);
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Loading visible={loading} />
        <GuidelinesModal
          state={guideline}
          setState={() => setGuideline(!guideline)}
        />
        <PhotoModal
          setLoadingFalse={() => setLoading(false)}
          setLoadingTrue={() => setLoading(true)}
          state={photo}
          setState={() => setPhoto(false)}
          token={token}
          dispatch={() => dis(getProfile())}
        />
        <Header
          left="arrowleft"
          title="Manage Photos"
          leftnav={() => {
            navigation.goBack();
          }}
        />

        <ScrollView contentContainerStyle={[Theme.width100p, Theme.flexGrow]}>
          <View
            style={[
              Theme.flex1,
              Theme.width100p,
              Theme.alignCenter,
              Theme.padding10,
              Theme.marginTop10,
            ]}>
            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.row,
                Theme.paddingVertical10p,
              ]}>
              <View style={[Theme.width20p, Theme.alignContentCenter]}>
                <IconCircle name="check-circle" size={25} color="green" />
              </View>
              <View style={[Theme.width80p, Theme.flexStart]}>
                <Text style={[Theme.textCaption]}>
                  You can add upto 6 photos.
                </Text>
              </View>
            </View>

            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.row,
                Theme.paddingVertical10p,
              ]}>
              <View style={[Theme.width20p, Theme.alignContentCenter]}>
                <IconCircle name="check-circle" size={25} color="green" />
              </View>
              <View style={[Theme.width80p, Theme.flexStart]}>
                <Text style={[Theme.textCaption]}>
                  Prefer solo/selfie pics with nobody else in the photo.
                </Text>
              </View>
            </View>

            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.row,
                Theme.paddingVertical10p,
              ]}>
              <View style={[Theme.width20p, Theme.alignContentCenter]}>
                <IconCircle name="check-circle" size={25} color="green" />
              </View>
              <View style={[Theme.width80p, Theme.flexStart]}>
                <Text style={[Theme.textCaption]}>
                  Photos will go live after screening by our team.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[Theme.width100p, Theme.alignCenter]}
              onPress={() => setGuideline(!guideline)}>
              <Text
                style={[
                  Theme.textBody,
                  Theme.textUnderLine,
                  Theme.purple,
                  Theme.textBold,
                  Theme.paddingVertical20p,
                ]}>
                PHOTOS GUIDELINES
              </Text>
            </TouchableOpacity>
            <View
              style={[
                Theme.width100p,
                Theme.alignContentCenter,
                Theme.separator,
              ]}>
              <View style={[Theme.width50p]}>
                <LinearButton
                  title="Upload Photo"
                  onPress={() => {
                    if (imageUserFilter(profile.photos).length === 6) {
                      Alert.alert(
                        'Alert',
                        'Maximum 6 photos are allowed. To upload more photos, please delete any of the existing photos.',
                      );
                    } else {
                      setPhoto(!photo);
                    }
                  }}
                />
              </View>
            </View>
            {imageUserFilter(profile.photos).map(data => {
              return (
                <View
                  key={data.photo}
                  style={[Theme.width80p, Theme.alignCenter, Theme.padding5]}>
                  <Image
                    style={[Theme.width100p, Theme.heightImage]}
                    source={{uri: data.photo}}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Delete Photo',
                        'Are you sure u want to delete this photo?',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => {
                              try {
                                fetch(
                                  `${ip}/api/v1/user/delete-photos/${data._id}`,
                                  {
                                    method: 'DELETE',
                                    headers: {
                                      'Content-Type':
                                        'application/x-www-form-urlencoded',
                                      Authorization: `${token}`,
                                    },
                                  },
                                ).then(resp => {
                                  dis(getProfile());
                                });
                              } catch (er) {
                                console.log(er);
                              }
                            },
                          },
                        ],
                      );
                    }}
                    style={Theme.trashPos}>
                    <IconCircle
                      name="trash-2"
                      size={25}
                      color={colors.purpledark}
                      style={[Theme.backgroundWhite, Theme.trashIconStyle]}
                    />
                  </TouchableOpacity>
                  {data.photoApproved ? (
                    <View style={Theme.pendingButtonPos}>
                      <LinearButton
                        title={
                          imageFilter(profile.photos)[0].photo === data.photo
                            ? 'Profile picture'
                            : 'Make profile photo'
                        }
                        flat={true}
                        onPress={() => {
                          try {
                            fetch(
                              `${ip}/api/v1/user/make-profile-photo/${data._id}`,
                              {
                                method: 'GET',
                                headers: {
                                  Authorization: `${token}`,
                                },
                              },
                            )
                              .then(resp => resp.json())
                              .then(resp => {
                                console.log(resp.data.photos);

                                dis(getProfile());
                              });
                          } catch (er) {
                            console.log(er);
                          }
                        }}
                      />
                    </View>
                  ) : (
                    <View style={Theme.pendingButtonPos}>
                      <LinearButton
                        title="Pending approval"
                        flat={true}
                        disabled={true}
                      />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Photos;
