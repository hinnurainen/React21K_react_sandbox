import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions/actions';

class ToDo extends Component {
    render() {
        return (
            <div>
                <h1>What needs to be done today?</h1>
                <h2>Number of tasks to do: {this.props.ctr}</h2>
                <div>
                    <input type="text" placeholder="Add a task..."></input>
                    <button onClick={() => { this.props.onAddNote; this.props.onStoreNote }}>Submit</button>
                </div>
                <div>
                    <ul>
                        {this.props.storedNotes.map(item => <li key={item.id} onClick={() => this.props.onRemoveNote(item.id)}>{item.note}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedNotes: state.notes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: () => dispatch({ type: actionTypes.ADDNOTE }),
        onStoreNote: () => dispatch({ type: actionTypes.STORENOTE }),
        onRemoveNote: (id) => dispatch({ type: actionTypes.REMOVENOTE, item: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);