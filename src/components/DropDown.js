import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/dropdown.css';

const DropDown = () => {
  const [countries, setCountries] = useState([{ id: 0, name: 'no data to show start server' },]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/data')
      .then(response => {
        setCountries(response.data);
        //console.log(response.data[0].name);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);  

  const handleCountryChange = (event) => {
    const selected = event.target.innerHTML;
    setSelectedCountry(selected);
    setMenuVisible(false); 
    axios.post('http://localhost:8080/data', { country: selected })
      .then(response => {
        console.log('Selected country posted successfully:', response.data);
        alert("successfully resposne from server "+ JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('Error posting selected country:', error);
      });
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {selectedCountry || "Select a Country"}
      </button>
      <div className={`dropdown-menu ${isMenuVisible ? 'visible' : ''}`}>
        {countries.map(country => (
          <div key={country.id} className="dropdown-item" onClick={handleCountryChange}>
            {country.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
