import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Classes from './Classes'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Home'
import Instructor from './Instructor'

export default () => <div className="App">
  <Header />
  <Router>
    <Switch>
      <Route path="/classes" component={Classes} />
      <Route path="/instructor" component={Instructor} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  <Footer />
</div>
