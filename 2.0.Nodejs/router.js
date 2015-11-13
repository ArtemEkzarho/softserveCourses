var fs = require('fs');

function route(pathname, responce) {
    console.log(pathname);

    if(pathname === '/') {
        responce.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
        fs.createReadStream('index.html').pipe(responce);
    }

    if (pathname === "/favicon.ico") {
        responce.writeHead(404);
        responce.end();
        return;
    }

    if (pathname === "/style.css") {
        responce.writeHead(200, {"Content-Type": "text/css"});
        fs.createReadStream('style.css').pipe(responce);
    }

    if (pathname === "/main.js") {
        responce.writeHead(200, {"Content-Type": "text/javascript"});
        fs.createReadStream('main.js').pipe(responce);
    }

    if (pathname === "/correct") {
        responce.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
        responce.write('hello, hello, hello');
        responce.end();
    }
}

exports.route = route;