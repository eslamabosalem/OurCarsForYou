import React from 'react'
import './Section7.css'
import android from '../../assets/imges/landing-page/andriod.png'
import ios from '../../assets/imges/landing-page/ios.png'
import iphone14 from '../../assets/imges/landing-page/sec-7/iPhone-14.png'

export default function Section7() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                
          <div className="d-flex justify-content-around align-items-end">
                <article className="mx-5">
      <h1>
        Download Rentcars App for <span className="text-primary">FREE</span>
      </h1>
      <small>For faster, easier booking and exclusive deals.</small>

      <div className="my-3 col-md-7 d-flex justify-content-center">
        <img src={android} className="me-2" alt="Android App" />
        <img src={ios} alt="iOS App" />
      </div>

      <form className="d-flex flex-column col-md-7" noValidate>
<div className="form-floating m-2">
  <input type="name" className="form-control" id="floatingname" placeholder="name"/>
  <label for="floatingname">Name</label>
</div>

<div className="form-floating m-2">
  <input type="text" className="form-control" id="floatingtext" placeholder="text"/>
  <label for="floatingtext">Number</label>
</div>

<div className="form-floating m-2">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email Address</label>
</div>
        <div className="d-flex justify-content-center my-2">
          <button type="submit" id="button-addon2" className="btn bold btn-primary px-5">
            Send
          </button>
        </div>
      </form>
    </article>

                      <img className='iphone14' src={iphone14} alt="" />
          </div>
                
                  
                
            </div>
      </div>
    </>
  )
}
