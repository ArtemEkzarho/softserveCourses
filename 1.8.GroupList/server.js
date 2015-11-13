var http = require("http"),
    url = require("url");

function start(route) {
    function onRerquest(request, response) {
        var pathname = url.parse(request.url).pathname;

        route(pathname, response);
    }

    http.createServer(onRerquest).listen(3000);
}

exports.start = start;