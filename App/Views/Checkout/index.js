import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Images} from '../../Assets/Images';
import {Theme} from '../../Assets/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {updateAdrss, resetAdrss} from '../../Redux/actions';

const Checkout = ({navigation}) => {
  const [address, setAddress] = useState('4904 Goldner Ranch');
  var savedAddress = useSelector(state => state.appEnv.address);
  const dispatch = useDispatch();

  useEffect(() => {
    setAddress(savedAddress);
  }, [savedAddress]);

  var updateAddress = value => {
    dispatch(updateAdrss(value));
  };

  var resetAddress = () => {
    dispatch(resetAdrss());
  };

  return (
    <>
      <ImageBackground source={Images.BG}>
        <SafeAreaView style={[Theme.height100p]}>
          <View style={[Theme.mainHeadingView, Theme.justifySpcBtw]}>
            <TouchableOpacity
              style={[Theme.marginTop10, Theme.row]}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={[Theme.subHeading]}> {'< Back'} </Text>
            </TouchableOpacity>
            <View>
              <Text style={[Theme.mainHeading]}>Checkout</Text>
            </View>
          </View>
          <ScrollView style={[]}>
            <View style={[Theme.totalView]}>
              <View style={[Theme.marginTop15]}>
                <Text style={[Theme.checkoutHeadings]}>Delivery Address</Text>
                <View style={[Theme.selectedBox, Theme.marginTop15]}>
                  <View style={[Theme.row]}>
                    <View style={[Theme.width90p]}>
                      <Text style={[Theme.addressHeading]}>Address #1</Text>
                      <TextInput
                        style={[]}
                        placeholder={'Address'}
                        value={address}
                        onChangeText={text => updateAddress(text)}
                      />
                    </View>
                    <View style={[Theme.width10p]}>
                      <Icon
                        name="checkmark-circle"
                        style={[Theme.iconStyle]}
                        size={25}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[Theme.marginTop15]}>
                <Text style={[Theme.checkoutHeadings]}>Payment Method</Text>
                <View style={[Theme.unselectedBox, Theme.marginTop15]}>
                  <View style={[Theme.row]}>
                    <View style={[Theme.width10p]}>
                      <Fontisto name="visa" size={20} />
                    </View>
                    <View style={[Theme.width80p]}>
                      <Text style={[Theme.marginLeft10]}>
                        **** **** **** 5967
                      </Text>
                    </View>
                    <View style={[Theme.width10p]}>
                      {/* <Icon
                      name="checkmark-circle"
                      style={[Theme.iconStyle]}
                      size={25}
                    /> */}
                    </View>
                  </View>
                </View>
                <View style={[Theme.selectedBox, Theme.marginTop15]}>
                  <View style={[Theme.row]}>
                    <View style={[Theme.width10p]}>
                      <Fontisto name="paypal-p" size={25} />
                    </View>
                    <View style={[Theme.width80p]}>
                      <Text style={[Theme.marginLeft10]}>
                        **** **** **** 5967
                      </Text>
                    </View>
                    <View style={[Theme.width10p]}>
                      <Icon
                        name="checkmark-circle"
                        style={[Theme.iconStyle]}
                        size={25}
                      />
                    </View>
                  </View>
                </View>
                <View style={[Theme.unselectedBox, Theme.marginTop15]}>
                  <View style={[Theme.row]}>
                    <View style={[Theme.width10p]}>
                      <Fontisto name="mastercard" size={20} />
                    </View>
                    <View style={[Theme.width80p]}>
                      <Text style={[Theme.marginLeft10]}>
                        **** **** **** 5967
                      </Text>
                    </View>
                    <View style={[Theme.width10p]}>
                      {/* <Icon
                      name="checkmark-circle"
                      style={[Theme.iconStyle]}
                      size={25}
                    /> */}
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={[Theme.alignContentCenter, Theme.buttonLook]}>
                <Text style={[Theme.buttonText]}>Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[Theme.alignContentCenter, Theme.buttonLook]}
                onPress={resetAddress}>
                <Text style={[Theme.buttonText]}>Reset Address</Text>
              </TouchableOpacity>
            </View>
            <View style={[Theme.alignContentCenter]}>
              <Ionicons
                name="finger-print-outline"
                // style={[Theme.iconStyle]}
                size={60}
              />
              <Text>Pay with Touch ID</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default Checkout;
