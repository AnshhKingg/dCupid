import React, {useState} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton, TextInput} from '../../Components';
import axiosServ from '../../service/axios';
import {logout} from '../../Redux/actions/auth';
import auth from '@react-native-firebase/auth';
import qs from 'qs'

const Delete = ({navigation}) => {
  const DeleteOption = [
    {
      value: 'Found my partner on derma cupid',
      label: 'Found my partner on derma cupid',
    },
    {
      value: 'Found my partner somewhere else',
      label: 'Found my partner somewhere else',
    },
    {
      value: 'I need a break',
      label: 'I need a break',
    },
    {
      value: 'I did not find it useful',
      label: 'I did not find it useful',
    },
    {
      value: 'Other Reason',
      label: 'Other Reason',
    },
  ];
  const [name, setName] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [deleteValueError, setDeleteValueError] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const token = useSelector(state => state.auth.token);
  const dis = useDispatch();
  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Delete Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <Text
                style={[
                  Theme.textBlack,
                  Theme.textBody,
                  Theme.paddingBottom20,
                ]}>
                We will miss you !{' '}
              </Text>
              <PickerInput
                title="Select Reason * "
                items={DeleteOption}
                zIndex={15}
                zIndexTitle={16}
                open={deleteOpen}
                setOpen={setDeleteOpen}
                value={deleteValue}
                setValue={data => {
                  setDeleteValue(data());
                  setDeleteValueError(null);
                }}
              />
              {deleteValueError && (
                <Text style={[Theme.red, Theme.paddingVertical5p]}>
                  {deleteValueError}
                </Text>
              )}

              <TextInput
                title="More Details"
                multiline={true}
                numberoflines={5}
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Submit"
                    onPress={() => {
                      if (deleteValue === '') {
                        setDeleteValueError('This field is required.');
                      } else {
                        console.log({
                            deleteReason: deleteValue,
                            deleteDetails: name,
                          });
                        setDeleteValueError(null);
                        axiosServ(token)
                          .delete('/user/delete',{data:{
                            deleteReason: deleteValue,
                            deleteDetails: name,
                          }})
                          .then(resp => {
                            console.log(resp);
                            auth().signOut();
                            dis(logout());
                            Alert.alert(
                              'Error',
                              'Your account is under deletion. It will be deleted after admin approval.',
                            );
                          })
                          .catch(er => {
                            console.log(er.response.data);
                            Alert.alert('Error', 'Something went wrong');
                          });
                      }
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Delete;
