import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import PageA from './components/PageA';
import PageB from './components/PageB';

//sakuragimaaya
function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/PageA" component={PageA} />
        <Route exact path="/PageB" component={PageB} />
      </Switch>
    </Router>
  );
}

export default App;
