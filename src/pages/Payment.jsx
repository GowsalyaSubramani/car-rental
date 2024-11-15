import { useParams } from "react-router-dom";
import { useState } from "react";
import mockCars from "../data/mockCars.json";

const Payment = () => {
  const { id } = useParams();
  const car = mockCars.find(c => c.id === Number(id));
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [rentalInfo, setRentalInfo] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [termsAccepted, setTermsAccepted] = useState(false);

  if (!car) return <p>Car not found.</p>;

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleRentalInfoChange = (e) => {
    const { name, value } = e.target;
    setRentalInfo({ ...rentalInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
   
    alert("Payment successful!");
  };

  return (
    <div className="container mt-4">
      <h2>Payment for {car.name}</h2>
      <form onSubmit={handleSubmit}>
       
        <h4>User Details</h4>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userDetails.name}
            onChange={handleUserDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userDetails.email}
            onChange={handleUserDetailsChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={userDetails.phone}
            onChange={handleUserDetailsChange}
            required
          />
        </div>

        {/* Rental Information Section */}
        <h4>Rental Information</h4>
        <div className="form-group">
          <label>Pickup Location</label>
          <input
            type="text"
            className="form-control"
            name="pickupLocation"
            value={rentalInfo.pickupLocation}
            onChange={handleRentalInfoChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Drop-off Location</label>
          <input
            type="text"
            className="form-control"
            name="dropoffLocation"
            value={rentalInfo.dropoffLocation}
            onChange={handleRentalInfoChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pickup Date</label>
          <input
            type="date"
            className="form-control"
            name="pickupDate"
            value={rentalInfo.pickupDate}
            onChange={handleRentalInfoChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pickup Time</label>
          <input
            type="time"
            className="form-control"
            name="pickupTime"
            value={rentalInfo.pickupTime}
            onChange={handleRentalInfoChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Drop-off Date</label>
          <input
            type="date"
            className="form-control"
            name="dropoffDate"
            value={rentalInfo.dropoffDate}
            onChange={handleRentalInfoChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Drop-off Time</label>
          <input
            type="time"
            className="form-control"
            name="dropoffTime"
            value={rentalInfo.dropoffTime}
            onChange={handleRentalInfoChange}
            required
          />
        </div>

        {/* Payment Method Section */}
        <h4>Payment Method</h4>
        <div className="form-check">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => setPaymentMethod("creditCard")}
            className="form-check-input"
          />
          <label htmlFor="creditCard" className="form-check-label">Credit Card</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="debitCard"
            name="paymentMethod"
            value="debitCard"
            checked={paymentMethod === "debitCard"}
            onChange={() => setPaymentMethod("debitCard")}
            className="form-check-input"
          />
          <label htmlFor="debitCard" className="form-check-label">Debit Card</label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="form-check-input"
          />
          <label htmlFor="paypal" className="form-check-label">PayPal</label>
        </div>

       
        <div className="form-check mt-3">
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="form-check-input"
          />
          <label htmlFor="terms" className="form-check-label">
            I agree to the terms and conditions
          </label>
        </div>

        
        <button type="submit" className="btn btn-success mt-3">
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
