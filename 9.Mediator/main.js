'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var divRed = document.querySelector('.red'),
        divGreen = document.querySelector('.green'),
        divBlue = document.querySelector('.blue'),

        mediator = new Mediator();


    divRed.addEventListener('click', function () {
        mediator.publish('changeColor', 'red');
    }, false);

    divGreen.addEventListener('click', function () {
        mediator.publish('changeColor', 'green');
    }, false);

    divBlue.addEventListener('click', function () {
        mediator.publish('changeColor', 'blue');
    }, false);

    mediator.subsribe('changeColor', function (data) {
        divRed.className = data;
        divGreen.className = data;
        divBlue.className = data;

    })

}, false);



