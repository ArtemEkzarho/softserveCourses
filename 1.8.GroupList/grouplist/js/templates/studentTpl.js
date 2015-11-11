'use strict';

templates.studentTpl = ['<td><%=name%></td>',
    '<td><%=surname%></td>',
    '<td><%=gender%></td>',
    '<td class="actions"><button class="editBtn" id="person_<%=id%>">Edit</button></td>'].join('');