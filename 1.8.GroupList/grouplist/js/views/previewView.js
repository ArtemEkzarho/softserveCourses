'use strict';

function PreviewView ($place, model) {
     var _tpl = _.template(templates.previewTpl);
    
    $place.empty()
        .append(_tpl(model.getStudentData()));

    $('.edit').on('click', function () {
        mediator.publish('showEditView', model);
    });

    $('.save').on('click', function () {
        mediator.publish('rerenderStudentView', model);
    });

    return this;
}