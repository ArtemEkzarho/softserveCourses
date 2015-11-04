'use strict';

function TableView (parentNode, students) {
    var studentsViews = [],
        finalTpl = '',
        $wrap;

    render();

    function render () {
        var studentView;

        students.forEach(function (student){
            $wrap = $('<tr></tr>');
            parentNode.append($wrap);
            studentView = new StudentView(student, $wrap);
            studentsViews.push(studentView);
        });
    }
    return this;
}
