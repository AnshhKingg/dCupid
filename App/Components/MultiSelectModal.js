import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  FlatList
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearButton, LinearGradient } from '.';
import { Theme } from '../Assets/Styles';

const ConditionModal = ({
  state,
  onPress,
  onPressCancel,
  array,
  selectedItems,
  title
}) => {
  const [arr, setArr] = useState(selectedItems);
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[
          Theme.flex1,
          Theme.alignContentCenter,
          Theme.blackFaded,
          Theme.padding10,
          Theme.paddingHorizonal30p,
        ]}
        onPress={onPressCancel}>
        <ScrollView
          contentContainerStyle={[Theme.flexGrow, Theme.backgroundWhite]}>
          <TouchableWithoutFeedback>
            <View style={[Theme.flex1, Theme.width100p, Theme.backgroundWhite]}>
              <View style={[Theme.width100p]}>
                <LinearGradient style={[Theme.width100p]}>
                  <Text
                    style={[
                      Theme.textTitle,
                      Theme.textBold,
                      Theme.white,
                      Theme.padding10,
                    ]}>
                    {title}
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.alignCenter,
                  Theme.flexWrap,
                  Theme.padding10,
                ]}>
                {arr.map((data,index) => {
                  return (
                    <View
                      key={index}
                      style={[
                        Theme.modalButton,
                        Theme.row,
                        Theme.alignContentCenter,
                        Theme.backgroundGray,
                        Theme.paddingHorizonal5p,
                      ]}>
                      <Icon name="check" size={25} />
                      <Text
                        style={[Theme.textCaption, Theme.paddingHorizonal5p]}>
                        {data}
                      </Text>
                      <Icon
                        name="cancel"
                        size={25}
                        onPress={() => {
                          if (arr.includes(data)) {
                            const newArr = arr.filter(value => {
                              return value !== data;
                            });
                            setArr(newArr);
                          }
                        }}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
                <View style={[Theme.width10p]}>
                  <BouncyCheckbox
                    disableBuiltInState={true}
                    isChecked={arr.length === 0 ? true : false}
                    iconStyle={Theme.borderRadius5}
                    onPress={isChecked => {
                      setArr([]);
                    }}
                  />
                </View>
                <View style={[Theme.width90p, Theme.separator]}>
                  <Text style={[Theme.textCaption, Theme.textBlack]}>
                    Doesn't matter
                  </Text>
                </View>
              </View>
              {array.map((data,index) => {
                return (
                  <View key={index} style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
                    <View style={[Theme.width10p]}>
                      <BouncyCheckbox
                        disableBuiltInState={true}
                        isChecked={arr.includes(data.label) ? true : false}
                        iconStyle={Theme.borderRadius5}
                        onPress={() => {
                          if (arr.includes(data.label)) {
                            const newArr = arr.filter(value => {
                              return value !== data.label;
                            });
                            setArr(newArr);
                          } else {
                            setArr([...arr, data.label]);
                          }
                        }}
                      />
                    </View>
                    <View style={[Theme.width90p, Theme.separator]}>
                      <Text style={[Theme.textCaption, Theme.textBlack]}>
                        {data.label}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
        <View style={[Theme.width100p, Theme.row, Theme.backgroundWhite]}>
          <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
            <LinearButton
              title="Cancel"
              noGradient={true}
              color="lightgrey"
              onPress={onPressCancel}
            />
          </View>
          <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
            <LinearButton title="Save" onPress={() => onPress(arr)} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConditionModal;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   TouchableWithoutFeedback,
//   Modal,
//   FlatList,
// } from 'react-native';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { LinearButton, LinearGradient } from '.';
// import { Theme } from '../Assets/Styles';

// const ConditionModal = ({
//   state,
//   onPress,
//   onPressCancel,
//   array,
//   selectedItems,
//   title,
// }) => {
//   const [arr, setArr] = useState(selectedItems);
//   return (
//     <Modal visible={state} animationType="fade" transparent={true}>
//       <TouchableOpacity
//         style={[
//           Theme.flex1,
//           Theme.alignContentCenter,
//           Theme.blackFaded,
//           Theme.padding10,
//           Theme.paddingHorizonal30p,
//         ]}
//         onPress={onPressCancel}>
//         {/* <ScrollView
//           contentContainerStyle={[Theme.flexGrow, Theme.backgroundWhite]}> */}
//         <TouchableWithoutFeedback>
//           <View style={[Theme.flex1, Theme.width100p, Theme.backgroundWhite]}>
//             <View style={[Theme.width100p]}>
//               <LinearGradient style={[Theme.width100p]}>
//                 <Text
//                   style={[
//                     Theme.textTitle,
//                     Theme.textBold,
//                     Theme.white,
//                     Theme.padding10,
//                   ]}>
//                   {title}
//                 </Text>
//               </LinearGradient>
//             </View>
//             <View
//               style={[
//                 Theme.width100p,
//                 Theme.row,
//                 Theme.alignCenter,
//                 Theme.flexWrap,
//                 Theme.padding10,
//               ]}>
//               {arr.map(data => {
//                 return (
//                   <View
//                     key={data}
//                     style={[
//                       Theme.modalButton,
//                       Theme.row,
//                       Theme.alignContentCenter,
//                       Theme.backgroundGray,
//                       Theme.paddingHorizonal5p,
//                     ]}>
//                     <Icon name="check" size={25} />
//                     <Text
//                       style={[Theme.textCaption, Theme.paddingHorizonal5p]}>
//                       {data}
//                     </Text>
//                     <Icon
//                       name="cancel"
//                       size={25}
//                       onPress={() => {
//                         if (arr.includes(data)) {
//                           const newArr = arr.filter(value => {
//                             return value !== data;
//                           });
//                           setArr(newArr);
//                         }
//                       }}
//                     />
//                   </View>
//                 );
//               })}
//             </View>
//             <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
//               <View style={[Theme.width10p]}>
//                 <BouncyCheckbox
//                   disableBuiltInState={true}
//                   isChecked={arr.length === 0 ? true : false}
//                   iconStyle={Theme.borderRadius5}
//                   onPress={isChecked => {
//                     setArr([]);
//                   }}
//                 />
//               </View>
//               <View style={[Theme.width90p, Theme.separator]}>
//                 <Text style={[Theme.textCaption, Theme.textBlack]}>
//                   Doesn't matter
//                 </Text>
//               </View>
//             </View>
//             <FlatList
//               keyExtractor={item => item.label}
//               data={array}
//               windowSize={100}             
//               renderItem={data => {
//                 return (
//                   <View
//                     style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
//                     <View style={[Theme.width10p]}>
//                       <BouncyCheckbox
//                         disableBuiltInState={true}
//                         isChecked={
//                           arr.includes(data.item.label) ? true : false
//                         }
//                         iconStyle={Theme.borderRadius5}
//                         onPress={() => {
//                           if (arr.includes(data.item.label)) {
//                             const newArr = arr.filter(value => {
//                               return value !== data.item.label;
//                             });
//                             setArr(newArr);
//                           } else {
//                             setArr([...arr, data.item.label]);
//                           }
//                         }}
//                       />
//                     </View>
//                     <View style={[Theme.width90p, Theme.separator]}>
//                       <Text style={[Theme.textCaption, Theme.textBlack]}>
//                         {data.item.label}
//                       </Text>
//                     </View>
//                   </View>
//                 );
//               }}
//             />
//             {/* {array.map(data => {
//                 return (
//                   <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
//                     <View style={[Theme.width10p]}>
//                       <BouncyCheckbox
//                         disableBuiltInState={true}
//                         isChecked={arr.includes(data.label) ? true : false}
//                         iconStyle={Theme.borderRadius5}
//                         onPress={() => {
//                           if (arr.includes(data.label)) {
//                             const newArr = arr.filter(value => {
//                               return value !== data.label;
//                             });
//                             setArr(newArr);
//                           } else {
//                             setArr([...arr, data.label]);
//                           }
//                         }}
//                       />
//                     </View>
//                     <View style={[Theme.width90p, Theme.separator]}>
//                       <Text style={[Theme.textCaption, Theme.textBlack]}>
//                         {data.label}
//                       </Text>
//                     </View>
//                   </View>
//                 );
//               })} */}
//           </View>
//         </TouchableWithoutFeedback>
//         {/* </ScrollView> */}
//         <View style={[Theme.width100p, Theme.row, Theme.backgroundWhite]}>
//           <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
//             <LinearButton
//               title="Cancel"
//               noGradient={true}
//               color="lightgrey"
//               onPress={onPressCancel}
//             />
//           </View>
//           <View style={[Theme.width50p, Theme.paddingHorizonal10p]}>
//             <LinearButton title="Save" onPress={() => onPress(arr)} />
//           </View>
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   );
// };

// export default ConditionModal;
