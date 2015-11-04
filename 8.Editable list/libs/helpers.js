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

        completedRow = completedRow.split('<%=').join('').split('%>').join('');

        return completedRow;
    }

    function forEach (collection, func) {
        [].forEach.call(collection, func);
    }

    function render (tpl, model, node) {
        node.innerHTML = helpers.templater(tpl, model);
    }

    return {
        getEl: getEl,
        getAllEl: getAllEl,
        templater: templater,
        forEach: forEach,
        render: render
    }
}());
