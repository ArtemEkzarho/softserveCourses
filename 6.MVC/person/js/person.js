'use strict';

function Person (obj) {
    var name = obj.name,
        lastName = obj.lastName,
        age = obj.age,
        gender = obj.gender,
        email = obj.email,
        skype = obj.skype,
        nameInput = document.querySelector('#nameInput'),
        lastnameInput = document.querySelector('#lastnameInput'),
        ageInput = document.querySelector('#ageInput'),
        genderInput = document.querySelector('#genderInput'),
        emailInput = document.querySelector('#emailInput'),
        skypeInput = document.querySelector('#skypeInput');

    this.toArray = function () {
        return [name, lastName, age, gender, email, skype];
    };
      
    this.setData = function () {
        name = nameInput.value;
        lastName = lastnameInput.value;
        age = ageInput.value;
        gender = genderInput.value;
        email = emailInput.value;
        skype = skypeInput.value;
    };

    this.getData = function () {
        var textPlaces = document.querySelectorAll('.textCell p'),
            keys = this.toArray();

        for (var i = 0; i < textPlaces.length; i++) {
            textPlaces[i].innerHTML = keys[i];
        }        
    };

    return this;
}
