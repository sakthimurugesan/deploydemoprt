// src/redux/userReducer.js

import { SET_USER, LOGOUT } from './userAction';

const initialState = {
  name: JSON.parse(localStorage.getItem('user'))?.name || null,
  email: JSON.parse(localStorage.getItem('user'))?.email || null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { name: null, email: null };
    default:
      return state;
  }
};

export default userReducer;
