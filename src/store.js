import { createStore } from "redux";
import rootReducer from "./reducers/playlistReducer";

const store = createStore(rootReducer);

export default store;