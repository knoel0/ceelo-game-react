import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './pages/startpage/StartPage';
import Setup from './pages/setup/Setup';
import Game from './pages/game/Game';
import './App.css';

export default function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path = '/' component={StartPage} />
        <Route exact path = '/Setup' component={Setup} />
        <Route exact path = '/Game' component={Game} />
      </Switch>
    </div>
  );  
}