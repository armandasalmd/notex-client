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
    },
    getValue: (target, path, defaultValue, pathSeparator = ".") => {
        if (!target || typeof path !== "string") {
            return defaultValue;
        } else {
            return path.split(pathSeparator).reduce((p, c) => (p && p[c]) || defaultValue, target);
        }
    },
    hasLength: (object) => {
        return typeof object === "string" || Array.isArray(object) ? object.length > 0 : false;
    }
};
