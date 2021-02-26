import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </Switch>
    </Router>

  )
}

export default App
