// src/App.js
import React from 'react';
import './App.css';
import VirtualizedList from './VirtualizedList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtualized List</h1>
        <VirtualizedList />
      </header>
    </div>
  );
}

export default App;
