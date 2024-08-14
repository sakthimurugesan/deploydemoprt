import React, { useEffect, useRef } from 'react';
import './TestimonialSlider.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TestimonialSlider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollPosition = 0;

    if (window.matchMedia("(min-width: 576px)").matches) {
      const carouselInner = carousel.querySelector('.carousel-inner');
      const carouselWidth = carouselInner.scrollWidth;
      const cardWidth = carouselInner.querySelector('.carousel-item').offsetWidth;

      const nextBtn = carousel.querySelector('.carousel-control-next');
      const prevBtn = carousel.querySelector('.carousel-control-prev');

      const handleNextClick = () => {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          carouselInner.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      };

      const handlePrevClick = () => {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInner.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
          });
        }
      };

      nextBtn.addEventListener('click', handleNextClick);
      prevBtn.addEventListener('click', handlePrevClick);

      return () => {
        nextBtn.removeEventListener('click', handleNextClick);
        prevBtn.removeEventListener('click', handlePrevClick);
      };
    }
  }, []);

  return (
    <div className="testimonial-slider" ref={carouselRef}>
      <div id="carouselExampleControls" className="carousel carousel-dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-title">
                <i className="bi bi-quote display-1"></i>
                <h2 className="fw-bold display-6">What our customers say</h2>
              </div>
              <button className="carousel-control-prev prev-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon prev-btn" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next next-btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon next-btn" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="col-md-8">
              <div className="carousel-inner">
                {[
                  { id: 1, title: 'Card title 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg' },
                  { id: 2, title: 'Card title 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg' },
                  { id: 3, title: 'Card title 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg' },
                  { id: 4, title: 'Card title 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-4-scaled.jpg' },
                  { id: 5, title: 'Card title 5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg' },
                  { id: 6, title: 'Card title 6', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', image: 'https://codingyaar.com/wp-content/uploads/headshot-6-scaled.jpg' },
                ].map((item, index) => (
                  <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="card">
                      <div className="img-wrapper"><img src={item.image} className="d-block w-100" alt="..." /></div>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <i className="bi bi-star-fill text-warning pe-1"></i>
                        <i className="bi bi-star-fill text-warning pe-1"></i>
                        <i className="bi bi-star-fill text-warning pe-1"></i>
                        <i className="bi bi-star-fill text-warning pe-1"></i>
                        <i className="bi bi-star-fill text-warning pe-1"></i>
                        <p className="card-text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default TestimonialSlider;
