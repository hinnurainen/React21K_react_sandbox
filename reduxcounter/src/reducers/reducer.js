import * as actionTypes from '../actions/actions';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state, counter: state.counter + 1,
            }

        case actionTypes.DECREMENT:
            return {
                ...state, counter: state.counter - 1,
            }

        case actionTypes.RESET:
            return {
                ...state, counter: 0,
            }

        case actionTypes.ADDFIVE:
            return {
                ...state, counter: state.counter + action.value,
            }

        case actionTypes.MINUSFIVE:
            return {
                ...state, counter: state.counter - action.value,
            }
        case actionTypes.STORERESULTS:
            return {
                ...state, results: state.results.concat({ id: new Date(), value: state.counter }),
            }
    }

    return state;
}

const initialState = {
    counter: 0,
    results: [
        {
            id: 1,
            value: 10
        },
        {
            id: 2,
            value: 100
        },
        {
            id: 3,
            value: 1000
        },
    ],
}

export default reducer;