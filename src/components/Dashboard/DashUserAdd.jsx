import AdminNav from './AdminNav'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const DashUserAdd = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
     
      name: '',
      email: '',
      password: '',
      "termsAccepted": false
      
    });
  
    useEffect(() => {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`http://51.20.31.249/users/${id}`);
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
        console.log(event)

        await axios.post(`http://51.20.31.249/users/`, event);
        setTimeout(() => {
          toast.success("User Added Successfully")
        }, 500);
        navigate('/dashboard/users');
      } catch (error) {
        console.error('Error Adding users:', error);
      }
    };
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://51.20.31.249/users/${id}`);
        navigate('/dashboard/users');
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
        <h2>Add User</h2>
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
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              value={event.password}
              onChange={handleChange}
            />
          </div>
         
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        
        </form>
      </div>
  </>
    );
};

export default DashUserAdd;
