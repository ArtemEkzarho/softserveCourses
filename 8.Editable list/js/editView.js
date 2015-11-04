'use strict';

function EditView (parentNode, student) {
    var editableTpl = 
        '<p><b class="inputLabel">Name: </b><input type="text" name="name" value="<%=name%>"></p>'+
        '<p><b class="inputLabel">Surname: </b><input type="text" name="surname" value="<%=surname%>"></p>'+
        '<p><b class="inputLabel">Gender: </b><input type="text" name="gender" value="<%=gender%>"></p>'+
        '<p><b class="inputLabel">Age: </b><input type="text" name="age" value="<%=age%>"></p>'+
        '<p><b class="inputLabel">Mail: </b><input type="text" name="mail" value="<%=mail%>"></p>'+
        '<p><b class="inputLabel">Skype: </b><input type="text" name="skype" value="<%=skype%>"></p>'+
        '<p class="btns"><button class="preview">Preview</button><button class="save">Save</button></p>';

    parentNode.empty();
    parentNode.append(helpers.templater(editableTpl, student.toFullJSON()));

    $('.preview').on('click', function () {
    	var inputs = $('input');

    	student.set(inputs);
    	mediator.publish('showPreviewView', student);
    });

    $('.save').on('click', function () {
    	var inputs = $('input');

    	student.set(inputs);
    	mediator.publish('rerenderStudentView', student);
    });

    return this;
}