import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './src/navigation';
import store from './src/redux/store';

const App = () => {
  //Here, the theme and user contexts surround the application.
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
