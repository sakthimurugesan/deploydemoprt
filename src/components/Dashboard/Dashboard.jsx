// src/components/dashboard/Dashboard.js

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AdminNav from './AdminNav';
const Dashboard = () => {
  return (
 <>
 <AdminNav></AdminNav>
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, admin! This is the admin dashboard.</p>
      <ul>
        <li><a href="/dashboard/events">Events</a></li>
        <li><a href="/dashboard/users">Users</a></li>
        <li><a href="/dashboard/contact">Contact Us</a></li>
        <li><a href="/dashboard/event-register">Event Register</a></li>
   
      </ul>

    </div>
 </>
  );
};

export default Dashboard;
