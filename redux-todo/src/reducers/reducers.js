import * as actionTypes from '../actions/actions';

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDNOTE:
            return {
                ...state, counter: state.counter + action.note
            }
        case actionTypes.REMOVENOTE:
            const updatedArray = state.results.filter(item => item.id !== action.item)
            return {
                ...state, notes: updatedArray,
            }
    }

    return state;
}

const initialState = {
    counter: 0,
    notes: [
        {
            id: 1,
            note: "laundry"
        },
        {
            id: 2,
            note: "food"
        },
        {
            id: 3,
            note: "walk the dog"
        },
    ],
}

export default reducers;