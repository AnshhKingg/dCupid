import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  PermissionsAndroid,
  Alert, TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../../Assets/Styles';
import { Header, LinearButton, LinearGradient } from '../../Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCircle from 'react-native-vector-icons/Feather';
import { colors } from '../../Assets/Colors';
import ImagePicker from 'react-native-image-crop-picker';


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

const PhotoModal = ({ state, setState, setPath }) => {
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
                }).then(image => {
                  setPath(image.path);
                  console.log(image);
                  setState();
                  Alert.alert(
                    'Alert',
                    'Your photo has been uploaded successfully. It will go live after screening',
                  );
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
                  }).then(image => {
                    setPath(image.path);
                    console.log(image);
                    setState();
                    Alert.alert(
                      'Alert',
                      'Your photo has been uploaded successfully. It will go live after screening',
                    );
                  });
                }
                // else {
                //     Alert.alert('Please allow camera permission.')
                // }
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

const Photos = ({ navigation }) => {
  const [guideline, setGuideline] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [path, setPath] = useState('');
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
          setPath={image => setPath(image)}
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
              Theme.width100p,
              Theme.alignContentCenter,
              Theme.separator,
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

            <View style={[Theme.width50p]}>
              <LinearButton
                title="Upload Photo"
                onPress={() => setPhoto(!photo)}
              />
            </View>
          </View>

          {path === '' ? null : (
            <View style={[Theme.width80p, Theme.alignCenter]}>
              <Image
                style={[Theme.width100p, Theme.heightImage]}
                source={{ uri: path }}
              />
              <View style={Theme.trashPos}>
                <IconCircle
                  name="trash-2"
                  size={25}
                  color={colors.purpledark}
                />
              </View>
              <View style={Theme.pendingButtonPos}>
                <LinearButton title="Pending approval" flat={true} />
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Photos;
