import React from 'react';
import './Aboutus.css'; // Assuming you have the CSS in this file
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AboutUs = () => {
  return (
  <>
  <title>About Us</title>
  <Navbar></Navbar>
  <div>
      <div className="about-section-1">
        <h1>About Us</h1>
      
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row-1">
        <div className="column-1">
          <div className="card-1">
            <img src="https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg" alt="Jane" style={{ width: '100%' }} />
            <div className="container-1">
              <h2>Jane Doe</h2>
              <p className="title-1">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button-1">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column-1">
          <div className="card-1">
            <img src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg" alt="Mike" style={{ width: '100%' }} />
            <div className="container-1">
              <h2>Mike Ross</h2>
              <p className="title-1">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button className="button-1">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="column-1">
          <div className="card-1">
            <img src="https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg" alt="John" style={{ width: '100%' }} />
            <div className="container-1">
              <h2>Robert Clave</h2>
              <p className="title-1">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button className="button-1">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
<Footer></Footer>

  </>
  );
};

export default AboutUs;
