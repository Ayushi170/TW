import React, { useState } from 'react';
import './App.css';
import InputField from './InputField';
import BillBreakdown from './BillBreakdown';

function App() {
  const [units, setUnits] = useState(0); // Define units state
  const [totalPayable, setTotalPayable] = useState(0);

  const calculateBill = (inputUnits) => {
    // Perform the bill calculation here based on the inputUnits
    // Simplified calculation for demonstration
    const total = inputUnits * 5; // Assume a simple calculation for demonstration
    setUnits(inputUnits); // Update units state
    setTotalPayable(total);
  };

  return (
    <div className="App">
      <InputField onCalculate={calculateBill} />
      {totalPayable > 0 && (
        <BillBreakdown units={units} totalPayable={totalPayable} />
      )}
    </div>
  );
}

export default App;
