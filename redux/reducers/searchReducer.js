import { types } from "../types/types";


const initialState = {
    searchs: {
        busqueda: '',
        ubicacion: '',
    },
    data: [],
    visited:[],
    load: false,
    content: false
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
                content: action.payload
            }
        default:
            return state;
    }
}