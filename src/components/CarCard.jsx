import { Link } from "react-router-dom";

const CarCard = ({ car }) => (
  <div className="card mb-3" >
    <img src={car.image} className="card-img-top" alt={car.name} />
    <div className="card-body">
      <h5 className="card-title">{car.name}</h5>
      <p className="card-text">Price per day: ${car.pricePerDay}</p>
      <Link to={`/details/${car.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  </div>
);

export default CarCard;
