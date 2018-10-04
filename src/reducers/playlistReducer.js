import { ADD_TRACK } from "../constants/actionTypes";

const initialState = {
    tracks: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRACK:
            return {
                ...state,
                tracks: [...state.tracks, action.payload]
            };

        default:
            return state;
    }
};

export default rootReducer;