import React, { useState } from "react";
import CarCard from "../components/CarCard";
import mockCars from "../data/mockCars.json";
import Sidebar from "../components/Sidebar";  // Import Sidebar

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 200]);
  const [selectedSeater, setSelectedSeater] = useState("");


  const filteredCars = mockCars.filter((car) => {
    return (
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType ? car.type === selectedType : true) &&
      car.pricePerDay >= selectedPriceRange[0] &&
      car.pricePerDay <= selectedPriceRange[1] &&
      (selectedSeater ? car.seaterCapacity === parseInt(selectedSeater) : true) // Ensure comparison with seaterCapacity
    );
  });

  return (
    <div className="container mt-4">
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Car Rental
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
      
        <div className="col-md-3">
          <Sidebar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            selectedSeater={selectedSeater}
            setSelectedSeater={setSelectedSeater}
          />
        </div>

       
        <div className="col-md-9">
          <h2>Available Cars for Rent</h2>
          <div className="row">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div className="col-md-4 d-flex align-items-stretch" key={car.id}>
                  <CarCard car={car} />
                </div>
              ))
            ) : (
              <p>No cars found.</p>
            )}
          </div>
        </div>
      </div>

    
      <footer className="footer mt-5 py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted">© 2024 Car Rental | All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
