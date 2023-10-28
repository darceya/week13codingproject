
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navigation from './components/Navigation';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      
    </div>

  );
}

export default App;
