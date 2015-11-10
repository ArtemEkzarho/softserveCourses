var fs = require('fs');

function route(pathname, response) {
	var file;
	console.log(pathname);

	if (pathname === "/favicon.ico") {
        response.writeHead(404);
        response.end();
        return;
    } else if (pathname === '/students.json') {
    	file = new fs.ReadStream('students.json');

		file.pipe(response);
    } else if (pathname === '/') {
		file = new fs.ReadStream('grouplist/index.html');
		
		file.pipe(response);
	} else {
		file = new fs.ReadStream('grouplist' + pathname);

		file.pipe(response);
	}
}

exports.route = route;