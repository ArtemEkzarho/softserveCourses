'use strict';

function PreviewView (parentNode, student) {
    var previewTpl = 
        '<p><b class="inputLabel">Name: </b><span><%=name%></span></p>'+
        '<p><b class="inputLabel">Surname: </b><span><%=surname%></span></p>'+
        '<p><b class="inputLabel">Gender: </b><span><%=gender%></span></p>'+
        '<p><b class="inputLabel">Age: </b><span><%=age%></span></p>'+
        '<p><b class="inputLabel">Mail: </b><span><%=mail%></span></p>'+
        '<p><b class="inputLabel">Skype: </b><span><%=skype%></span></p>'+
        '<p class="btns"><button class="edit">Edit</button><button class="save">Save</button></p>',
        model = student;

    parentNode.empty();
    parentNode.append(helpers.templater(previewTpl, model.toFullJSON()));

    $('.edit').on('click', function () {
    	mediator.publish('showEditView', student);
    });

    $('.save').on('click', function () {
    	mediator.publish('rerenderStudentView', student);
    });

    return this;    
}