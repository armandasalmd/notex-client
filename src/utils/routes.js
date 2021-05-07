import { Constants, RouteVariables } from "@utils";
import axios from "axios";

var BackendServers = {
    notexMain: {
        prodHost: "https://notex-api.herokuapp.com",
        devHost: "http://localhost:3001",
        prefix: "/api",
        preferDevHost: false
    },
    nexus: {
        prodHost: "https://notex-nexus.herokuapp.com",
        devHost: "https://localhost:49153",
        prefix: "/nexus",
        preferDevHost: false
    }
};

function resolveHostName(server) {
    let host = ""; // intentionally left blank - production mode

    if (Constants.env === "development" && server) {
        host = server.preferDevHost ? server.devHost : server.prodHost;
    }

    return host.replace(/\/*$/, "");
}

const resolveUrl = (path) => {
    if (path === null) {
        return undefined;
    }

    if (typeof path === "object" && path.path !== undefined) {
        path = path.path;
    }

    if (Constants.env === "production" || path.startsWith("http")) {
        return path;
    } else if (path.startsWith(BackendServers.nexus.prefix)) {
        return resolveHostName(BackendServers.nexus) + path;
    } else {
        return resolveHostName(BackendServers.notexMain) + path;
    }
};

const getMenuItems = (isAuth) => {
    const offlineLinks = [
        RouteVariables.app.public.landing,
        RouteVariables.app.shared.search,
        RouteVariables.app.public.about,
        RouteVariables.app.auth.login,
        RouteVariables.app.auth.register,
    ];
    const onlineLinks = [
        RouteVariables.app.private.main, 
        RouteVariables.app.shared.search, 
        RouteVariables.app.private.articleManagement,
        RouteVariables.app.private.settings
    ];

    return isAuth ? onlineLinks : offlineLinks;
};

const sendApiRequest = (apiRoute, bodyData, queryParams) => {
    let url = resolveUrl(apiRoute.path) || "/";

    if (queryParams && typeof queryParams === "object") {
        let queryString = "?";
        
        for (let key in queryParams) {
            queryString += `${key}=${queryParams[key]}&`;
        }

        url += queryString.slice(0, -1);
    }

    return axios({
        method: apiRoute.method || "GET",
        url,
        data: bodyData || {},
    });
};

const downloadFile = async (apiRoute) => {
    await axios({
        method: apiRoute.method,
        url: resolveUrl(apiRoute.path),
        responseType: "blob",
    })
        .then((response) => {
            let fileName = response.headers["content-disposition"].split("filename=")[1];
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // IE variant
                window.navigator.msSaveOrOpenBlob(
                    new Blob([response.data], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    }),
                    fileName
                );
            } else {
                const url = window.URL.createObjectURL(
                    new Blob([response.data], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    })
                );
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", response.headers["content-disposition"].split("filename=")[1]);
                document.body.appendChild(link);
                link.click();
            }
        })
        .catch((err) => {
            console.error("Cannot download file");
            console.error(err);
        });
};

export default {
    ...RouteVariables,
    downloadFile,
    sendApiRequest,
    getMenuItems,
    resolveHostName,
    resolveUrl,
    servers: BackendServers,
};
