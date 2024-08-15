import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const EventRegister = () => {
  const { eventId } = useParams(); // Extract eventId from the URL parameters
  const { name } = useSelector((state) => state.user); // Access user data from Redux
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    businessName: '',
    organizationName: '',
    businessAddress: '',
    city: '',
    state: '',
    zipcode: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name) {
      toast.error('Please log in to register.', { autoClose: 3000 });
      navigate('/login');
      return;
    }
  
    const userIdString = localStorage.getItem('userId');
    const userId = parseInt(userIdString, 10);
    const parsedEventId = parseInt(eventId, 10);
  
    if (!userId) {
      toast.error('User not logged in. Please log in.', { autoClose: 3000 });
      navigate('/login');
      return;
    }
  
    setIsSubmitting(true);
  
    const age = parseInt(formData.age, 10);
    if (isNaN(age)) {
      toast.error('Please enter a valid age.', { autoClose: 3000 });
      setIsSubmitting(false);
      return;
    }
  
    const data = { 
      ...formData, 
      userId, 
      eventId: parsedEventId, 
      age: age 
    };
  
    console.log('Submitting data:', data);
  
    try {
      const response = await axios.post('https://13.48.59.223/event_register/', data);
      console.log('Response status:', response.status);
  
      if (response.status === 201) {
        toast.success('Registration successful!', { autoClose: 3000 });
        setTimeout(() => {
          navigate('/events');
        }, 1000); // Delay navigation to ensure toast is visible
      } else if (response.status === 409) {
        toast.error('You have already registered.', { autoClose: 3000 });
        setTimeout(() => {
          navigate('/events');
        }, 1000); // Delay navigation to ensure toast is visible
      } else {
        toast.error('Registration failed. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Request failed with error:', error);
      if (error.response && error.response.status === 409) {
        toast.error('You have already registered.', { autoClose: 3000 });
        setTimeout(() => {
          navigate('/events');
        }, 1000); // Delay navigation to ensure toast is visible
      } else if (error.response && error.response.data.detail) {
        toast.error(error.response.data.detail, { autoClose: 3000 });
      } else {
        toast.error('An error occurred. Please try again later.', { autoClose: 3000 });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  
  
  

  return (
    <>
      <title>Register for Event</title>
      <Navbar />
      <div className="container mt-5 form-div">
        <form style={{ width: '30rem' }} onSubmit={handleSubmit}>
          <h1>Event Registration</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="lastName"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="email">Email</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="age"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="age">Age</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="businessName"
                  className="form-control"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="businessName">Business Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="organizationName"
                  className="form-control"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="organizationName">Organization Name</label>
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
            <textarea
              id="businessAddress"
              className="form-control"
              rows={4}
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="businessAddress">Business Address</label>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="city">City</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="state">State</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="zipcode"
                  className="form-control"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="zipcode">Zipcode</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default EventRegister;
