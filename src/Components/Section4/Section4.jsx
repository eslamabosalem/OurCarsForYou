import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jaguar from '../../assets/imges/landing-page/jaguar.png'
import volvo from '../../assets/imges/landing-page/volvo.png'
import audi from '../../assets/imges/landing-page/audi.png'
import nissan from '../../assets/imges/landing-page/nissan.png'
import ac from '../../assets/imges/landing-page/ac.png'



function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="Sec-4">
        <div className="container-fluid">
          <div className="row">
            
      <div className="slider-container my-5">
      <Slider {...settings}>
        <div>
          <img src={jaguar} alt="jaguar" />
        </div>
        <div>
        <img src={volvo} alt="volvo" />
        </div>
        <div>
        <img src={audi} alt="audi" />
        </div>
        <div>
        <img src={nissan} alt="nissan" />
        </div>
        <div>
        <img src={ac} alt="nissan" />
        </div>
      </Slider>
    </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default AutoPlay;
