'use strict';

function TableView (parentNode, students) {
    var finalTpl = '',
        row = '<tr>' +
                '<td><%=name%></td>' +
                '<td><%=surname%></td>' +
                '<td><%=gender%></td>' +
            '</tr>';

    render();

    function render () {
        students.forEach(function (student){
            finalTpl += helpers.templater(row, student.toJSON());
        });

        parentNode.innerHTML = finalTpl;
    }

    return this;
}
