/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routenavigation from './app/routes/navigation';
import rootReducer from './app/redux/reducer/rootreducer';


const store = createStore(rootReducer)

const App = () => {


  return (

      <Routenavigation/>
    
  

  );
};

export default App;
