import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/stock1.png';
import Image2 from '../assets/stock2.png';
import React from 'react';
import "./Carousel.scss"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image1  style={{ height: '400px' }}/>
      </Carousel.Item>
      <Carousel.Item>
        <Image2  style={{ height: '400px' }}/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;