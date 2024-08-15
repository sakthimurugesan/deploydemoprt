import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ResetPassword() {
  const [new_password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const nav=useNavigate();
  // Hook to get the current location
  const location = useLocation();

  useEffect(() => {
    // Extract the token from the query parameters
    const queryParams = new URLSearchParams(location.search);
    const tokenFromUrl = queryParams.get('token');
    setToken(tokenFromUrl);
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (new_password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('https://13.48.59.223/password-reset-confirm/', {
        token,
        new_password: new_password,
      });

      alert('Your password has been reset successfully.');
      nav('/login')
    } catch (error) {
      console.error('Error resetting password:', error);
      alert('Failed to reset password.');
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '80vh' }}
      >
        <form onSubmit={handleSubmit} className="w-50">
          <h1>Reset Password</h1>

          {/* Password input */}
          <div className="form-outline mb-4" data-mdb-input-init>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              value={new_password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="form-label" htmlFor="newPassword">New Password</label>
          </div>

          {/* Confirm Password input */}
          <div className="form-outline mb-4" data-mdb-input-init>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Reset Password
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
