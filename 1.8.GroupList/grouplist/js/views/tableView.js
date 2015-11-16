'use strict';

function TableView ($place, students) {
    var $tr;

    render();

    function render () {
        var studentView;

        $(students).each(function (index, student) {
            $tr = $('<tr></tr>');
            $place.append($tr);

            studentView = new StudentView($tr, student);
        });
    }

    return this;
}
