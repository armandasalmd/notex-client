import Constants from "./constants";

export default {
    appName: Constants.appName,
    getComponentName: WrappedComponent => {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
    },
    callIfFunction: (...args) => {
        if (typeof args[0] === "function") {
            args[0](...args.splice(1));
        }
    }
};
