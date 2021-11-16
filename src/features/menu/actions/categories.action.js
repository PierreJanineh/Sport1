import {FILTER_CATEGORIES, GET_CATEGORIES, SET_SEARCH_TXT} from "./categories.actionsTypes";
import * as ApiController from '../../../apiController/apiController';

export const getCategories = () => {
    return (dispatch) => {
        ApiController.getMenu()
            .then((result) => {
                result.json().then(json => {
                    dispatch({
                        type: GET_CATEGORIES,
                        categories: json.categories,
                        links: json.links
                    });
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
};

export const filterCategories = () => {
    console.log("hey");
    const searchText = (categories, searchTxt) => {
        const text = searchTxt.toLowerCase();
        console.log("Filter");
        console.log(categories);
        console.log(searchTxt);
        return categories.filter((item) => {
            return item.title.toLowerCase().includes(text);
        })
    };

    return (dispatch, getState) => {
        const categories = getState().categories.mainCategories;
        const searchTxt = getState().categories.searchTxt;

        dispatch({
            type: FILTER_CATEGORIES,
            categories: searchText(categories, searchTxt)
        });
    }
};

export const setSearchText = (s) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_TXT,
            searchTxt: s
        });
    }
};
