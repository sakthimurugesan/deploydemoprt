import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userAction'; // Import setUser action
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      setIsLoading(false); // Reset loading
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email address.");
      setIsLoading(false); // Reset loading
      return;
    }

    try {
      const response = await axios.get(`https://13.48.59.223/users?email=${email}`);

      if (response.data.length === 0) {
        toast.error("Email not found. Please register.");
      } else if (response.data[0].password !== password) {
        toast.error("Incorrect password.");
      } else {
        const user = response.data[0];
        dispatch(setUser(user.name, email));
        localStorage.setItem('userId', user.id); // Save user ID to localStorage
        toast.success("Login successful!");
        navigate('/');
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading after the request is finished
    }
  };

  return (
    <>
      <title>Login</title>
      <Navbar />
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button type="submit" className="btn btn-info btn-lg btn-block" disabled={isLoading}>
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                  </div>
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="/forget-password">Forgot password?</a></p>
                  <p>Don't have an account? <a href="/signup" className="link-info">Register here</a></p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
                alt="Login"
                className="w-100 vh-100"
                style={{ objectFit: 'cover', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
