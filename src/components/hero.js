import React from "react";
import { Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/stock1.png';
import Image2 from '../assets/stock3.png';

export default function HeroSection() {

    return (
        <div className="herosection">

        <Carousel autoPlay infiniteLoop={true} showThumbs={false} >
                <div className="carousel-img" >
                    <img  src={Image1} />
                </div>
                <div className="carousel-img" >
                    <img src={Image2} />
                </div>
               

            </Carousel>
        </div>
    );
}