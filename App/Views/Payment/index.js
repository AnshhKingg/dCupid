import {
  ActivityIndicator,
  Alert,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../Redux/actions';
import axiosServ from '../../service/axios';
import axios from 'axios';

const Payment = ({navigation}) => {
  const dis = useDispatch();
  const token = useSelector(state => state.auth.token);
  const state = {
    login: '192',
    password: 'Test@123',
    prodid: 'NSE',
    currency: 'INR',
    amount: '1000.00',
    usersname: 'Demo Name',
    emailId: 'abc@xyz.com',
    phone: '8888888888',
    address: 'India',
    clientcode: '007',
    reqhashKey: 'KEY123657234',
    resenckey: 'KEYRESP123657234',
    seturl: 'https://paynetzuat.atomtech.in/paynetz/epi/fts',
    requestEncypritonKey: '8E41C78439831010F81F61C344B7BFC7',
    requestSalt: '8E41C78439831010F81F61C344B7BFC7',
    responseEncypritonKey: '8E41C78439831010F81F61C344B7BFC7',
    responseSalt: '8E41C78439831010F81F61C344B7BFC7',
    ru: 'https://0c86-103-46-203-163.in.ngrok.io/api/v1/payment/complete-pay',
  };
  const LoadingIndicatorView = () => {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        // style={styles.ActivityIndicatorStyle}
      />
    );
  };

  const sendPayment = body => {
    axiosServ(token)
      .post('/payment/complete-pay', {bank_txn: body})
      .then(resp => {
        Alert.alert('Payment success');
        navigation.navigate('membership');
        console.log(resp);
        dis(getProfile());
      })
      .catch(er => {
        console.log(er);
        Alert.alert('Payment failed');
        navigation.navigate('membership');
      });
  };

  const getEventData = data => {
    console.log('Data ', data);

    let mystr = data;

    //Splitting it with : as the separator
    let myarr = mystr.split(',');

    // Show the resulting value
    console.log(myarr);

    console.log('date = ', myarr[0]);
    console.log('CardNumber = ', myarr[1]);
    console.log('surcharge = ', myarr[2]);
    console.log('clientcode = ', myarr[3]);
    console.log('udf15 = ', myarr[4]);
    console.log('udf14 = ', myarr[5]);
    console.log('signature = ', myarr[6]);
    console.log('udf13 = ', myarr[7]);
    console.log('udf12 = ', myarr[8]);
    console.log('udf11 = ', myarr[9]);
    console.log('amt = ', myarr[10]);
    console.log('udf10 = ', myarr[11]);
    console.log('merchant_id = ', myarr[12]);
    console.log('mer_txn = ', myarr[13]);
    console.log('f_code = ', myarr[14]);
    console.log('bank_txn = ', myarr[15]);
    console.log('udf9 = ', myarr[16]);
    console.log('ipg_txn_id = ', myarr[17]);
    console.log('bank_name = ', myarr[18]);
    console.log('prod = ', myarr[19]);
    console.log('mmp_txn = ', myarr[20]);
    console.log('udf5 = ', myarr[21]);
    console.log('udf6 = ', myarr[22]);
    console.log('udf3 = ', myarr[23]);
    console.log('udf4 = ', myarr[24]);
    console.log('udf1 = ', myarr[25]);
    console.log('udf2 = ', myarr[26]);
    console.log('discriminator = ', myarr[27]);
    console.log('auth_code = ', myarr[28]);
    console.log('desc = ', myarr[29]);
    console.log(typeof myarr[14]);
    if (myarr[14] === 'Ok') {
      sendPayment(myarr[15]);
    } else {
      Alert.alert('Payment failed. Please try again.');
      navigation.navigate('membership');
    }
  };
  return (
    <WebView
      source={{
        uri: 'https://www.atomtech.in/enc-api/aes-mobile/initiateAESPay',
        method: 'POST',
        body:
          'login=' +
          state.login +
          '&password=' +
          state.password +
          '&prodid=' +
          state.prodid +
          '&currency=' +
          state.currency +
          '&amount=' +
          state.amount +
          '&usersname=' +
          state.usersname +
          '&emailId=' +
          state.emailId +
          '&phone=' +
          state.phone +
          '&address=' +
          state.address +
          '&clientcode=' +
          state.clientcode +
          '&reqhashKey=' +
          state.reqhashKey +
          '&resenckey=' +
          state.resenckey +
          '&seturl=' +
          state.seturl +
          '&requestEncypritonKey=' +
          state.requestEncypritonKey +
          '&requestSalt=' +
          state.requestSalt +
          '&responseEncypritonKey=' +
          state.responseEncypritonKey +
          '&responseSalt=' +
          state.responseSalt +
          '&returnUrl=' +
          state.ru,
      }}
      originWhitelist={['https://*', 'upi://*']}
      javaScriptEnabled={true}
      renderLoading={LoadingIndicatorView}
      startInLoadingState={true}
      onShouldStartLoadWithRequest={request => {
        let url = request.url;
        console.log(url);
        if (url.startsWith('upi:')) {
          Linking.openURL(url).catch(e => {
            alert(
              'Error occured !! \nkindly check if you have upi apps installed or not !',
            );
          });
          return false;
        }
        return true;
      }}
      onError={syntheticEvent => {
        const {nativeEvent} = syntheticEvent;
        alert('WebView error: ', nativeEvent);
      }}
      onMessage={event => getEventData(event.nativeEvent.data)}
    />
  );
};

export default Payment;
