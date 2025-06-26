import React, { useState } from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={handleChange}
        aria-label="Search recipes"
      />
    </div>
  );
}

export default SearchBar;
