import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Your score: {this.props.ctr}</h1>
                <div>
                    <button onClick={this.props.onIncCounter}>Add one</button>
                    <button onClick={this.props.onDecCounter}>Remove one</button>
                    <button onClick={this.props.resetCounter}>Reset</button>
                    <button onClick={this.props.onAddFive}>Add five</button>
                    <button onClick={this.props.onMinusFive}>Remove five</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        resetCounter: () => dispatch({ type: actionTypes.RESET }),
        onAddFive: () => dispatch({ type: actionTypes.ADDFIVE }),
        onMinusFive: () => dispatch({ type: actionTypes.MINUSFIVE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
