import React from 'react'
import './Contant1.css'
import AnimeCar from '../../../assets/imges/landing-page/AnimeCar.png'

export default function Contant1() {
  return (
    <>
    <div className='Sec1-con d-flex justify-content-between align-items-center'>
        <div className="article">
            <h1 className='fw-bold'>Find, book and rent a car <span className='text-primary'>Easily</span></h1>
            <p> Get a car wherever and whenever you need it with your IOS and Android device. </p>
        </div>
            <img className='AnimeCar' src={AnimeCar} alt='Blue Car'/>
    </div>
    </>
  )
}
