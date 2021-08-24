import { id } from 'postcss-selector-parser';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../store/actions/actions';

const NotesList = () => {
    const notes = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleTodo = () => ({
        type: actionTypes.TOGGLE_TODO,
        id: id,

    })

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? "srike todo" : "todo"}>
                        {note.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;