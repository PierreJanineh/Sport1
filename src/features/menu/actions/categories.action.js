import {GET_CATEGORIES} from "./categories.actionsTypes";
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
