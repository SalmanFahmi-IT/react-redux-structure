import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/Default.layout';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={DefaultLayout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
