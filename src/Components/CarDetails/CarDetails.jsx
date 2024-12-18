import React from 'react'
import './CarDetails.css'
import { Link } from 'react-router-dom'
import Audi1 from '../../assets/imges/landing-page/sec-5/Audi1.png'
import user from '../../assets/imges/card/user.png'
import doors from '../../assets/imges/card/doors.png'
import Frame from '../../assets/imges/card/Frame.png'
import snow from '../../assets/imges/card/snow.png'

export default function CarDetails() {
  return (
    <>
       <div>
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-md-5 mt-2 mx-md-5 mx-1">
            <li className="breadcrumb-item fs-5">
              <Link to="/home">Home</Link>
            </li>
            <li className="breadcrumb-item fs-5">
              <Link to="/home/allcars">Cars</Link>
            </li>
            <li className="breadcrumb-item active fs-5" aria-current="page">
              Car Details
            </li>
            <li
              className="breadcrumb-item active fs-5"
              aria-current="page"
            ></li>
          </ol>
        </nav>
      </div>
      <div className="row choose_us_bg">
        <div className="col-md-6">
          <div className={`d-flex justify-contnt-center align-items-center`}>
            <img
              className="d-md-block d-none"
              style={{ marginTop: "10rem", width: "80%" }}
              src={Audi1}
              alt="Choose Us"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-start justify-content-center align-items-cnter">
            <button className="rounded-2 text-uppercase pop-btn">
              why choose us
            </button>
          </div>

          <div className="d-flex justify-content-md-start mx-md-0 mx-4 justify-content-center align-items-cnter">
            <div className={`my-3 text-capitalize`}>
              <h2>We offer the best experience with our rental deals</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
                <div class="d-flex flex-row justify-content-start align-items-center">
                  <img class="me-md-3 ms-2 mt-4 undefined" src={user} alt="choose location"/>
                    <small class="mt-3 text-muted text-center">2 Passanger.</small>
                </div>

                <div class="d-flex flex-row justify-content-start align-items-center">
                  <img class="me-md-3 ms-2 mt-4 undefined" src={snow} alt="choose location"/>
                    <small class="mt-3 text-muted text-center">Air conditioning</small>
                </div>

                <div class="d-flex flex-row justify-content-start align-items-center">
                  <img class="me-md-3 ms-2 mt-4 undefined" src={Frame} alt="choose location"/>
                    <small class="mt-3 text-muted text-center">CVT</small>
                </div>

                <div class="d-flex flex-row justify-content-start align-items-center">
                  <img class="me-md-3 ms-2 mt-4 undefined" src={doors} alt="choose location"/>
                    <small class="mt-3 text-muted text-center">Doors</small>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
