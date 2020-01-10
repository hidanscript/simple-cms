import React from 'react';
import './App.css';
import NavColumn from './Components/NavColumn';

//screens
import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavColumn />
        <Home />
      </header>
    </div>
  );
}

export default App;
