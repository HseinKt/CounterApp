import React from "react";
import { useState } from "react";
import "./counter.css"
const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount((c) => c - number);
    }
  }
  const incrementCount = () => {
    setCount(count + number);
  }

  const resetCount = () => {
    setCount(0);
    setNumber(0);
  }

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  }


  return ( 
    <>
    <h1>Counter by Hussein</h1>
    <h3>{count}</h3>
    <button onClick={decrementCount}>-</button>
    <button onClick={incrementCount}>+</button>
    <h2>Increment/ decrement by: </h2>
    <input type="number" value={number} onChange={handleChange} />
    <button onClick={resetCount}>Reset</button>
    </>
   );
}
 
export default Counter;