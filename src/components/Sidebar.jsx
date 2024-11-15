import React from "react";

const Sidebar = ({
  selectedType,
  setSelectedType,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedSeater,
  setSelectedSeater,
}) => {
  return (
    <div className="card p-3 mb-3">
      <h4>Filters</h4>

      
      <div className="form-group">
        <label>Car Type</label>
        <select
          className="form-control"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Sports">Sports</option>
       
        </select>
      </div>

      
      <div className="form-group">
        <label>Price per Day</label>
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          value={selectedPriceRange[0]}
          onChange={(e) =>
            setSelectedPriceRange([parseInt(e.target.value), selectedPriceRange[1]])
          }
          className="form-control"
        />
        <input
          type="range"
          min="0"
          max="200"
          step="10"
          value={selectedPriceRange[1]}
          onChange={(e) =>
            setSelectedPriceRange([selectedPriceRange[0], parseInt(e.target.value)])
          }
          className="form-control"
        />
        <div>
          ${selectedPriceRange[0]} - ${selectedPriceRange[1]}
        </div>
      </div>

   
      <div className="form-group">
        <label>Seater Capacity</label>
        <select
          className="form-control"
          value={selectedSeater}
          onChange={(e) => setSelectedSeater(e.target.value)}
        >
          <option value="">All</option>
          <option value="2">2 Seater</option>
          <option value="4">4 Seater</option>
          <option value="5">5 Seater</option>
          <option value="7">7 Seater</option>
       
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
