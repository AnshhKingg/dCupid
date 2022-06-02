import {Constants} from '../constants/index';

const initialState = {
  data: {
    children: [],
    diet: [],
    drink: [],
    education: [],
    gender: [],
    highestEducation: [],
    interest: [],
    maritalStatus: [],
    privacy: [],
    profession: {},
    religion: [],
    skin: [],
    smoke: [],
  },
};

const masterData = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default masterData;
