import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'auth',
    'masterData',
    'profile',
    'likeUser',
    'blockUser',
    'chat',
    'chatRequested',
    'chatDeclined',
    'likesReceived',
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware = [];
middleware = [...middleware, thunk];

const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware)),
);

const getStore = () => {
  return store;
};

export {store, getStore};
