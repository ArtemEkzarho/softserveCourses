'use strict';

function EditView ($place, model) {
	var _tpl = _.template(templates.editTpl);

    $place.empty()
        .append(_tpl(model.getStudentData()));

    $('.preview').on('click', function () {
        var $inputs = $('.editableField');

        model.setStudentData($inputs);
        mediator.publish('showPreviewView', model);
    });

    $('.save').on('click', function () {
        var $inputs = $('.editableField');

        model.setStudentData($inputs);
        mediator.publish('rerenderStudentView', model);
    });

    return this;
}