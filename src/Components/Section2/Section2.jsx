
import React, { useState, useEffect } from 'react';
import './Section2.css';
import axios from 'axios';
import Car from '../Car/Car';
import { Link } from 'react-router-dom';

export default function Section2() {
  const [cars, setCars] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [loading, setLoading] = useState(false); 

  
  const getCars = async (query = '') => {
    setLoading(true); 
    try {
      const response = await axios.get(`https://myfakeapi.com/api/cars/`, {
        params: { search: query }, 
      });
      setCars(response?.data?.cars || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
    setLoading(false); 
  };

  
  useEffect(() => {
    getCars(searchQuery);
  }, [searchQuery]); 

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    getCars(searchQuery); 
  };

  return (
    <>
      <section className="Sec-2">
        <div className="container">
          <div className="row">

          <div className="SearchBar">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group flex-nowrap shadow mt-4 mb-3">
                <span id="addon-wrapping" className="input-group-text">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <input
                  type="text"
                  value={searchQuery} 
                  onChange={handleSearchChange} 
                  placeholder="Search by name"
                  className="form-control ng-valid ng-dirty ng-touched"
                />
                <button type="submit" className="btn bold btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center m-4">
            <button className="btn px-3 mt-3 pop-btn " type="button">
              POPULAR RENTAL DEALS
            </button>
          </div>
          <h1 className="text-center m-4">Most popular cars rental deals</h1>

          <div className="d-flex flex-wrap justify-content-center car-card-container">
            {loading ? (
              <p className="text-muted">Loading...</p>
            ) : cars.length > 0 ? (
              cars.slice(0, 4).map((car) => <Car key={car.id} car={car} />)
            ) : (
              <p className="text-muted">No cars found</p>
            )}
          </div>

            <div className="d-flex justify-content-center my-5">
              <Link to="/home/allcars">
                
            <button type="button" className="btn btn-outline-secondary px-5">
              Show all vehicles <i className="px-2 fas fa-long-arrow-alt-right"></i>
            </button>
              </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

