//const urlFor = (endpoint) => {
//    return `http://localhost:44394/api.rsc/${endpoint}`;
//};

export function get(url) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.response);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send();
    });
}

export function post(url, requestuestBody) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.responseText);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send(requestuestBody);
    });
}

export function put(url, requestuestBody) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("PUT", url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.responseText);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send(requestuestBody);
    });
}

export function remove(url) {
    return new Promise(function (succeed, fail) {
        var request = new XMLHttpRequest();
        request.open("DELETE", url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.addEventListener("load", function () {
            if (request.status < 400)
                succeed(request.responseText);
            else
                fail(new Error("Request failed: " + request.statusText));
        });
        request.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        request.send();
    });
}