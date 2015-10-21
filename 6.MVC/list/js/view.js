'use strict';

function View () {
    var list = getEl('#students tbody'),
        finalTemplate= '',
        students = [
            new Person('Artem', 'Ekzarkho', 'boy'),
            new Person('Yevheniia', 'Kryschyk', 'girl'),
            new Person('Yulyia', 'Lur\'eva', 'girl'),
            new Person('Dmytro', 'Shashkov', 'boy'),
            new Person('Marian', 'Kotsylovs\'kyi', 'boy'),
            new Person('Oleksandr', 'Poltorak', 'boy'),
            new Person('Dmytryi', 'Hun\'ko', 'boy'),
            new Person('Oleksandr', 'Den\'ha', 'boy')
        ],
        row = '<tr>' +
                  '<td><%=name%></td>' +
                  '<td><%=surname%></td>' +
                  '<td><%=gender%></td>' +
              '</tr>';

    function templater (template, list) {
        var completedRow = template;

        for(var key in list) {
            completedRow = completedRow.replace('<%=' + key + '%>', list[key]);
        }

        return completedRow;
    }

    for (var i = 0; i < students.length; i += 1) {
        finalTemplate += templater(row, students[i]);
    }

    list.innerHTML = finalTemplate;

    return this;
}
