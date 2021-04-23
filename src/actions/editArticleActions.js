import { SET_ACTIVE_EDIT_COLLECTION } from "@actions/types";
import { pushMessage, MESSAGE_TYPES } from "@actions/messageActions";

import { RouteUtils } from "@utils";

export const initialiseEditCollection = (collectionIdentifier) => (dispatch) => {
    const route = RouteUtils.api.articleManagement.getEditArticlePageModel;

    const query = {
        [route.queryNames.identifier]: collectionIdentifier
    };

    const onFail = () => dispatch(pushMessage("Error. Cannot retrieve your data", MESSAGE_TYPES.error));

    RouteUtils.sendApiRequest(route, {}, query)
        .then((res) => {
            if (res.data) {
                dispatch({
                    type: SET_ACTIVE_EDIT_COLLECTION,
                    payload: {
                        identifier: collectionIdentifier,
                        data: res.data
                    }
                });
            } else {
                onFail();
            }
        })
        .catch(onFail);

};