import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import { EditableTextInput } from './EditableTextInput';

function App() {
  const [name, setName] = useState("Name");
  const [password, setPassword] = useState("password");
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(25);
  const [selected, setSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  function toggleEdit() {
    console.log(isEditing);
    setIsEditing(!isEditing);
    setSelected(!isEditing);
  }

  const handleLogin = () => {
    console.log(name, password);
  };

  return (
    <div className="App">
      <Stage width={window.innerWidth} height={window.innerHeight} x={600} y={200}>
        <Layer>
          <Rect x={0} y={0} width={200} height={25} stroke="black" strokeWidth={2} cornerRadius={5}/>
          <EditableTextInput
            x={5}
            y={5}
            text={name}
            width={width}
            height={height}
            isEditing={isEditing}
            onToggleEdit={toggleEdit}
            onChange={(value) => setName(value)}
          />
          <Rect x={0} y={50} width={200} height={25} stroke="black" strokeWidth={2} cornerRadius={5}/>
          <EditableTextInput
            x={5}
            y={55}
            text={password}
            width={width}
            height={height}
            isEditing={isEditing}
            onToggleEdit={toggleEdit}
            onChange={(value) => setPassword(value)}
          />
          <Rect x={0} y={100} width={80} height={25} fill="green" cornerRadius={5} onClick={handleLogin}/>
          <Text x={5} y={105} fill="white" text="Sign In" />
          
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
