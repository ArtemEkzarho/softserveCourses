'use strict';

function View () {
    var list = document.getElementById('students'),
        tr,
        students = [
            new Person('Artem', 'Ekzarkho', 'boy'),
            new Person('Yevheniia', 'Kryschyk', 'girl'),
            new Person('Yulyia', 'Lur\'eva', 'girl'),
            new Person('Dmytro', 'Shashkov', 'boy'),
            new Person('Marian', 'Kotsylovs\'kyi', 'boy'),
            new Person('Oleksandr', 'Poltorak', 'boy'),
            new Person('Dmytryi', 'Hun\'ko', 'boy'),
            new Person('Oleksandr', 'Den\'ha', 'boy')
        ];

    function createTd (str, parent) {
        var td = document.createElement('TD');
        td.innerHTML = str;

        parent.appendChild(td);
    }

    for (var i = 0; i < students.length; i++) {        
        tr = document.createElement('TR');
        createTd(students[i].name, tr);
        createTd(students[i].surname, tr);
        createTd(students[i].gender, tr);

        list.appendChild(tr);    
    }

    return this;
}
