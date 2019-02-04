import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home'

export default props => {
  return (
    <Switch>
      <Route render={props => {
        return <Home {...props } />
      }}/>
    </Switch>
  );
};