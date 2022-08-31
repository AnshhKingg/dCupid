import {Constants} from '../constants/index';

const initialState = {
  user: {
    isDeleted: false,
    age: null,
    otp: null,
    paid: false,
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
    photos: [],
    skin: null,
    smoke: null,
    state: null,
    uid: '',
    updatedAt: '',
    timezone: '',
    subscriptionExpiry: null,
  },
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_PROFILE:
      return {
        user: action.payload,
      };
    case Constants.REMOVE_PROFILE:
      return initialState;

    default:
      return state;
  }
};

export default profile;
