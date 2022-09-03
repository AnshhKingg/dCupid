import React, { useState } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, LinearButton, LinearGradient } from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCircle from 'react-native-vector-icons/Feather';
import { colors } from '../../Assets/Colors';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../service/axios';
import { ip } from '../../Components/ipAddress';
import { getProfile } from '../../Redux/actions/profile'
import qs from 'qs'


const GuidelinesModal = ({ state, setState }) => {
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

const PhotoModal = ({ state, setState, token }) => {
  const dis = useDispatch()
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
                  compressImageQuality: 0.2
                }).then(image => {
                  console.log(image);
                  let data = new FormData();
                  data.append('photo', {
                    uri: image.path,
                    name: 'image.jpg',
                    type: 'image/jpeg'
                  });
                  data.append('type','photo')
                  try {
                    console.log('i tried');
                    fetch(`${ip}/api/v1/user/upload-photos`,
                      {
                        method: 'POST', headers: {
                          'Content-Type': 'multipart/form-data',
                          'Authorization': `${token}`
                        }, body: data,
                      }).then((resp) => {
                        if (resp.status === 201) {
                          dis(getProfile())
                          Alert.alert(
                            'Upload Photo',
                            'Your photo has been uploaded successfully. It will go live after screening',
                          );
                          setState()
                        } else {
                          Alert.alert(
                            'Upload Photo',
                            'Error is uploading photo. PLease try again.',
                          );
                          setState()
                        }
                      })
                  } catch (er) {
                    console.log(er);
                  }
                });
              }}>
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
                    compressImageQuality: 0.2
                  }).then(image => {
                    console.log(image);
                    let data = new FormData();
                    data.append('photo', {
                      uri: image.path,
                      name: 'image.jpg',
                      type: 'image/jpeg'
                    });
                    data.append('type','photo')
                    try {
                      fetch(`${ip}/api/v1/user/upload-photos`,
                        {
                          method: 'POST', headers: {
                            'Content-Type': 'multipart/form-data',
                            'Authorization': `${token}`
                          }, body: data,
                        }).then((resp) => {
                          console.log(resp);
                          if (resp.status === 201) {
                            dis(getProfile())
                            Alert.alert(
                              'Upload Photo',
                              'Your photo has been uploaded successfully. It will go live after screening',
                            );
                            setState()
                          } else {
                            Alert.alert(
                              'Upload Photo',
                              'Error is uploading photo. PLease try again.',
                            );
                          }
                        })
                    } catch (er) {
                      console.log(er);
                    }
                  })
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
    </Modal >
  );
};

const Photos = ({ navigation }) => {
  const dis = useDispatch()
  const [guideline, setGuideline] = useState(false);
  const [photo, setPhoto] = useState(false);
  const profile = useSelector(state => state.profile.user)
  const token = useSelector(state => state.auth.token)
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <GuidelinesModal
          state={guideline}
          setState={() => setGuideline(!guideline)}
        />
        <PhotoModal
          state={photo}
          setState={() => setPhoto(!photo)}
          token={token}
        />
        <Header
          left="arrowleft"
          title="Manage Photos"
          leftnav={() => {
            navigation.goBack();
          }}
        />

        <ScrollView
          contentContainerStyle={[
            Theme.width100p,
            Theme.flexGrow,
            Theme.alignCenter,
          ]}>
          <View
            style={[
              Theme.flex1,
              Theme.width100p,
              Theme.alignContentCenter,

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
                  Photos will go live after screening by our team.
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
            <View style={[Theme.width100p, Theme.alignContentCenter, Theme.separator]}>
              <View style={[Theme.width50p]}>
                <LinearButton
                  title="Upload Photo"
                  onPress={() => {
                    if (profile.photos.length === 6) {
                      Alert.alert('Alert', 'Maximum 6 photos are allowed. To upload more photos, please delete any of the existing photos.')
                    } else {
                      setPhoto(!photo)
                    }
                  }}
                />
              </View>
            </View>
            {
              profile.photos.map((data) => {
                return <View key={data.photo} style={[Theme.width80p, Theme.alignCenter, Theme.padding5]}>
                  <Image
                    style={[Theme.width100p, Theme.heightImage]}
                    source={{ uri: data.photo }}
                  />
                  <TouchableOpacity onPress={() => {
                    Alert.alert(
                      "Delete Photo",
                      "Are you sure u want to delete this photo?",
                      [
                        {
                          text: "Cancel",
                          onPress: () => console.log("Cancel Pressed"),
                          style: "cancel"
                        },
                        {
                          text: "OK", onPress: () => {
                            try {
                              fetch(`${ip}/api/v1/user/delete-photos/${data._id}`,
                                {
                                  method: 'DELETE', headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'Authorization': `${token}`
                                  }
                                }).then((resp) => {
                                  console.log(resp);
                                  if (resp.status === 201) {
                                    dis(getProfile())
                                  }
                                })
                            } catch (er) {
                              console.log(er);
                            }
                          }
                        }
                      ]
                    );
                  }} style={Theme.trashPos}>
                    <IconCircle
                      name="trash-2"
                      size={25}
                      color={colors.purpledark}
                    />
                  </TouchableOpacity>
                  {data.photoApproved ?
                    <View style={Theme.pendingButtonPos}>
                      <LinearButton title="Make profile photo" flat={true} disabled={true}
                      onPress={()=>{
                        try {
                          fetch(`${ip}/api/v1/user/make-profile-photo/${data._id}`,
                            {
                              method: 'GET', headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Authorization': `${token}`
                              }
                            }).then((resp) => {
                              console.log(resp);
                              if (resp.status === 201) {
                                dis(getProfile())
                              }
                            })
                        } catch (er) {
                          console.log(er);
                        }
                      }}
                      />
                   </View>
                    :
                    <View style={Theme.pendingButtonPos}>
                      <LinearButton title="Pending approval" flat={true} disabled={true} />
                    </View>
                  }
                </View>
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Photos;
