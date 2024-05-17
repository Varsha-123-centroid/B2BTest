import React, { useState } from 'react';

const Autocomplete = ({ suggestions },props) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [from,setfrom] = useState("");
  const mystyle = {
    height:"100px",
    overflow: "hidden",
    position: "absolute",
    zIndex:"1000",
    backgroundColor:"#fff",
    borderStyle: "ridge",
    opacity: "1"
};

  const handleChange = event => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  const handleClick = suggestion => {
    setInputValue(suggestion.code);
    setInputValue(suggestion.name);
    setfrom(suggestion.code);
    setFilteredSuggestions([]);
  };
  return (
    <div className="autocomplete">
        <input
      type="hidden"
      name={props.id}
      id={props.id} value={from} />

      <input
        type="text" 
        className="form-control" 
        value={inputValue}   
        onChange={handleChange}
        name="travellersText2"  id="selectTravellerFlt2" placeholder=" airport" 
        autocomplete="none"
      />
      {filteredSuggestions.length > 0 && (
        <div  style={mystyle}>
        <ul>
          {filteredSuggestions.map(suggestion => (
            <li key={suggestion.id} onClick={() => handleClick(suggestion)} style={{listStyleType: "none",fontSize:"11px"}}>
             <strong>{suggestion.name}({suggestion.code})</strong> ,{suggestion.city}, {suggestion.country}
            </li>
          ))} 
        </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;