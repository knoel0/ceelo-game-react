import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './pages/startpage';
import Setup from './pages/setup';
import Game from './pages/game';

const MAIN_STYLE = {
  backgroundColor: 'lightcoral',
  height: '100%',
  gridArea: '2 / 2 / 7 / 7'
}

export default function App() {

  return (
    <div style={MAIN_STYLE}>
      <Switch>
        <Route exact path = '/' component={StartPage} />
        <Route exact path = '/Setup' component={Setup} />
        <Route exact path = '/Game' component={Game} />
      </Switch>
    </div>
  );  
}