import * as actionTypes from '../actions/actions';
import noteServices from "../../services/notes";
import notes from '../../services/notes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.INIT_NOTES:
            return action.data;

        case actionTypes.ADD_TODO:
            return [...state, action.data];

        case actionTypes.TOGGLE_TODO:
            const noteToChange = state.find((n) => n.id === action.id);
            const changeNote = { ...noteToChange, completed: !noteToChange.completed }
            return state.map((note) => (note.id !== action.id ? note : changeNote));

        case actionTypes.DELETE_NOTES:
            return { ...state, notes: state.notes.filter((note) => note.id !== action.id), };

        default:
            return state;
    }
};

export const initializeNotes = () => {
    return async (dispatch) => {
        const notes = await noteServices.getAll();
        dispatch({
            type: actionTypes.INIT_NOTES,
            data: notes,
        });
    };
};

export const createNote = (text) => {
    return async (dispatch) => {
        const newNote = await noteServices.createNew(text);
        dispatch({
            type: actionTypes.ADD_TODO,
            data: newNote,
        });
    };
};

export const removeOne = (id) => {
    return async (dispatch) => {
        const status = await noteServices.deleteOne(id); if (status === 200)
            dispatch({
                type: actionTypes.DELETE_NOTES,
                id
            });
    };
};

export default reducer;