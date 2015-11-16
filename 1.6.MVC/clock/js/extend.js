'use strict';

function extend (child, parent) {
    function Surogate () {}
    Surogate.prototype = parent.prototype;
    child.prototype = new Surogate();
    child.prototype.contstructor = child;
    child.superclass = parent.prototype;
}