import { combineReducers } from 'redux';
import appEnv from './appEnv';
import auth from './auth'

const appReducer = combineReducers({
  appEnv, auth
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
