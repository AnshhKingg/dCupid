import { combineReducers } from 'redux';
import appEnv from './appEnv';
import auth from './auth';
import masterData from './masterData';
import profile from './profile';
import blockUser from './blockUser';
import likeUser from './likeUser';
import chat from './chat';

const appReducer = combineReducers({
  appEnv,
  auth,
  masterData,
  profile,
  blockUser,
  likeUser,
  chat
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
