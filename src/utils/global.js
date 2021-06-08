import Constants from "./constants";

export default {
    appName: Constants.appName,
    callIfFunction: (functionToCall, ...functionArgs) => {
        if (typeof functionToCall === "function") {
            functionToCall(...functionArgs);
        }
    },
    getComponentName: WrappedComponent => {
        return WrappedComponent.displayName || WrappedComponent.name || "Component";
    },
    getRandomNumber(min, max) {
        // Returns a random number between min (inclusive) and max (exclusive)
        return Math.round(Math.random() * (max - min) + min);
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
    isGuid: (value) => {
        let regex = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
        let match = regex.exec(value);
        
        return match != null;
    },
    isPromise: (promise) => {
        return !!promise && typeof promise.then === "function";
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
