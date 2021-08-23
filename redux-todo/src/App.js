import React from 'react';
import './App.css';
import ToDo from './Components/ToDo';
import ToDoInput from './Components/ToDoInput';

function App() {
  return (
    <div className="App">
      <ToDo />
      <ToDoInput />
    </div>
  );
}

export default App;
