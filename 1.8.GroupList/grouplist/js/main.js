'use strict';

$(main);

var mediator = new Mediator();

function main () {

    ajax.send('GET', '/students.json', function (res) {
        var group = new Group(JSON.parse(res.responseText)); 
        
        initController(group);
    });    

    function initController (group) {
        var $tablePlace = $('#students tbody'),
            $editableForm = $('#editableForm'),
            controller = new Controller($tablePlace, $editableForm, group.getModels());
    }
}