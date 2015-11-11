'use strict';

function StudentView ($wrap, student) {
    var _tpl = _.template(templates.studentTpl),
        finalRow,
        model = student;

    render(model.getStudentData());

    $wrap.find('.editBtn').on('click', function () {
        mediator.publish('showEditView', model);
    });

    mediator.subscribe('rerenderStudentView', function (data) {
        if (data.getStudentData().id === model.getStudentData().id) {
            render(data.getStudentData());
        }
    });

    function render (list) {
        finalRow = _tpl(list);

        $wrap.empty()
            .append(finalRow);
    }

    return this;
}