import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, sendCopy } = formData;
  
    if (!name || !email || !message) {
      setTimeout(() => {
        toast.error("Please fill out all fields.");
      }, 500);
      return;
    }
  
    if (!validateEmail(email)) {
      setTimeout(() => {
        toast.error("Invalid email address.");
        
      }, 500);
      return;
    }
  
    try {
      // Send form data to JSON server
      await axios.post('http://51.20.31.249/contactus/', formData);
  
      // Notify user of success
      setTimeout(() => {
        toast.success("Message sent successfully!");

      }, 500);
  
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
        sendCopy: false,
      });
    } catch (error) {
      // Notify user of error
      setTimeout(() => {
        toast.error("Failed to send message. Please try again.");
      }, 500);
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
<>
<title>Contact Us</title>
<Navbar></Navbar>
<div className="container mt-5 form-div">
      
      <form  style={{ width: '26rem' }} onSubmit={handleSubmit}>

    <h1>Contact US</h1>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form4Example1">Name</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form4Example2">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form4Example3">Message</label>
        </div>

        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            id="form4Example4"
            name="sendCopy"
            checked={formData.sendCopy}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
      </form>
     <div className="contact-img"></div>


    </div>
<Footer></Footer>
</>
  );
};

export default ContactForm;
