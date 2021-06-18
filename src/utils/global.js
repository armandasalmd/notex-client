import Constants from "./constants";

const isEmpty = (val) => {
    if (val == null) return true;
    if ("boolean" == typeof val) return false;
    if ("number" == typeof val) return val === 0;
    if ("string" == typeof val) return val.length === 0;
    if ("function" == typeof val) return val.length === 0;
    if (Array.isArray(val)) return val.length === 0;
    if (val instanceof Error) return val.message === "";
    
    // eslint-disable-next-line
    if (val.toString == Object.prototype.toString) {
        switch (val.toString()) {
            case "[object File]":
            case "[object Map]":
            case "[object Set]":
                return val.size === 0;
            case "[object Object]": {
                for (let key in val)
                    if (Object.prototype.hasOwnProperty.call(val, key)) return false;

                return true;
            }
            default:
                return false;
        }
    }

    return false;
};

export default {
    appName: Constants.appName,
    callIfFunction: (functionToCall, ...functionArgs) => {
        if (typeof functionToCall === "function") {
            functionToCall(...functionArgs);
        }
    },
    getComponentName: (WrappedComponent) => {
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
    isAnyEmpty: (...items) => {
        return Array.isArray(items) ? items.some(isEmpty) : true;
    },
    isEmpty,
    isGuid: (value) => {
        let regex = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i;
        let match = regex.exec(value);

        return match != null;
    },
    isPromise: (promise) => {
        return !!promise && typeof promise.then === "function";
    },
    pluralise: (word, count) => {
        return parseInt(count) > 1 ? word + "s" : word;
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
    },
    toDisplayTime: (date) => {
        if (!date) return "NaN";

        date = typeof date === "object" ? date : new Date(date);

        const intervals = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 },
        ];
        const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
        const interval = intervals.find((i) => i.seconds < seconds);
        const count = Math.floor(seconds / interval.seconds);

        return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    },
    toDisplayCount: (num) => {
        const lookup = [
            { value: 1, symbol: "" },
            { value: 1e3, symbol: "k" },
            { value: 1e6, symbol: "M" },
            { value: 1e9, symbol: "G" },
            { value: 1e12, symbol: "T" },
            { value: 1e15, symbol: "P" },
            { value: 1e18, symbol: "E" },
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let item = lookup
            .slice()
            .reverse()
            .find(function (item) {
                return num >= item.value;
            });

        return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";
    },
};
