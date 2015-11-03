'use strict';

function Group (students) {
    var studentsModels = [];

    init();

    function init () {
        helpers.forEach(students, function (student) {
            studentsModels.push(new StudentModel(student));
        });
    }

    this.toArray = function () {
        return studentsModels;
    }

    return this;
};