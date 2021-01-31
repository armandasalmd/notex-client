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
    },
    toDisplayDate: (date) => {
        if (date instanceof Date) {
            let Y = date.getFullYear(),
                M = (date.getMonth() + 1).toString(),
                D = date.getDate().toString(),
                H = date.getHours().toString(),
                m = date.getMinutes().toString(),
                s = date.getSeconds().toString();

            M = M.length === 1 ? "0" + M : M;
            D = D.length === 1 ? "0" + D : D;
            H = H.length === 1 ? "0" + H : H;
            m = m.length === 1 ? "0" + m : m;
            s = s.length === 1 ? "0" + s : s;

            return `${Y}-${M}-${D} ${H}:${m}:${s}`;
        }

        return typeof date === "string" ? date : "";
    }
};
