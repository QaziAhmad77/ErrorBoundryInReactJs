/* eslint-disable react/prop-types */
import { useState } from 'react';

const Counter = ({ title }) => {
  const [counter, setCounter] = useState(0);
  if (counter > 5) {
    throw new Error('App Crashed');
  }
  return (
    <div style={{ border: '3px solid black', padding: '10px' }}>
      <div>Counter {title}</div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
