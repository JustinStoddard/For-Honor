import React from 'react';
import CreateForm from './components/CreateForm';
import Hub from './components/Hub';
import Welcome from './components/Welcome';

const App = () => (
  <div className="App">
    <CreateForm />
    <Welcome />
    <Hub />
  </div>
)

export default App;
