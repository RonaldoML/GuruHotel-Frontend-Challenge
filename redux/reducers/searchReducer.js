import { visited } from "../actions/search";
import { types } from "../types/types";


const initialState = {
    searchs: {
        busqueda: '',
        ubicacion: '',
    },
    data: [],
    visited:[],
    selected: '',
    load: false,
    content: false,
};

export const searchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.eventSearch:
            return {
                ...state,
                searchs: action.payload
            };
        case types.eventData:
            return {
                ...state,
                data: action.payload
            }
        case types.loading:
            return {
                ...state,
                load: action.payload
            }
        case types.noContent:
            return {
                ...state,
                data: [],
                content: action.payload
            }
        case types.selected:
            return {
                ...state,
                selected: action.payload
            }
        case types.visited:
            localStorage.setItem('visited', JSON.stringify([...state.visited, action.payload]));
            return {
                ...state,
                visited: [...state.visited, action.payload]
            }
        default:
            return state;
    }
}