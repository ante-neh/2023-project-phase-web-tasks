import { useState, useEffect } from 'react';
import './styles.css';

// React functional component for a simple counter
export const Counter = () => {
  // State variable 'count' and its setter function 'setCount'
  const [count, setCount] = useState(0);

  // useEffect hook to update document title when 'count' changes
  useEffect(() => {
    document.title = `title changed ${count}`;
  }, [count]);

  // Function to increment the 'count' state
  const increase = () => {
    setCount(count => count + 1);
  };

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button className="btn" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
