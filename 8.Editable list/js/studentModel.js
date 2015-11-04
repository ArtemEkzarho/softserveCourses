'use strict';

function StudentModel (personalData) {
    var personalData = personalData;

    this.toShortJSON = function () {
        var json = {};

        json.id = personalData.id;
        json.name = personalData.name;
        json.surname = personalData.surname;
        json.gender = personalData.gender;

        return json;
    };

    this.toFullJSON = function () {
        return personalData;
    };

    this.set = function (inputs) {
        var keyForPersonalData; 

        inputs.each(function (index, input) {
            keyForPersonalData = input.name;
            personalData[keyForPersonalData] = input.value;
        });
    }

    return this;
}