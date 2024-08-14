import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './AdminNav'

const EventRegisterDash = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://51.20.31.249/event_register/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/event-register-edit/${id}`);
  };

  const handleAddNewEvent = () => {
    navigate('/dashboard/adduser');
  };

  return (
    <>
    <AdminNav></AdminNav>
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Bussniess Name</th>
              <th>City</th>
             
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>{item.businessName}</td>
                <td>{item.city}</td>
               
                <td>
                  <a href={`/event-register-edit/${item.id}`}>
                  
                  <Button
                    variant="success"
                    
                  >
                    View
                  </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
    </div>
    </>
  );
};

export default EventRegisterDash;
