import React from 'react'
import Canvas from './Canvas'
import {Stage, Layer, Circle} from 'react-konva';


// function App() {
  
//   const draw = (ctx, frameCount) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
//     ctx.fillStyle = '#000000'
//     ctx.beginPath()
//     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
//     ctx.fill()
//   }
  
//   return <Canvas draw={draw} />
// }

<<<<<<< HEAD
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
=======
const App = () => {
  const [circle, setCircles] = React.useState([{x: 10, y: 10}, {x: 100, y: 100}]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {circles.map(circle => (
          <Circle x={circle.x} 
                y={circle.y} 
                radius={70}
                fill={'red'}
                stroke={'black'}
                strokeWidth={4}
          />
        ))}
      </Layer>
    </Stage>
>>>>>>> a5d0160dd6c23987601bdbab0ddb54e569e82ace
  );
}

export default App