import Constants from "./constants";

export default {
    appName: Constants.appName,
    getComponentName: WrappedComponent => {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
    }
};
