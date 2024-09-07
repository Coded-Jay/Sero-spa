import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';



function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carou"
          src= "C:\Users\AFRPNIGERIA\my-react-app\src\Assets\Web video.mp4"
          alt="Sero mobile Spa"
        />
        <Carousel.Caption>
          <h4>Massage</h4>
          <p>Aromatheraphy Massage.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carou2"
          src="C:\Users\AFRPNIGERIA\Desktop\Download\7cad80a5541618e5addb905aa72418e7.jpg"
          alt="Spa Services"
        />
        <Carousel.Caption>
          <h3>Spa</h3>
          <p>Facials, Pedicure & Manicure</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carou3"
          src="C:\Users\AFRPNIGERIA\Desktop\Download\e3548aa35521fd65752ab66dea5bd3dc.jpg"
          alt="Massage Services at your doorstep!"
        />
        <Carousel.Caption>
          <h3>Mobile Massage</h3>
          <p>Aromatheraphy, Deep Tissue, Relaxation Massage</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
