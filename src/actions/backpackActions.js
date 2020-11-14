import { RouteUtils } from "@utils";
import { FETCH_NOTEBOOKS } from "@actions/types";

export const fetchNotebooks = () => {
    return function (dispatch) {
        const route = RouteUtils.api.notebook.getAll;

        RouteUtils.sendApiRequest(route, {})
            .then(res => {
                if (res.status === 200 && res.data.data) {
                    dispatch({
                        type: FETCH_NOTEBOOKS,
                        payload: res.data.data
                    });
                } else {
                    // TODO: replace with global error for the user
                    console.log("Error while fetching");
                }
            })
            .catch(err => {
                // TODO: replace with global error for the user
                // dispatch way
                console.log(err);
            });
    };
};