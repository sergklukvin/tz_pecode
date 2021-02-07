import React from 'react';
import NavigationPanel from './Navigation/NavigationPanel';
import './App.css';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  const storeLc = [];
  const checkStore = JSON.parse(localStorage.getItem('watch'));

  if (checkStore === null) {
    localStorage.setItem('watch', JSON.stringify(storeLc));
  }

  return (
    <Provider store={store}>
      <NavigationPanel />
    </Provider>
  );
}

export default App;
