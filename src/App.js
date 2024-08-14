import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { ToastContainer } from 'react-toastify';
import Event from './components/events/Events';
import EventDetail from './components/eventdetail/EventDetail';
import Contact from './components/contact/contact';
import EventRegister from './components/eventregister/EventRegister';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import AboutUs from './components/aboutus/Aboutus';
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import DashEvent from './components/Dashboard/DashEvent';
import EventEdit from './components/Dashboard/DashEventEdit'; 
import DashEventAdd from './components/Dashboard/DashEventAdd';
import DashUser from './components/Dashboard/DashUser';
import DashUserEdit from './components/Dashboard/DashUserEdit';
import DashUserAdd from './components/Dashboard/DashUserAdd';
import DashContact from './components/Dashboard/DashContact';
import DashContactEditEdit from './components/Dashboard/DashContactEdit';
import EventRegisterDash   from './components/Dashboard/EventRegister';
import EventRegisterEdit from './components/Dashboard/EventRegisterEdit';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ForgetPassword/ResetPassword';
import AdminLogin from './components/Dashboard/AdminLogin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/event-register/:eventId" element={<EventRegister />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/terms-condition" element={<TermsAndConditions />} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
        <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute>}/>
        <Route path="/dashboard/events" element={ <PrivateRoute> <DashEvent /> </PrivateRoute>}/>
        <Route path="/events-edit/:id" element={ <PrivateRoute> <EventEdit /> </PrivateRoute>}/>
        <Route path="/event-add" element={ <PrivateRoute> <DashEventAdd /> </PrivateRoute>}/>
        <Route path="/dashboard/users" element={ <PrivateRoute> <DashUser /> </PrivateRoute>}/>
        <Route path="/users-edit/:id" element={ <PrivateRoute> <DashUserEdit /> </PrivateRoute>}/>
        <Route path="/users-add" element={ <PrivateRoute> <DashUserAdd /> </PrivateRoute>}/>
        <Route path="/dashboard/contact" element={ <PrivateRoute> <DashContact /> </PrivateRoute>}/>
        <Route path="/contact-edit/:id" element={ <PrivateRoute> <DashContactEditEdit /> </PrivateRoute>}/>
        <Route path="/dashboard/event-register" element={ <PrivateRoute> <EventRegisterDash /> </PrivateRoute>}/>
        <Route path="/event-register-edit/:id" element={ <PrivateRoute> <EventRegisterEdit /> </PrivateRoute>}/>
        <Route path='/admin-login' element={<AdminLogin></AdminLogin>}></Route>
      
      </Routes>

    </Router>
  );
}

export default App;
