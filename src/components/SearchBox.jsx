import React, { useState } from 'react';

function SearchBox() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="search-box">
      <input 
        type="text" 
        placeholder="Search for cars, models..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBox;
