'use strict';

function tableView (parentNode, students) {
	var finalTpl = '',
		row = '<tr>' +
                '<td><%=name%></td>' +
                '<td><%=surname%></td>' +
                '<td><%=gender%></td>' +
            '</tr>';

    render();

    function render () {
        students.forEach(function (student){
            finalTemplate += helpers.templater(row, student);
        });

        parentNode.innerHTML = finalTemplate;
    }

    return this;
}
