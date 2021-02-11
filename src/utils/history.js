import { createBrowserHistory } from "history";
import { useLocation } from "react-router-dom";

const history = createBrowserHistory();

const push = (newPath) => {
    history.push(newPath);
};

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default {
    history,
    push,
    useQuery
};