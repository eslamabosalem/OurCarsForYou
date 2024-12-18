import React from 'react'
import './Section1.css'
import NavBar from '../NavBar/NavBar'
import Contant1 from '../Sec1-Contant/Contant1'

export default function Section1() {
  return (
    <>
      <section className="Sec-1">
        <div className="container-fluid">
          <div className="row">
        <div>
            <NavBar />
            <Contant1/>
        </div>

          </div>
    </div>
      </section>
    </>
  )
}
