import React from 'react'
import './Footer.css'
import logofooter from '../../assets/imges/footer/logofooter.png'
import call from '../../assets/imges/footer/call.png'
import sms from '../../assets/imges/footer/sms.png'
import facebook from '../../assets/imges/footer/facebook.png'
import instagram from '../../assets/imges/footer/instagram.png'
import location from '../../assets/imges/footer/location.png'
import youtube from '../../assets/imges/footer/youtube.png'

export default function Footer() {
  return (
    <>
      
<footer className="footer pt-5 pb-5 text-white-50    text-md-start  text-capitalize">
  
  <div className="container">

    <div className="row ">

      <div className="col-12 col-lg-4 p-2">
        <div className="info mb-5  ">
          <img  src={logofooter} alt="Logo" className="footer-logo mb-4" />
        <div className="d-flex text-center mb-3">
            <img className='align-self-center me-2' src={location} alt="location" />
            <div className="d-flex flex-column align-items-start">
                <small>25566 Hc 1, Glenallen,</small>
                <small> Alaska, 99588, USA</small>
            </div>
        </div>
        
        <div className="d-flex text-center mb-3">
            <img className='align-self-center me-2' src={call} alt="call number" />
            <div className="d-flex flex-column">
                <small>+603 4784 273 12</small>
            </div>
        </div>
        
        <div className="d-flex text-center mb-3">
            <img className='align-self-center me-2' src={sms} alt="sms mail" />
            <div className="d-flex flex-column">
                <small>rentcars@gmail.com</small>
            </div>
        </div>
        
        </div>
      </div>

      <div className="col-12 col-lg-2 p-2">
        <div className="links">
          <h5 className="text-light">Our Products</h5>
          <ul className="list-unstyled lh-lg">
            <li>Career</li>
            <li>Car</li>
            <li>Packages</li>
            <li>Features</li>
            <li>Priceline</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-lg-2 p-2">
        <div className="links">
          <h5 className="text-light">Resources</h5>
          <ul className="list-unstyled lh-lg">
            <li>Download</li>
            <li>Help Centre</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-lg-2 p-2">
        <div className="links">
          <h5 className="text-light">About Rentcars</h5>
          <ul className="list-unstyled lh-lg">
            <li>Why choose us</li>
            <li>Our Story</li>
            <li>Guides</li>
            <li>Investor Relations</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-lg-2 p-2">
        <div className="links">
          <h5 className="text-light">Follow Us</h5>
          <ul className="list-unstyled lh-lg d-flex justify-content-start ">
            <li className='m-2'><img src={facebook} alt="facebook" /></li>
            <li className='m-2'><img src={instagram} alt="instagram" /></li>
            <li className='m-2'><img src={youtube} alt="youtube" /></li>
          </ul>
        </div>
      </div>
    
      </div>
      

          <hr />
          <div className="row">
            <small className='CR'>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
          </div>
          
  </div>

</footer>
    </>
  )
}
