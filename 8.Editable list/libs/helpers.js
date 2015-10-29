'use strict'

var helpers = (function (){
    function getEl (selector) {
        return document.querySelector(selector);
    }

    function getAllEl (selector) {
        return document.querySelectorAll(selector);
    }

    function templater (template, list) {
        var completedRow = template,
            key;

        for (key in list) {
            completedRow = completedRow.replace('<%=' + key + '%>', list[key]);
        }

        return completedRow;
    }

    return {
        getEl: getEl,
        getAllEl: getAllEl,
        templater: templater
    }
}());
