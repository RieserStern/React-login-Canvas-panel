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

<<<<<<< HEAD
serviceWorker.unregister();
=======
serviceWorker.unregister();
>>>>>>> a5d0160dd6c23987601bdbab0ddb54e569e82ace
