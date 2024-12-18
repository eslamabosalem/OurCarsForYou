import React, { useEffect, useState } from "react";
import './Car.css'
import axios from "axios";
import car1 from '../../assets/imges/card/car1.png'
import car2 from '../../assets/imges/card/car2.png'
import car3 from '../../assets/imges/card/car3.png'
import arright from '../../assets/imges/card/arrow-right.png'
import star from '../../assets/imges/card/star.png'
import doors from '../../assets/imges/card/doors.png'
import Frame from '../../assets/imges/card/Frame.png'
import snow from '../../assets/imges/card/snow.png'
import user from '../../assets/imges/card/user.png'
import { Link } from "react-router-dom";



export default function Car(props) {
  
    let { car } = props
    
    const CarImgs = [car1,car2,car3]

  return (
   

      
       
          <div className="col-md-3 col-12" key={car.id}>
            <div className="card cars-card m-2 p-2 shadow-lg p-3 mb-5 bg-white rounded">
              <img
                src={CarImgs[Math.floor(Math.random() * CarImgs.length)]}
                className="card-img-top w-75 m-auto my-3"
                alt={"car"}
              />
              <div className="card-body">
                <h5 className="card-title">{car.car_model}</h5>
                <p className="card-text">
                  <div className="rate d-flex">
                  <img className="align-self-center me-1" src={star} alt="star" />
                    4.8  <p className="align-self-center mb-0 text-secondary"> (1345 reviewers)</p>
                  </div>
                  
                  <div className="options text-secondary">
              
                  <div className="my-3 d-flex justify-content-between">
                      <div className="d-flex">
                <img className="align-self-center me-1" src={user} alt="" />
                <p className="mb-0">2 Passanger</p>
              </div>
              <div className="d-flex">
                <img className="align-self-center me-1" src={Frame} alt="" />
                <p className="mb-0">Auto</p>
                      </div>
                  </div>
                  <div className="my-3 d-flex justify-content-between">
                      <div className="d-flex">
                <img className="align-self-center me-1" src={snow} alt="" />
                <p className="mb-0">Air conditioning</p>
              </div>
              <div className="d-flex">
                <img className="align-self-center me-1" src={doors} alt="" />
                <p className="mb-0">2 doors</p>
                      </div>
                  </div>
              
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <h5>Price</h5>
                <h5>{car.price}<span className="text-secondary">/Day</span></h5>
                      </div>
                </p>
                <Link to={`/home/allcars/${car.id}`} className="btn btn-primary w-100">Rent Now <img src={arright} alt="" /></Link>
              </div>
            </div>
          </div>
        
      
    
  );
}