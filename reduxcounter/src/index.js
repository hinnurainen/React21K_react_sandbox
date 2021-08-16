import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ready made components from installations //
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// things that we ceate ourselves//

import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


