import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const email = useSelector((state) => state.user.email);

  // Check if the logged-in user is admin with the given pattern
  const isAdmin = /^admin\d*@elite\.com$/.test(email);

  return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
