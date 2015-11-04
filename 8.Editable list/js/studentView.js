'use strict';

function StudentView (student, $wrap) {
	var tpl='<td><%=name%></td>' +
            '<td><%=surname%></td>' +
            '<td><%=gender%></td>' +
            '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>',
        finalRow,
        studentJSON = student.toShortJSON(),
        id = studentJSON.id,
        $wrap = $wrap;

    render(studentJSON);

    console.log($wrap);

   	$('#person_' + id).on('click', function () {
   		mediator.publish('showEditView', student);
   	});

   	mediator.subscribe('rerenderStudentView', function (data) {
   		render(data.toFullJSON());
    });

    function render (obj) {
		finalRow = helpers.templater(tpl, obj);
		$wrap.append(finalRow);
    }

    return this;
}