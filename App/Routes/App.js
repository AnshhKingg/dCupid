import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigation/Navigator';
import {Provider} from 'react-redux';
import {store} from '../Redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {Theme} from '../Assets/Styles';

const persistedStore = persistStore(store);

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      text1Style={Theme.toastFontBig}
      text2Style={Theme.toastFontMed}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={Theme.toastFontBig}
      text2Style={Theme.toastFontMed}
    />
  ),
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Navigator />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};
export default App;
