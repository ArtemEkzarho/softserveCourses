'use strict';

function TableModel (personalData) {
    var name = personalData.name,
        surname = personalData.surname,
        gender = personalData.gender;

    this.toJSON = function () {
        var json = {};

        json.name = name;
        json.surname = surname;
        json.gender = gender;

        return json;
    }

    return this;
}