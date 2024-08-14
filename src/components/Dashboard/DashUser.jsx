import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashUser = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://51.20.31.249/users/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/users-edit/${id}`);
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
             
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
               
                <td>
                  <a href={`/users-edit/${item.id}`}>
                  
                  <Button
                    variant="warning"
                    
                  >
                    Edit
                  </Button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a style={{
          position: 'fixed',
          top: '50px',
          right: '20px',
          zIndex: 1000
        }} href='/users-add'>


      <Button
        variant="danger"
   
      >
        Add New User
      </Button>
        </a>
    </div>
    </>
  );
};

export default DashUser;
