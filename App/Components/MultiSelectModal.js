import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearButton, LinearGradient } from '.';
import { Theme } from '../Assets/Styles';

const ConditionModal = ({ state, onPress, onPressCancel, array }) => {
  const [arr, setArr] = useState([])
  return (
    <Modal visible={state} animationType="fade" transparent={true}>
      <TouchableOpacity
        style={[
          Theme.flex1,
          Theme.alignContentCenter,
          Theme.blackFaded,
          Theme.padding10,
          Theme.paddingHorizonal30p
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
                    Skin Condition
                  </Text>
                </LinearGradient>
              </View>
              <View
                style={[
                  Theme.width100p,
                  Theme.row,
                  Theme.alignCenter,
                  { flexWrap: 'wrap' },
                  Theme.padding10,
                ]}>
                {arr.map(data => {
                  return (
                    <View
                      style={[
                        Theme.modalButton,
                        Theme.row,
                        Theme.alignContentCenter,
                        Theme.backgroundGray,
                        Theme.paddingHorizonal10p,
                      ]}>
                      <Icon name="check" size={30} />
                      <Text style={[Theme.textCaption, Theme.paddingHorizonal10p]}>
                        {data}
                      </Text>
                      <Icon name="cancel" size={25} onPress={() => {
                        if (arr.includes(data)) {
                          const newArr = arr.filter((value) => {
                            return value !== data
                          })
                          setArr(newArr)
                        }
                      }} />
                    </View>
                  )
                })}
              </View>
              <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
                <View style={[Theme.width10p]}>
                  <BouncyCheckbox
                    iconStyle={{ borderRadius: 5 }}
                    onPress={isChecked => {
                      setArr(['Doesnt matter'])
                    }}
                  />
                </View>
                <View style={[Theme.width90p, Theme.separator]}>
                  <Text style={[Theme.textCaption, Theme.textBlack]}>
                    Doesn't matter
                  </Text>
                </View>
              </View>
              {array.map(data => {

                return (
                  <View style={[Theme.row, Theme.alignCenter, Theme.padding10]}>
                    <View style={[Theme.width10p]}>
                      <BouncyCheckbox
                        iconStyle={{ borderRadius: 5 }}
                        onPress={isChecked => {
                          if (arr.includes(data.label)) {
                            const newArr = arr.filter((value) => {
                              return value !== data.label
                            })
                            setArr(newArr)
                          } else {
                            setArr([...arr, data.label])
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
            <LinearButton title="Save" onPress={onPress} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConditionModal;
