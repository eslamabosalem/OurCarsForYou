import React, { useState } from "react";
import Slider from "react-slick";
import './Section6.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from '../../assets/imges/landing-page/sec-6/girl.png'
import man from '../../assets/imges/landing-page/sec-6/man.png'
import star from '../../assets/imges/card/star.png'



function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
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
      <section className="Sec-6 mb-3">
        <div className="container-fluid">

          <div className="row">

          <div class="d-flex flex-column mt-5">
            <button class="popular-rental-deals-btn rounded-2 m-auto mt-5 pop-btn"> TESTIMONIALS </button>
                <h1 class="text-center m-4 mb-5">What people say Aabout us ?</h1>
            </div>
            
      <div className="slider-container my-5">
        <Slider {...settings}>

                <div className="row ">
                  
        <div className="mx-3 ">
        <div className="card mb-3 g-0 col-md-10 col-12 ">
   <div className="row g-0">
     <div className="col-md-6">
       <img className='w-100 CD-img' src={girl} alt=''/>
     </div>
     <div className="col-md-6">
       <div className="card-body">
        <h2 className="card-title mb-2">5.0<span className="fs-5"> Stars</span></h2>
        <div className="stars-con d-flex mb-4">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
        </div>
         <p className="card-text mb-5">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
         <p className="mb-0">Sara Wilson</p>
         <p className="card-text"><small class="text-body-secondary">From New York, US</small></p>
       </div>
     </div>
   </div>
 </div>
          </div>
                </div>
                
                <div className="row">
        <div className="mx-3 ">
        <div className="card mb-3 g-0 col-md-10 col-12">
   <div className="row g-0">
     <div className="col-md-6">
       <img className='w-100 CD-img' src={man} alt=''/>
     </div>
     <div className="col-md-6">
     <div className="card-body">
        <h2 className="card-title mb-2">5.0<span className="fs-5"> Stars</span></h2>
        <div className="stars-con d-flex mb-4">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
        </div>
         <p className="card-text mb-5">“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
         <p className="mb-0">Charlie Johnson</p>
         <p className="card-text"><small class="text-body-secondary">From New York, US</small></p>
       </div>
     </div>
   </div>
        </div>
                  
        </div>
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
