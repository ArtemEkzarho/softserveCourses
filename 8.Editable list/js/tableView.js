'use strict';

function TableView (parentNode, students) {
    var finalTpl = '',
        row = '<tr>' +
                '<td><%=name%></td>' +
                '<td><%=surname%></td>' +
                '<td><%=gender%></td>' +
                '<td class="actions"><button class="editBtn">Edit</button></td>'+
            '</tr>';

    render();
    addHandlers();

    function render () {
        students.forEach(function (student){
            finalTpl += helpers.templater(row, student.toJSON());
        });

        parentNode.innerHTML = finalTpl;
    }

    function addHandlers () {
        var btns = helpers.getAllEl('.editBtn');

        [].forEach.call(btns, function (item) {
            item.addEventListener('click', function () {
                console.log('1');
            });
        });
    }

    return this;
}
