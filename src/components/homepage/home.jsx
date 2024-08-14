import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import './home.css';
import TestimonialSlider from './Slider';

function Home() {
  const { name } = useSelector((state) => state.user);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch all events
    axios.get('http://51.20.31.249/events/')
      .then(response => {
        // Filter events where trend is true (1)
        const trendingEvents = response.data.filter(event => event.trend === 1);
        setEvents(trendingEvents);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setTimeout(() => {
          toast.error('Error fetching events. Please try again later.');
        }, 500);
      });
  }, []);

  return (
    <>
      <title>Elite Corporate Event Management</title>
      <Navbar />
      <div className="home-img">
        <div className="overlay"></div>
        <div className="content">
          <h1>Elite Corporate Event Management</h1>
        </div>
      </div>
      <h2 className='head-1'>Upcoming Events</h2>
      <div className="event-100-1">
        <div className="event-80-1">
          {events.map((event) => (
            <div key={event.id} className="event-card-1">
              <div className="event-img-">
                {/* Display an image if available */}
                {event.image && <img className='event-card-img-1' src={event.image} width={300} height={210} alt={event.name} />}
              </div>
              <div className="event-title-1">
                <h5>{event.name}</h5>
              </div>
              <div className="event-details-1">
                <div className="event-detail-value-1">
                  <span><b>Place</b></span>
                  <span>{event.place}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Date</b></span>
                  <span>{event.date}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Organizer</b></span>
                  <span>{event.organizer}</span>
                </div>
                <div className="event-detail-value-1">
                  <span><b>Location</b></span>
                  <span>{event.location}</span>
                </div>
                <a href={`/events/${event.id}`}>
                  <button type="button" className="btn btn-primary">View Event</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TestimonialSlider />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Home;
