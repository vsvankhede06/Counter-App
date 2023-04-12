import React, { useState } from "react";
import styles from "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const handleIncrement = () => {
    setcount(count + parseInt(inputValue));
  };

  const handleDecrement = () => {
    setcount(count - parseInt(inputValue));
  };

  const inputHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setcount(0);
  };
  return (
    <div className="App">
      <h1 className="h1">Counter</h1>
      <h2>{count}</h2>

      <button
        className="decrement"
        varient="contained"
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        className="increment"
        varient="contained"
        onClick={handleIncrement}
      >
        +
      </button>

      <input
        className="Input"
        type="text"
        value={inputValue}
        onChange={inputHandleChange}
      />
      <div>
        <button className="reset" varient="contained" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
