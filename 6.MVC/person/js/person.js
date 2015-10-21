'use strict';

function Person (obj) {
    var name = obj.name,
        lastName = obj.lastName,
        age = obj.age,
        gender = obj.gender,
        email = obj.email,
        skype = obj.skype,
        nameInput = getEl('#nameInput'),
        lastnameInput = getEl('#lastnameInput'),
        ageInput = getEl('#ageInput'),
        genderInput = getEl('#genderInput'),
        emailInput = getEl('#emailInput'),
        skypeInput = getEl('#skypeInput');

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
        var textPlaces = getEl('.textCell p'),
            keys = this.toArray();

        for (var i = 0; i < textPlaces.length; i++) {
            textPlaces[i].innerHTML = keys[i];
        }        
    };

    return this;
}
