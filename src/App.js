import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0); // Initial state is 0

  // Button click handler
  const handleClick = () => {
    setCount(count + 1); // Increment counter by 1
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current counter value: {count}
        </p>

        {/* Button with inline style */}
        <button
          onClick={handleClick}
          style={{
            padding: '10px',
            backgroundColor: '#61dafb',
            border: 'none',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
