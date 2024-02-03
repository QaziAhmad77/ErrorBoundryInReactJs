/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const Counter = ({ title }) => {
  const [counter, setCounter] = useState(0);
  const handlerError = useErrorHandler();

  const handleClick = () => {
    try {
      if (counter > 5) {
        throw new Error('Count limit exceeded');
      } else {
        setCounter((c) => c + 1);
      }
    } catch (e) {
      handlerError(e);
      //   console.log('Clickcounter error', e);
    }
  };
  return (
    <div style={{ border: '3px solid black', padding: '10px' }}>
      <div>Counter {title}</div>
      <div>{counter}</div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
