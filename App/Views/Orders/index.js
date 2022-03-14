import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../Assets/Images';
import {Theme} from '../../Assets/Styles';

const Orders = ({navigation}) => {
  return (
    <>
      <ImageBackground source={Images.BG}>
        <SafeAreaView style={[Theme.height100p]}>
          <View style={[Theme.mainHeadingView, Theme.row, Theme.justifySpcBtw]}>
            <View>
              <Text style={[Theme.mainHeading]}>Order</Text>
            </View>
            <View style={[Theme.marginTop10]}>
              <Text style={[Theme.subHeading]}>Close</Text>
            </View>
          </View>
          <ScrollView style={[]}>
            <View style={[Theme.totalView]}>
              <View style={[Theme.row, Theme.justifySpcBtw, Theme.space]}>
                <Text style={[Theme.totalTitle]}>Subtotal</Text>
                <Text style={[Theme.totalValue]}>$49.50</Text>
              </View>
              <View style={[Theme.row, Theme.justifySpcBtw, Theme.space]}>
                <Text style={[Theme.totalTitle]}>Tax & Fees</Text>
                <Text style={[Theme.totalValue]}>$2.75</Text>
              </View>
              <View style={[Theme.row, Theme.justifySpcBtw, Theme.space]}>
                <Text style={[Theme.totalTitle]}>Delivery</Text>
                <Text style={[Theme.totalValue]}>Free</Text>
              </View>
              <View style={[Theme.separator, Theme.marginTop15]} />
              <View style={[Theme.row, Theme.justifySpcBtw, Theme.space]}>
                <Text style={[Theme.gtotalTitle]}>Total</Text>
                <Text style={[Theme.gtotalValue]}>$52.25</Text>
              </View>
            </View>
            <View style={[Theme.selectedItems]}>
              <View style={[Theme.row, Theme.separator, Theme.commonParent]}>
                <View style={[Theme.commonViewLeft]}>
                  <Image style={[Theme.commonImage]} source={Images.DEMO} />
                </View>
                <View style={[Theme.commonViewRight]}>
                  <View>
                    <Text style={[Theme.orderHeading]}>Crispy Chikan San</Text>
                  </View>
                  <View>
                    <Text style={[Theme.orderSubHeading]}>
                      2X Tuna Curry, 3X Vegetable, 1X Noodle
                    </Text>
                  </View>
                  <View style={[Theme.marginTop15]}>
                    <Text style={[Theme.orderPrice]}>$200</Text>
                  </View>
                </View>
              </View>

              <View style={[Theme.row, Theme.separator, Theme.commonParent]}>
                <View style={[Theme.commonViewLeft]}>
                  <Image style={[Theme.commonImage]} source={Images.DEMO} />
                </View>
                <View style={[Theme.commonViewRight]}>
                  <View>
                    <Text style={[Theme.orderHeading]}>
                      Prawn & chicken Roll
                    </Text>
                  </View>
                  <View>
                    <Text style={[Theme.orderSubHeading]}>
                      2X Tuna Curry, 3X Vegetable, 1X Noodle
                    </Text>
                  </View>
                  <View style={[Theme.marginTop15]}>
                    <Text style={[Theme.orderPrice]}>$200</Text>
                  </View>
                </View>
              </View>

              <View style={[Theme.row, Theme.separator, Theme.commonParent]}>
                <View style={[Theme.commonViewLeft]}>
                  <Image style={[Theme.commonImage]} source={Images.DEMO} />
                </View>
                <View style={[Theme.commonViewRight]}>
                  <View>
                    <Text style={[Theme.orderHeading]}>Braised Fish Head</Text>
                  </View>
                  <View>
                    <Text style={[Theme.orderSubHeading]}>
                      2X Tuna Curry, 3X Vegetable, 1X Noodle
                    </Text>
                  </View>
                  <View style={[Theme.marginTop15]}>
                    <Text style={[Theme.orderPrice]}>$200</Text>
                  </View>
                </View>
              </View>

              <View style={[Theme.row, Theme.separator, Theme.commonParent]}>
                <View style={[Theme.commonViewLeft]}>
                  <Image style={[Theme.commonImage]} source={Images.DEMO} />
                </View>
                <View style={[Theme.commonViewRight]}>
                  <View>
                    <Text style={[Theme.orderHeading]}>Salad Fritters</Text>
                  </View>
                  <View>
                    <Text style={[Theme.orderSubHeading]}>
                      2X Tuna Curry, 3X Vegetable, 1X Noodle
                    </Text>
                  </View>
                  <View style={[Theme.marginTop15]}>
                    <Text style={[Theme.orderPrice]}>$200</Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[Theme.alignContentCenter, Theme.buttonLook]}
              onPress={() => {
                navigation.navigate('help');
              }}>
              <Text style={[Theme.buttonText]}>Checkout</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default Orders;
