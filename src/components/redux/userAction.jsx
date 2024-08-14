// src/redux/userAction.js

export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = (name, email) => {
  const userData = { name, email };
  localStorage.setItem('user', JSON.stringify(userData)); // Save user data to localStorage
  return { type: SET_USER, payload: userData };
};

export const logout = () => {
  localStorage.removeItem('user'); // Remove user data from localStorage
  return { type: LOGOUT };
};
