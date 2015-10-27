'use strict';

function View () {
    var person = new Person({
            name: 'Artem',
            lastName: 'Ekzarkho',
            age: '18',
            gender: 'boy',
            email: 'artem.ekzarho@gmail.com',
            skype: 'x23-rd23'
        }),
        personKeys = person.toArray(),
        editForm = getEL('#editForm'),
        reviewForm = getEL('#reviewForm'),
        reviewBtn = getEL('#reviewBtn'),
        editBtn = getEL('#editBtn'),
        inputs = getAllEl('.inputCell input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = personKeys[i];
    }

    reviewBtn.addEventListener('click', goToReview, false);
    editBtn.addEventListener('click', goToEdit, false);

    function goToReview () {
        editForm.className = 'editForm hide';
        reviewForm.className = 'reviewForm';

        person.setData();
        person.getData();
    }    

    function goToEdit () {
        editForm.className = 'editForm';
        reviewForm.className = 'reviewForm hide';
    }

    return this;
}