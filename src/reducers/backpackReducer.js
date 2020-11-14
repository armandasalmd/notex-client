import { FETCH_NOTEBOOKS } from "@actions/types";

const initialState = {
    isFetched: false,
    notebooks: []
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTEBOOKS:
			return {
				isFetched: true,
				notebooks: action.payload
			}
        default:
            return state;
    }
};

export default reducer;