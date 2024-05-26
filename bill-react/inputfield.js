import React, { useState } from 'react';

function InputField({ onCalculate }) {
  const [units, setUnits] = useState(0);

  const handleCalculate = () => {
    onCalculate(units);
  };

  const handleChange = (e) => {
    // Convert the input value to a number before setting it as state
    setUnits(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label>Electricity Bill Units: </label>
      <input
        type="number"
        value={units}
        onChange={handleChange} // Use handleChange instead of inline arrow function
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default InputField;
