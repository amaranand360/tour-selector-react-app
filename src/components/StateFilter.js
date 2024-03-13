import React, { useState } from "react";
import data from "../database/data";
import Card from "./Card";
import { toast } from "react-toastify";

const StateFilter = () => {
  const [selectedState, setSelectedState] = useState(null);

  const uniqueStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "Goa",
    "West Bengal",
    "Kerala",
    "Maharashtra",
    "Himachal Pradesh",
    "Bihar",
    "Jharkhand"
  ];

  // Function to handle state selection
  function filterHandler(stateName) {
    toast.success(`Showing results for ${stateName}`);
    setSelectedState(stateName);
  }

  // Filtered data based on the selected state
  const filteredData = selectedState
    ? data.filter((item) => item.state === selectedState)
    : data;

  return (
    <div>
      <div className="filter-option">
        {/* Assuming you have a list of states to select from */}
        <select
          onChange={(e) => filterHandler(e.target.value)}
          className={selectedState ? "active-select" : "inactive-select"}
        >
          <option value="">Show all states</option>
          {/* Map over the array of unique states */}
          {uniqueStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-container">
        {/* Display the filtered data */}
        <div className="cards">
          {filteredData.map((item) => (
            <Card key={item.id} {...item}></Card>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default StateFilter;
