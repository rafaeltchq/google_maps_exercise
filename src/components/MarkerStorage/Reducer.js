import { createStore } from 'redux';
const initialState = {
    markersPos: []
};

const reducerMarkers = (state = initialState, action) => {  
    switch (action.type) {
        case "NEW_MARKER":
        return { ...state, markersPos: state.markersPos.concat(action.payLoad) };
        default: return state
    }
};
const store = createStore(reducerMarkers);
export default store;