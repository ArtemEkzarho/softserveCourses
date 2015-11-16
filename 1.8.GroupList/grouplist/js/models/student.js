'use strict';

function Student (studentData) {
    var studentData = studentData;

    this.getStudentData = function () {
        return studentData;
    }

    this.setStudentData = function ($inputs) {
        var key;

        $inputs.each(function (index, input) {
            key = input.name;
            studentData[key] = input.value;
        });
    }

    return this;
}