import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default {
    history,
    push: (newPath) => {
        history.push(newPath);
    }
};