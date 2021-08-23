import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions/actions';

class ToDoInput extends Component {
    render() {
        return (
            <form onSubmit={this.props.onStoreNote}>
                <input type='text' placeholder='Add a task...' onChange={this.props.onAddNote} />
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.noteInput,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddNote: (e) =>
            dispatch({ type: actionTypes.ADDNOTE, payload: e.target.value }),
        onStoreNote: (e) => {
            e.preventDefault();
            dispatch({ type: actionTypes.STORENOTE });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoInput);