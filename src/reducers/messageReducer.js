import { PUSH_MESSAGE, REMOVE_MESSAGES_BY_ID } from "@actions/types";
import { MESSAGE_TYPES } from "@actions/messageActions";

const initialState = {
    messageIdCounter: 0,
    messageQueue: []
};

// messageQueue => [{ id: 0, text: "", type: "" }]

const messageTypes = Object.keys(MESSAGE_TYPES);

export default function (state = initialState, action) {
    switch (action.type) {
        case PUSH_MESSAGE:
            if (action.payload.text) {
                state.messageQueue.push({
                    id: state.messageIdCounter,
                    text: action.payload.text,
                    type: messageTypes.includes(action.payload.type) ? action.payload.type : "info"
                });

                state.messageIdCounter++;
            }

            return {
                ...state
            };
        case REMOVE_MESSAGES_BY_ID:
            if (action.payload !== undefined) {
                const ids = Array.isArray(action.payload) ? action.payload : [action.payload];

                if (ids.length > 0) {
                    state.messageQueue = state.messageQueue.filter((message) => {
                        return !ids.includes(message.id);
                    });
                }
            }

            return state;
        default:
            return state;
    }
}
