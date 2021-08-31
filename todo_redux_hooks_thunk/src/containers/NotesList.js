import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../store/actions/actions';
import { removeOne } from '../store/reducers/reducer';

const NotesList = () => {
    const notes = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleTodo = (id) => ({
        type: actionTypes.TOGGLE_TODO,
        id: id,
    });

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? "strike todo" : "todo"}>
                        {note.text}
                        <button onClick={() => dispatch(removeOne(note.id))} className="deletebutton">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;