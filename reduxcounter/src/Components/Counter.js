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
                <button onClick={this.props.onStoreResults}>Store the results</button>
                <div>
                    <ul>
                        {this.props.storedResults.map(item => <li key={item.id}>{item.value}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results,
    }
}

// this is how we connect with the store //
const mapDispatchToProps = dispatch => {
    return {
        onIncCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        resetCounter: () => dispatch({ type: actionTypes.RESET }),
        onAddFive: () => dispatch({ type: actionTypes.ADDFIVE, value: 5 }),
        onMinusFive: () => dispatch({ type: actionTypes.MINUSFIVE, value: 5 }),
        onStoreResults: () => dispatch({ type: actionTypes.STORERESULTS })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
