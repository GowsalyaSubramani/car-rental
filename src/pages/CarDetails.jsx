import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mockCars from "../data/mockCars.json";


const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = mockCars.find(c => c.id === Number(id));
  const [recentlyBrowsed, setRecentlyBrowsed] = useState([]);

  useEffect(() => {
   
    if (car) {
      const recentlyBrowsedCars = JSON.parse(localStorage.getItem("recentlyBrowsed")) || [];
      const updatedBrowsedCars = [car, ...recentlyBrowsedCars.filter(c => c.id !== car.id)];
      localStorage.setItem("recentlyBrowsed", JSON.stringify(updatedBrowsedCars.slice(0, 3)));
      setRecentlyBrowsed(updatedBrowsedCars.slice(1, 4));
    }
  }, [car]);

  if (!car) return <p>Car not found.</p>;

  return (
    <div className="container mt-4">
      
      <h2>{car.name}</h2>
      <img src={car.image} alt={car.name} className="img-fluid mb-3" />
      <p><strong>Price per day:</strong> ${car.pricePerDay}</p>
      <p><strong>Type:</strong> {car.type}</p>
      <p><strong>Mileage:</strong> {car.mileage} miles</p>
      <p><strong>Seater Capacity:</strong> {car.seaterCapacity}</p>
      <p>{car.description}</p>

     
      <div className="reviews mt-4">
        <h4>Reviews</h4>
        <div className="review">
          <p><strong>John Doe:</strong> Excellent car! Very comfortable and smooth to drive.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐⭐</p>
        </div>
        <div className="review">
          <p><strong>Jane Smith:</strong> Loved the experience! Great car for long trips.</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐</p>
        </div>
      </div>

     
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate(`/payment/${car.id}`)}
      >
        Proceed to Payment
      </button>

      {recentlyBrowsed.length > 0 && (
        <div className="recently-browsed mt-5">
          <h4>Recently Browsed Cars</h4>
          <div className="row">
            {recentlyBrowsed.map((recentCar) => (
              <div className="col-md-4" key={recentCar.id}>
                <div className="card mb-3" onClick={() => navigate(`/car/${recentCar.id}`)} style={{ cursor: "pointer" }}>
                  <img src={recentCar.image} className="card-img-top" alt={recentCar.name} />
                  <div className="card-body">
                    <h5 className="card-title">{recentCar.name}</h5>
                    <p className="card-text">${recentCar.pricePerDay} per day</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
