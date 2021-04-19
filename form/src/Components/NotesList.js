import React from 'react';

const NotesList = ({ notes }) => {
    return (
        <div>
            <h1>My notes</h1>
            <ul>
                {notes.map(note => {
                    return (
                        <li key={note.id}>{note.message}</li>)
                })}
            </ul>
        </div>
    );
};

export default NotesList;