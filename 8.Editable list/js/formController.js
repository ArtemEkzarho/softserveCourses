'use strict';

function FormController (modelId) {
    var parentNode = helpers.getEl('#editableForm'),
        editview = new EditView(parentNode, modelId);

    return this
}