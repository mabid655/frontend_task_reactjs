import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';

import { NotFound } from './pages/components/not-fount';
import { ThemeProvider } from "./themeProvider";

import "./styles/index.module.scss";
import "./styles/variables.module.scss";

const Home = Loadable({
  loader: () => import('./pages'),
  loading: () => 'Content Loading...'
});

const store = configureStore();

function App() {
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
