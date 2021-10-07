import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import FindPolicies from './components/pages/FindPolicies';
import Analyze from './components/pages/Analyze';
import InternalResources from './components/pages/InternalResources';
import AddPolicy from './components/pages/AddPolicy'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path  = "/" exact component={Home} />
        <Route path  = "/about" exact component={About} />
        <Route path  = "/find-policies" exact component={FindPolicies} />
        <Route path  = "/analyze-policies" exact component={Analyze} />
        <Route path  = "/internal-resources" exact component={InternalResources} />
        <Route path  = "/add-policy" exact component = {AddPolicy} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
