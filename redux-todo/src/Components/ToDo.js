import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions/actions';

class ToDo extends Component {
    render() {
        return (
            <div>
                <h1>What needs to be done today?</h1>
                <h2>You have currently {this.props.storedNotes.length} tasks on your list</h2>
                <div>
                    <ul>
                        {this.props.storedNotes.map((note) => (
                            <li key={note.id}>
                                <input type='checkbox' name={"note" + note.id} id={"note" + note.id} onChange={() => this.props.onNoteUpdate(note.id)}
                                    checked={note.isDone} />
                                <label htmlFor={"note" + note.id} className={note.isDone ? "note note-done" : "note"} >
                                    {note.name}
                                </label>
                                <button className={"task-btn"} onClick={() => this.props.onRemoveNote(note.id)}>Delete</button>
                            </li>))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storedNotes: state.notes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveNote: (payload) => dispatch({ type: actionTypes.REMOVENOTE, payload }),
        onNoteUpdate: (payload) => dispatch({ type: actionTypes.UPDATENOTE, payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);