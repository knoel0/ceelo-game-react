import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import Setup from './Setup';
import Game from './Game';
import './App.css';

export default function App() {

  return (
    <div id= "app">
      <Switch>
        <Route exact path = '/' component={StartPage} />
        <Route exact path = '/Setup' component={Setup} />
        <Route exact path = '/Game' component={Game} />
      </Switch>
    </div>
  );  
}