import { ADD_TRACK } from "../constants/actionTypes";

export const addTrack = (track) => ({
    type: ADD_TRACK,
    payload: track
});