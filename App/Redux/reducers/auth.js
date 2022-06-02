import {Constants} from '../constants/index';

const initialState = {
  newRegisteration: false,
  token: null,
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
    firstForm: null,
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
    secondForm: null,
    skin: null,
    smoke: null,
    state: null,
    uid: '',
    updatedAt: '',
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case Constants.SET_AUTHKEY:
      return action.payload;
    case Constants.LOGOUT:
      return {
        newRegisteration: false,
        token: null,
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
          firstForm: null,
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
          secondForm: null,
          skin: null,
          smoke: null,
          state: null,
          uid: '',
          updatedAt: '',
        },
      };

    default:
      return state;
  }
};

export default auth;
