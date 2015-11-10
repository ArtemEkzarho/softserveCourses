'use strict';

$(main);

var mediator = new Mediator();

function main () {
    var xhr = new XMLHttpRequest(),
        h1 = document.querySelector('h1');

    xhr.open('GET', '/students.json', true);

    xhr.send();

    xhr.addEventListener('readystatechange', function () {
        var group;

        if (this.readyState === 4) {
            if (this.status === 200) {
                group = new Group(JSON.parse(this.responseText));

                initController(group);
            }
        }
    });

    function initController (group) {
        var $tablePlace = $('#students tbody'),
            $editableForm = $('#editableForm'),
            controller = new Controller($tablePlace, $editableForm, group.getModels());
    }
}