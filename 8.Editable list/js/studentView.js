'use strict';

function StudentView (student, $wrap) {
	var tpl='<td><%=name%></td>' +
            '<td><%=surname%></td>' +
            '<td><%=gender%></td>' +
            '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>',
        finalRow,
        studentJSON = student.toShortJSON(),
        id = studentJSON.id,
        parentNode = $wrap;

    render(studentJSON);

    console.log(parentNode);

   	$('#person_' + id).on('click', function () {
   		mediator.publish('showEditView', student);
   	});

   	mediator.subscribe('rerenderStudentView', function (data) {
   		render(data.toFullJSON());
    });

    function render (obj) {
		finalRow = helpers.templater(tpl, obj);
		parentNode.empty();
		parentNode.append(finalRow);
    }

    return this;
}