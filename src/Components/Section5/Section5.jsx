import React from 'react'
import './Section5.css'
import Audi1 from '../../assets/imges/landing-page/sec-5/Audi1.png'
import user from '../../assets/imges/landing-page/sec-5/user.png'
import message from '../../assets/imges/landing-page/sec-5/message.png'
import chat from '../../assets/imges/landing-page/sec-5/chat.png'

export default function Section5() {
  return (
    <>
          
          <div>
      <div className="row">
        
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
        <div className='mx-4 px-4 d-flex flex-column justify-content-center'>
            <button className="btn  px-3 mt-4 pop2-btn ">WHY CHOOSE US</button>
            <h4 className='my-3'>We offer the best experience with our rental deals</h4>
            </div>


          <div className="row">
            <div className="col-12">
            <div className='d-flex  align-items-center px-4 mx-4 my-4'>
                    <div className='me-3'>
                        <img src={user} alt='user-icon'/>
                    </div>
                    
                    <div>
                        <article>
                            <h6 class="mb-0">Best price guaranteed</h6>
                            <small>Find a lower price? We’ll refund you 100% of the difference.</small>
                        </article>
                    </div>
                  </div>

                  <div className='d-flex  align-items-center px-4 mx-4 my-4'>
                    <div className='me-3'>
                        <img src={message} alt='message-icon'/>
                    </div>
                    
                    <div>
                        <article>
                            <h6 class="mb-0">24 hour car delivery</h6>
                            <small>Find a lower price? We’ll refund you 100% of the difference.</small>
                        </article>
                    </div>
                  </div>

                  <div className='d-flex  align-items-center px-4 mx-4 my-4'>
                    <div className='me-3'>
                        <img src={user} alt='userr-icon'/>
                    </div>
                    
                    <div>
                        <article>
                            <h6 class="mb-0">Best price guaranteed</h6>
                            <small>Find a lower price? We’ll refund you 100% of the difference.</small>
                        </article>
                    </div>
                  </div>

                  <div className='d-flex  align-items-center px-4 mx-4 my-4'>
                    <div className='me-3'>
                        <img src={chat} alt='car-icon'/>
                    </div>
                    
                    <div>
                        <article>
                            <h6 class="mb-0">24/7 technical support</h6>
                            <small>ave a question? Contact Rentcars support any time when you have problem.</small>
                        </article>
                    </div>
                              </div>
                              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
