import React, {useCallback, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {Header, PickerInput, LinearButton, TextInput} from '../../Components';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../Redux/actions/profile';
import moment from 'moment-timezone';

const Name = ({navigation}) => {
  const dis = useDispatch();
  const profile = useSelector(state => state.profile.user);
  const selecterData = useSelector(state => state.masterData.data);

  const [privacy, setPrivacy] = useState(profile.privacy);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [privacyItems, setPrivacyItems] = useState(selecterData.privacy);

  const [childrenOpen, setChildrenOpen] = useState(false);
  const [children, setChildren] = useState(
    profile.children ? profile.children : '',
  );
  const [childrenItems, setChildrenItems] = useState(selecterData.children);

  const onPrivacyOpen = useCallback(() => {
    setChildrenOpen(false);
  }, []);

  const onChildrenOpen = useCallback(() => {
    setPrivacyOpen(false);
  }, []);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Edit Profile"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <TextInput title="Name" editable={false} value={profile.name} />
              <PickerInput
                zIndex={23}
                zIndexTitle={24}
                title="Privacy Setting For Name"
                open={privacyOpen}
                setOpen={setPrivacyOpen}
                value={privacy}
                setValue={data => {
                  setPrivacy(data());
                }}
                items={privacyItems}
                setItems={setPrivacyItems}
                onOpen={onPrivacyOpen}
              />
              <PickerInput
                title="Date of Birth"
                disabled={true}
                value={moment(new Date(profile.dob)).format('DD-MM-YYYY')}
                items={[
                  {
                    value: moment(new Date(profile.dob)).format('DD-MM-YYYY'),
                    label: moment(new Date(profile.dob)).format('DD-MM-YYYY'),
                  },
                ]}
                zIndex={21}
                zIndexTitle={22}
              />
              <PickerInput
                zIndex={19}
                zIndexTitle={20}
                title="Maritial Status"
                disabled={true}
                value={profile.marital}
                items={[{value: profile.marital, label: profile.marital}]}
              />
              <PickerInput
                zIndex={17}
                zIndexTitle={18}
                title="Skin Condition"
                disabled={true}
                value={profile.skin}
                items={[{value: profile.skin, label: profile.skin}]}
              />

              <PickerInput
                zIndex={15}
                zIndexTitle={16}
                dropDownDirection="TOP"
                title="Do you have childrens?"
                open={childrenOpen}
                setOpen={setChildrenOpen}
                value={children}
                setValue={data => {
                  setChildren(data());
                }}
                items={childrenItems}
                setItems={setChildrenItems}
                onOpen={onChildrenOpen}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Save"
                    onPress={() => {
                      dis(
                        updateProfile({privacy: privacy, children: children}),
                      );
                      navigation.goBack();
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

export default Name;
