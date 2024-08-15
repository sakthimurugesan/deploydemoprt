import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './AdminNav'
import { toast } from 'react-toastify';
const EventRegisterEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
   
  firstName: "",
      lastName: "",
      email: "",
      age: "",
      businessName: "",
      organizationName: "",
      businessAddress: "",
      city: "",
      state: "",
      zipcode: "",
      userId: 0,
      eventId: 0,
      id:0
  
    
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://13.48.59.223/event_register/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleListChange = (type, index, value) => {
    setEvent((prevEvent) => {
      const list = [...prevEvent[type]];
      list[index] = value;
      return { ...prevEvent, [type]: list };
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`https://13.48.59.223/event_register/${id}/`, event);
      setTimeout(() => {
        toast.success('Registration Edited successful!');
        
      }, 500);
      navigate('/dashboard/event-register');
    } catch (error) {
      console.error('Error updating Contact Form:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://13.48.59.223/event_register/${id}`);
      setTimeout(() => {
        toast.error('Registeration Deleted successful!');
        
      }, 500);
      navigate('/dashboard/event-register');
    } catch (error) {
      console.error('Error deleting users:', error);
    }
  };

  const handleAddField = (type) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [type]: [...prevEvent[type], ''],
    }));
  };

  const handleRemoveField = (type, index) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [type]: prevEvent[type].filter((_, i) => i !== index),
    }));
  };

  return (
    <>
    <AdminNav></AdminNav>
    <div className="container mt-4">
      <h2>Edit Registered Data</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={event.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={event.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={event.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">BusinessName</label>
          <input
            type="text"
            className="form-control"
            name="businessName"
            value={event.businessName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">OrganizationName</label>
          <input
            type="text"
            className="form-control"
            name="organizationName"
            value={event.organizationName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">city</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={event.city}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">state</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={event.state}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">zipcode</label>
          <input
            type="text"
            className="form-control"
            name="businessName"
            value={event.zipcode}
            onChange={handleChange}
          />
        </div>
       
       
        <button type="button" className="btn btn-primary" onClick={handleSave}>
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

export default EventRegisterEdit;
