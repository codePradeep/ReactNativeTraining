import React from "react";
import ReduxAsyncApp from '../views/ReduxApiCall/reduxApiCall'
import { Provider } from 'react-redux'
import store from '../redux/ThunkApi/app/store'

const ThunkApp =()=> {
    return (
      <Provider store={store}>
        <ReduxAsyncApp />
      </Provider>
    );
  
}

export default ThunkApp;


