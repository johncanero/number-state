import React, { useState } from 'react';


const Add = () => {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Set the Array Count to Increase
  const increase = () => {
    setCount(count + 1)
  }

  // Set the Array Count to Decrease
  const decrease = () => {
    setCount(count - 1)
  }

  
  // Set the Starter "useState(0) - Define the const in order to work the Function
  return (
    <div className="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
    </div>
  );
}

export default Add