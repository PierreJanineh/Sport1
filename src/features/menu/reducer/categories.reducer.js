import {GET_CATEGORIES} from "../actions/categories.actionsTypes";

const initialState = {
    categories: [],
    err: null
};

const categoriesReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                links: action.links
            };
        default:
            return state;
    }
};

export default categoriesReducer;
