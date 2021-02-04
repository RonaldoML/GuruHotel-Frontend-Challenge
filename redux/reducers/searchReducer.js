import { visited } from "../actions/search";
import { types } from "../types/types";


const initialState = {
    searchs: {
        busqueda: '',
        ubicacion: '',
    },
    data: [],
    business: {},
    visited:[],
    selected: '',
    load: false,
    content: false,
    askTerms: true,
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
                data: [...state.data,...action.payload]
            }
        case types.eventSearchBusiness:
            return {
                ...state,
                business: action.payload
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
        case types.askTerms:
            return {
                ...state,
                askTerms: action.payload
            }
        default:
            return state;
    }
}