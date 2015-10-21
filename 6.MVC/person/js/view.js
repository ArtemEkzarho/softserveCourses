'use strict';

function View (person) {
    var personKeys = person.toArray(),
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