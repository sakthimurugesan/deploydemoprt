import React, { useState, useEffect } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './EventDetail.css';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name } = useSelector((state) => state.user); // Access user data from Redux
  const [eventData, setEventData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(1);
  const storedUserId = localStorage.getItem('userId');

  // Convert the userId to an integer
  const userId = parseInt(storedUserId, 10);
  useEffect(() => {
    // Fetch event data based on ID
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`https://13.48.59.223/events/${id}`);
        setEventData(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEventData();
  }, [id]);

  useEffect(() => {
    // Fetch reviews for the event
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://13.48.59.223/review?eventId=${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    console.log(userId)
    console.log(id)
    console.log(newReview)
    console.log(rating)
    e.preventDefault();
    try {
      const response = await axios.post('https://13.48.59.223/review/', {
        userId: parseInt(userId, 10),
        eventId: parseInt(id, 10),
        review: newReview,
        rating,
      });
      
      setReviews((prevReviews) => [...prevReviews, response.data]);
      setNewReview('');
      setRating(1);
      alert('Review submitted successfully!');
    } catch (error) {
      console.log('Error submitting review:', error.response);
      if (error.response && error.response.data && error.response.data.detail) {
        alert(` ${error.response.data.detail}`);
      } else {
        alert('Error submitting review. Please try again later.');
      }
    }
  };
  
  const handleRegisterClick = () => {
    if (name) {
      // User is logged in, redirect to event registration page
      navigate(`/event-register/${eventData.id}`);
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-warning"></i>);
      }
    }
    return stars;
  };

  if (!eventData) {
    return <p>Loading...</p>;
  }

  const isEventPast = new Date(eventData.date) < new Date();

  return (
    <>
      <title>{eventData.name}</title>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4" target="" data-type="image" href="#">
                  <img
                    style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                    className="rounded-4 fit"
                    src={eventData.image}
                    alt="Event"
                  />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">{eventData.name}</h4>
                <p>{eventData.small_description}</p>
                <div className="row">
                  <dt className="col-3">Organization</dt>
                  <dd className="col-9">{eventData.organization}</dd>
                  <dt className="col-3">Organizer</dt>
                  <dd className="col-9">{eventData.organizer}</dd>
                  <dt className="col-3">Guest</dt>
                  <dd className="col-9">{eventData.guest}</dd>
                  <dt className="col-3">Event Type</dt>
                  <dd className="col-9">{eventData.type}</dd>
                  <dt className="col-3">Place</dt>
                  <dd className="col-9">{eventData.place}</dd>
                  <dt className="col-3">Date</dt>
                  <dd className="col-9">{eventData.date}</dd>
                  <dt className="col-3">Location</dt>
                  <dd className="col-9">{eventData.location}</dd>
                  <dt className="col-3">Capacity</dt>
                  <dd className="col-9">{eventData.capacity}</dd>
                </div>
                <hr />
                <button
                  onClick={handleRegisterClick}
                  className="btn btn-primary shadow-0"
                  disabled={isEventPast}
                >
                  Register
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="bg-light border-top py-4">
        <div className="container">
          <Row className="gx-4">
            <Col lg={8} className="mb-4">
              <div className="border rounded-2 px-3 py-2 bg-white">
                <Tab.Container id="left-tabs-example" defaultActiveKey="warranty-info">
                  <Nav variant="pills" className="nav-justified mb-3" id="ex1" role="tablist">
                    <Nav.Item className="d-flex">
                      <Nav.Link
                        eventKey="warranty-info"
                        className="d-flex align-items-center justify-content-center w-100"
                      >
                        Description
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex">
                      <Nav.Link
                        eventKey="shipping-info"
                        className="d-flex align-items-center justify-content-center w-100"
                      >
                        Map Location
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex">
                      <Nav.Link
                        eventKey="seller-profile"
                        className="d-flex align-items-center justify-content-center w-100"
                      >
                        Organization Details
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="warranty-info">
                      <p>{eventData.description}</p>
                      <div className="row mb-2">
                        <div className="col-12 col-md-6">
                          <ul className="list-unstyled mb-0">
                            {eventData.inclusive.map((item, index) => (
                              <li key={index}>
                                <i className="fas fa-check text-success me-2"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-12 col-md-6 mb-0">
                          <ul className="list-unstyled">
                            {eventData.exclusive.map((item, index) => (
                              <li key={index}>
                                <i className="fas fa-times text-danger me-2"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="shipping-info">
                      <iframe
                        src={eventData.gmap}
                        className="gmap"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seller-profile">
                      <p>{eventData.organization_details}</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="bg-light border-top py-4">
        <div className="container">
          <h4 className="mb-3">Reviews</h4>
          {name ? (
            <form onSubmit={handleReviewSubmit} className="mb-4">
              <div className="mb-3">
                <label htmlFor="review" className="form-label">
                  Your Review
                </label>
                <textarea
                  className="form-control"
                  id="review"
                  rows="3"
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <select
                  className="form-select"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  required
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <option key={star} value={star}>
                      {star}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </form>
          ) : (
            <p>
              Please <a href="/login">log in</a> to write a review.
            </p>
          )}

          {reviews.length > 0 ? (
            <ul className="list-unstyled">
              {reviews.map((review, index) => (
                <li key={index} className="mb-3">
                  <p className="mb-1">
                    <strong>{review.userName}</strong> rated it {renderStars(review.rating)}
                  </p>
                  <p className="mb-1">{review.review}</p>
                  <hr />
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet. Be the first to review this event!</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EventDetails;
