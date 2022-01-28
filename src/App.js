import React from 'react';
import {Route} from 'react-router-dom';
import { withRouter } from 'react-router'
import MainPage from './components/MainPage';
import './App.css';

function App() {
  const main = () => <MainPage />
  return (
    <div>
      <Route exact path="/" component={main} />
    </div>
  );
}

export default withRouter(App);
