import * as actionTypes from '../actions/actions';

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDNOTE:
            return {
                ...state, noteInput: action.payload
            };

        case actionTypes.STORENOTE:
            return {
                ...state, noteInput: "", notes: [...state.notes, { id: new Date(), name: state.noteInput, isDone: false }]
            };

        case actionTypes.REMOVENOTE:
            return {
                ...state, notes: state.notes.filter((note) => note.id !== action.payload),
            };

        case actionTypes.UPDATENOTE:
            return {
                ...state, notes: state.notes.map((note) => {
                    if (note.id === action.payload) {
                        const updatedNote = { ...note };
                        updatedNote.isDone = updatedNote.isDone ? false : true; return updatedNote;
                    } else {
                        return note;
                    }
                }),
            };

        default:
            return state;
    }
};

const initialState = {
    noteInput: "",
    notes: [
    ],
}

export default reducers;