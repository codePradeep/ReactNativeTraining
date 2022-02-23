import React from 'react';
import { Provider, } from 'react-redux';
import store from './app/redux/store';

// import MainApp from './app/routes';
import Routenavigation from './app/routes/navigation';

const App = () => {
  
  return (
    <Provider store={store}>
     
    <Routenavigation />

    </Provider>
  );
};

export default App;

