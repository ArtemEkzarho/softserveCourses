'use strict';

document.addEventListener("DOMContentLoaded", main, false);

function main () {
    var person = new Person({
        name: 'Artem',
        lastName: 'Ekzarkho',
        age: '18',
        gender: 'boy',
        email: 'artem.ekzarho@gmail.com',
        skype: 'x23-rd23'
    });

    new View(person);
}
