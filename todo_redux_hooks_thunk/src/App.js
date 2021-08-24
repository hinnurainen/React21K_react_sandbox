import React from 'react';
import NotesList from './containers/NotesList';
import NewNote from './containers/NewNote';

import "./App.css";

const App = () => {
  return (
    <div>
      <NewNote />
      <NotesList />
    </div>
  );
};

export default App;
