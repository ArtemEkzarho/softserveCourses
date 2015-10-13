'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var reviewBtn = getEl('reviewBtn'),
        editBtn = getEl('editBtn'),
        editForm = getEl('editForm'),
        reviewForm = getEl('reviewForm'),
        person = new Person({
            name: 'Artem',
            lastName: 'Ekzarkho',
            age: '18',
            gender: 'boy',
            email: 'artem.ekzarho@gmail.com',
            skype: 'x23-rd23'
        });

    addInfoToForm();

    reviewBtn.addEventListener('click', goToReview, false);
    editBtn.addEventListener('click', goToEdit, false);

    function addInfoToForm () {
        getEl('nameInput').value = person.name;
        getEl('lastnameInput').value = person.lastName;
        getEl('ageInput').value = person.age;
        getEl('genderInput').value = person.gender;
        getEl('emailInput').value = person.email;
        getEl('skypeInput').value = person.skype;
    }

    function addInfoToObj () {
        person.name = getEl('nameInput').value;
        person.lastName = getEl('lastnameInput').value;
        person.age = getEl('ageInput').value;
        person.gender = getEl('genderInput').value;
        person.email = getEl('emailInput').value;
        person.skype = getEl('skypeInput').value;
    }

    function goToReview () {
        editForm.className = 'editForm hide';
        reviewForm.className = 'reviewForm';
        addInfoToObj();
        setInfoToReview();
    }

    function goToEdit () {
        editForm.className = 'editForm';
        reviewForm.className = 'reviewForm hide';
    }

    function setInfoToReview () {
        getEl('nameValue').innerHTML = person.name;
        getEl('lastnameValue').innerHTML = person.lastName;
        getEl('ageValue').innerHTML = person.age;
        getEl('genderValue').innerHTML = person.gender;
        getEl('emailValue').innerHTML = person.email;
        getEl('skypeValue').innerHTML = person.skype;
    }

});

function getEl (selector) {
    return document.getElementById(selector);
}

function Person (obj) {
    this.name = obj.name;
    this.lastName = obj.lastName;
    this.age = obj.age;
    this.gender = obj.gender;
    this.email = obj.email;
    this.skype = obj.skype;

    return this;
}
