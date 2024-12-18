import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/imges/nav/logo.png';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container p-3">
          <div className="logo me-5">
            <img src={logo} alt=''/>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse ms-5 " id="navbarNav">
            <div className="navs-ul">
              
      <ul className="navbar-nav">
                  
          <button className="btn bold" aria-current="page" href="#">Become a Renter</button>
        
        
          <button className="btn bold" href="#">Rental deals</button>
        
        
          <button className="btn bold" href="#">How it work</button>
        
        
          <button className="btn bold" href="#">Why choose us</button>
        
                
                  
          <button className="btn bold sIN" href="#">Sign In</button>
        
        
        <button className="btn bold btn-primary ms-1" href="#">Sign Up</button>
                 
        
      </ul>
          
      </div>
          
      
    </div>
  </div>
</nav>


    </>
  )
}
