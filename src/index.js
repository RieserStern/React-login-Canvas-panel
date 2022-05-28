import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import KonvaDrawer from './KonvaDrawer';

ReactDOM.render(
    <React.StrictMode>
      <App />
      {KonvaDrawer()}
    </React.StrictMode>,
    document.getElementById('root')
  );

serviceWorker.unregister();