import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import './CSS/App.css';
import IntroPage from './components/IntroPage';

const App = ({ gifUrl, gifOrigLink }) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      <div>
        <IntroPage />
      </div>
    </Provider>
  );
  
}

export default App;
