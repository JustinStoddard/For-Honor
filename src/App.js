import React from 'react';
import CreateForm from './components/CreateForm';
import Hub from './components/Hub';
import Welcome from './components/Welcome';
import { Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <CreateForm />
    <Switch>
      <Welcome />
      <Hub />
    </Switch>
  </div>
)

export default App;
