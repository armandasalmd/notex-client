const immediateDispatch = (type, payload) => (dispatch) => dispatch({ type, payload });

export default {
    immediateDispatch
};
