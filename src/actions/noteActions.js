import { RouteUtils } from "@utils";
import { ADD_NEW_NOTEBOOK } from "@actions/types";

export const addNewNotebook = (notebookName, owner) => {
    return function (dispatch) {
        if (notebookName && owner) {
            const route = RouteUtils.api.notebook.addNotebook;
            const dto = {
                owner: owner,
                title: notebookName
            };
            
            RouteUtils.sendApiRequest(route, dto)
                .then(res => {
                    dispatch({
                        type: ADD_NEW_NOTEBOOK,
                        payload: res.data.data
                    });
                })
                .catch(err => {
                    // TODO: replace with global error for the user
                    // dispatch way
                    console.log(err);
                });
        } else {
            console.warn("Invalid notebook name or owner");
        }
    };
};