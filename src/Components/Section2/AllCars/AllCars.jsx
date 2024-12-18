
import React, { useEffect, useState } from "react";
import "./AllCars.css";
import axios from "axios";
import Car from "../../Car/Car";
import { Link } from "react-router-dom";

export default function AllCars() {
  const [allcars, setAllCars] = useState([]);

  const getCars = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      setAllCars(response?.data?.cars);

    } catch(e) {
      console.log(e)
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  

  return (
    <div className="container">
      <nav  aria-label="breadcrumb">
        <ol  class="breadcrumb">
          <li  class="breadcrumb-item">
            <Link  class="link-opacity-100-hover pointer" to='/home'>Home</Link>
          </li>
          <li  aria-current="page" class="breadcrumb-item active">Cars</li>
        </ol>
      </nav>

      <div className="d-flex justify-content-center m-4">
              <button className="btn  px-3 mt-3 pop-btn " type="button"> POPULAR RENTAL DEALS </button>
      </div>

      <h1 className="text-center m-4">Most popular cars rental deals</h1>

      <div className="row">
 
      {allcars.slice(0,16).length > 0 ? (
          allcars.slice(0,20).map((car) => <Car key={car.id} car={car} />)
        ) : (
          <p className="text-muted">Loading...</p>
        )}

        <div >
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>
        
       

       
      </div>
    </div>
  );
}


