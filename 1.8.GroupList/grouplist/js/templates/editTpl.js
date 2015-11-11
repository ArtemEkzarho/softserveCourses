'use strict';

templates.editTpl = ['<p><b class="inputLabel">Name: </b><input class="editableField" type="text" name="name" value="<%=name%>"></p>',
    '<p><b class="inputLabel">Surname: </b><input class="editableField" type="text" name="surname" value="<%=surname%>"></p>',
    '<p><b class="inputLabel">Gender: </b><input class="editableField" type="text" name="gender" value="<%=gender%>"></p>',
    '<p><b class="inputLabel">Age: </b><input class="editableField" type="text" name="age" value="<%=age%>"></p>',
    '<p><b class="inputLabel">Mail: </b><input class="editableField" type="text" name="mail" value="<%=mail%>"></p>',
    '<p><b class="inputLabel">Skype: </b><input class="editableField" type="text" name="skype" value="<%=skype%>"></p>',
    '<p class="btns"><button class="preview">Preview</button><button class="save">Save</button></p>'].join('');