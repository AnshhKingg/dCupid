import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '../../Assets/Styles';
import {
  Header,
  PickerInput,
  LinearButton,
  LinearGradient,
  DropDownButton,
  MultiSelect,
} from '../../Components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RegisterData} from '../../../data';

// const ConditionModal = ({ state, onPress, onPressCancel, array }) => {
//   const arr = []
//   return (
//     <Modal visible={state} animationType="fade" transparent={true}>
//       <TouchableOpacity
//         style={[Theme.flex1, Theme.alignContentCenter, Theme.blackFaded, Theme.padding10]}
//         onPress={onPressCancel}>
//         <ScrollView contentContainerStyle={[Theme.flexGrow, Theme.backgroundWhite]}>
//           <TouchableWithoutFeedback>
//             <View style={[Theme.flex1, Theme.width100p, Theme.backgroundWhite]}>
//               <View style={[Theme.width100p]}>
//                 <LinearGradient style={[Theme.width100p]}>
//                   <Text
//                     style={[
//                       Theme.textTitle,
//                       Theme.textBold,
//                       Theme.white,
//                       Theme.padding10,
//                     ]}>
//                     Skin Condition
//                   </Text>
//                 </LinearGradient>
//               </View>

//               <View style={[Theme.width100p, Theme.row, Theme.alignCenter, { flexWrap: 'wrap' }, Theme.padding10]}>
//                 <View style={[Theme.modalButton, Theme.row, Theme.alignContentCenter, Theme.backgroundGray, Theme.paddingHorizonal10p]}>
//                   <Icon name='check' size={30} />
//                   <Text style={[Theme.textCaption, Theme.paddingHorizonal10p]}>a</Text>
//                   <Icon name='cancel' size={25} />
//                 </View>
//               </View>
//               {
//                 array.map((data) => {
//                   return (
//                     <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
//                       <View style={[Theme.width10p]}>
//                         <BouncyCheckbox iconStyle={{ borderRadius: 5 }} onPress={(isChecked) => { console.log(isChecked); }} />
//                       </View>
//                       <View style={[Theme.width90p, Theme.separator]}>
//                         <Text style={[Theme.textCaption, Theme.textBlack]}>
//                           {data.label}
//                         </Text>
//                       </View>
//                     </View>
//                   )
//                 })
//               }
//             </View>
//           </TouchableWithoutFeedback>
//         </ScrollView>
//         <View style={[Theme.width100p, Theme.row, Theme.backgroundWhite]}>
//           <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
//             <LinearButton title="Cancel" noGradient={true} color='lightgrey' onPress={onPressCancel} />
//           </View>
//           <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
//             <LinearButton title="Save" onPress={onPress} />
//           </View>
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   )
// }

const Age = ({navigation}) => {
  const [skinCondition, SetSkinCondition] = useState(false);
  const [maritalStatus, setMartitalStatus] = useState(false);

  return (
    <>
      <SafeAreaView style={[Theme.height100p]}>
        <Header
          title="Age"
          left="arrowleft"
          leftnav={() => navigation.goBack()}
        />
        <MultiSelect
          state={skinCondition}
          array={RegisterData.skin}
          onPressCancel={() => SetSkinCondition(!skinCondition)}
        />
        <MultiSelect
          state={maritalStatus}
          array={RegisterData.marital}
          onPressCancel={() => setMartitalStatus(!maritalStatus)}
        />
        <ScrollView style={[]}>
          <View style={[Theme.width100p]}>
            <View style={[Theme.selectedItems, Theme.padding10]}>
              <View style={[Theme.width100p, Theme.row]}>
                <View style={[Theme.width40p]}>
                  <PickerInput title="Age" />
                </View>
                <View style={[Theme.width20p, Theme.alignContentCenter]}>
                  <Text>To</Text>
                </View>
                <View style={[Theme.width40p]}>
                  <PickerInput title="Age" />
                </View>
              </View>
              <DropDownButton
                title="Skin Condition"
                onPress={() => SetSkinCondition(!skinCondition)}
              />
              <DropDownButton
                title="Maritial Status"
                onPress={() => setMartitalStatus(!maritalStatus)}
              />
              <View
                style={[Theme.width100p, Theme.alignContentCenter, Theme.row]}>
                <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
                  <LinearButton
                    title="Continue"
                    onPress={() => {
                      navigation.navigate('dashboard');
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

export default Age;
