import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigation/Navigator';
import {Provider} from 'react-redux';
import {store} from '../Redux/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import Toast from 'react-native-toast-message';

const persistedStore = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <Navigator />
        <Toast />
      </PersistGate>
    </Provider>
  );
};
export default App;
