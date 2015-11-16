'use strict';

var mediator = new Mediator();

$(function () {
	ajax.send('GET', '/students.json', function (res) {
        var group = new Group(JSON.parse(res.responseText)); 
        
        initController(group);
    });    

    function initController (group) {
		var controller = new Controller(group.getModels());
    }
});