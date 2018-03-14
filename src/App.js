import React from 'react';
import CreateForm from './components/CreateForm';
import Hub from './components/Hub';
import Welcome from './components/Welcome';
import Profiles from './components/Profiles';
import { Switch, Router } from 'react-router-dom';

const App = () => (
  <div className="App">
    <CreateForm />
    <Switch>
      <Router exact path="/" component={Welcome} />
      <Router exact path="/Hub" component={Hub} />
      <Router exact path="/Hub/Profiles" component={Profiles} />
    </Switch>
  </div>
)

export default App;
