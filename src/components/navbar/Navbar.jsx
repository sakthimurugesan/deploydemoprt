import './navbar.css'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userAction';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => {
      toast.error("Logged out successfully!");
      
    }, 500);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0 text-white" href="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {name ? (
          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell text-white"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Some news</a></li>
                <li><a className="dropdown-item" href="#">Another news</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow text-white"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li><a className="dropdown-item" href="#">{name}</a></li>
                <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        ) : (
          <Link className="btn btn-light" to="/login">Login</Link>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
