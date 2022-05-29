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
  );
}

export default App