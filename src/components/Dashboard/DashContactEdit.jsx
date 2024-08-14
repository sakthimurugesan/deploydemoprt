import AdminNav from './AdminNav';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DashContactEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy:false
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://51.20.31.249/contactus/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const handleSave = async () => {
    try {
      await axios.put(`http://51.20.31.249/contactus/${id}/`, event);
      
      setTimeout(() => {
     toast.success('Message edited Successfuly !!!');

  }, 500);
      navigate('/dashboard/contact');
    } catch (error) {
      console.log()
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://51.20.31.249/contactus/${id}/`);
      setTimeout(() => {
        toast.error('Message Deleted successful!');
        
      }, 500);
      navigate('/dashboard/contact');
    } catch (error) {
      console.error('Error deleting Message:', error);
    }
  };

  return (


    <>
    <AdminNav></AdminNav>
    <div className="container mt-4">
      <h2>Edit Message</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={event.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={event.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            value={event.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
  <input
    className="form-check-input me-2"
    type="checkbox"
    id="form4Example4"
    name="sendCopy"
    checked={event.sendCopy}
    onChange={handleChange}
  />
  <label className="form-check-label" htmlFor="form4Example4">
    Send me a copy of this message
  </label>
</div>


        <button type="button" className="btn btn-success ms-2" onClick={handleSave}>
          Save
        </button>
        <button type="button" className="btn btn-danger ms-2" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
    </>
  );
};

export default DashContactEdit;
