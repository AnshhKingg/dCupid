import {combineReducers} from 'redux';
import appEnv from './appEnv';
import auth from './auth';
import masterData from './masterData';
import profile from './profile';

const appReducer = combineReducers({
  appEnv,
  auth,
  masterData,
  profile,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
