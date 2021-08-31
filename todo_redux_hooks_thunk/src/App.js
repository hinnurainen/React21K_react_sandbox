import React, { useEffect } from 'react';
import NotesList from './containers/NotesList';
import NewNote from './containers/NewNote';

import { initializeNotes } from "./store/reducers/reducer";
import { useDispatch } from 'react-redux';

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <div>
      <h1 >Notes to myself:</h1>
      <NewNote />
      <NotesList />
    </div>
  );
};

export default App;
