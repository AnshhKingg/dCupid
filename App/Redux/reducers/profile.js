import {Constants} from '../constants/index';

const initialState = {
  user: {
    age: null,
    children: null,
    city: null,
    country: null,
    createdAt: '',
    diet: null,
    dob: null,
    drink: null,
    education: null,
    email: null,
    fbUrl: null,
    firstForm: false,
    gender: null,
    highestEdu: null,
    interest: null,
    isActive: true,
    marital: null,
    name: null,
    number: '',
    privacy: null,
    profession: null,
    religion: null,
    secondForm: false,
    skin: null,
    smoke: null,
    state: null,
    uid: '',
    updatedAt: '',
  },
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_PROFILE:
      return {
        user: action.payload,
      };
    case Constants.REMOVE_PROFILE:
      return {
        user: state,
      };

    default:
      return state;
  }
};

export default profile;
