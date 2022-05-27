import React from 'react';
import { useCanvas } from './hooks/useCanvas';
import './App.css';


function App() {
  
  const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();

  const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord]);
  };

  const handleClearCanvas=(event)=>{
    setCoordinates([]);
  };

  return (
    <main className="App-main" >
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        />
      <div className="login">
       <input placeholder="Name"></input>
        <input placeholder="password" type="password"></input>
        <button>Log in</button>
      </div>
      <div className="register">
       <input placeholder="Name" />
       <input placeholder="Email" />
        <input placeholder="password" type="password" />
        <input placeholder="confirm-password" type="password" />
        <button>Register</button>
      </div>
      
      <div className="button" >
        <button onClick={handleClearCanvas} > CLEAR </button>
      </div>
    </main>
  );

};

export default App;
