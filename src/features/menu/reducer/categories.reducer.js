import {FILTER_CATEGORIES, GET_CATEGORIES, SET_SEARCH_TXT} from "../actions/categories.actionsTypes";

const initialState = {
    mainCategories: [],
    categories: [],
    searchTxt: ""
};

const categoriesReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                mainCategories: action.categories,
                categories: action.categories,
                links: action.links
            };
        case FILTER_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                links: action.links
            };
        case SET_SEARCH_TXT:
            return {
                ...state,
                searchTxt: action.searchTxt
            };
        default:
            return state;
    }
};

export default categoriesReducer;
