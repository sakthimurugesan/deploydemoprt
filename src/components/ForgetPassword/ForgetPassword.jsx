import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import React, { useState } from 'react';
import axios from 'axios';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('https://13.48.59.223/password-reset/', { email });
    try {
      console.log(response.data);
      alert('Password reset link sent to your email.');
    } catch (error) {
      console.error('Error sending password reset request:', error);
      alert('Failed to send password reset link.');
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
          {/* Email input */}
          <div className="form-outline mb-4" data-mdb-input-init>
            <input 
              type="email" 
              id="form2Example1" 
              className="form-control" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <label className="form-label" htmlFor="form2Example1">Email address</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Send Password Reset Link
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
