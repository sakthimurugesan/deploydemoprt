import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './events.css';
import EventDate from './EventDate';

const Event = () => {
  const [events, setEvents] = useState([]); // State to hold event data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://13.48.59.223/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch events.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (events.length === 0) return <p>No events available.</p>;

  return (
    <>
    <title>Events</title>
      <Navbar />
        <h1 className='head-1'>Events</h1>
      <div className="event-100">
        <div className="event-80">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-img">
                {/* Display an image if available */}
                {event.image && <img className='event-card-img' src={event.image} width={300} height={210} alt={event.name} />}
              </div>
              <div className="event-title">
                <h5>{event.name}</h5>
              </div>
              <div className="event-details">
                <div className="event-detail-value">
                  <span><b>Place</b></span>
                  <span>{event.place}</span>
                </div>
                <div className="event-detail-value">
                <span><b>Date</b></span>
                <EventDate date={event.date}></EventDate>                </div>
                <div className="event-detail-value">
                <span><b>Organization</b></span>
                <span>{event.organization}</span>
                </div>
                <div className="event-detail-value">
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
      <Footer />
    </>
  );
};

export default Event;
