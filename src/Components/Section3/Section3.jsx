import React from 'react'
import './Section3.css'
import CarIcon from '../../assets/imges/landing-page/CarIcon.png'
import Location from '../../assets/imges/landing-page/Location.png'
import calender from '../../assets/imges/landing-page/calender.png'

export default function Section3() {
  return (
    <>
    <section className='Sec-3 my-3'>
        <div className="container">
          <div className="row">

            <div className="d-flex justify-content-center m-4 pt-5">
                <button className="btn  px-3 mt-3 pop2-btn">HOW IT WORK</button>
                  </div>
                  <h1 className="text-center m-4">Rent with Following 3 Working Steps</h1>

            <div className='d-flex justify-content-evenly flex-wrap p-5'>
                <div className='d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2'>
                    <div>
                        <img src={Location} alt='car-icon'/>
                    </div>
                    <h5>Choose location</h5>
                    <small className='text-secondary'>
                    Choose your and find your best car
                    </small>
                      </div>
                      
                      <div className='d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2'>
                    <div>
                        <img src={calender} alt='car-icon'/>
                    </div>
                    <h5>Pick-up Date</h5>
                    <small className='text-secondary'>
                    Select your pick up date and time to book your car
                    </small>
                      </div>
                      
                      <div className='d-flex flex-column align-items-center px-4 mx-4 card-sec-3 my-2'>
                    <div>
                        <img src={CarIcon} alt='car-icon'/>
                    </div>
                    <h5>Choose your Car</h5>
                    <small className='text-secondary'>
                    Book your car and we will deliver it directly to you
                    </small>
            </div>
            
                  </div>
          </div>
                  
                  
            </div>{/*End-Container*/}
      </section>
    </>
  )
}
