'use strict';

function Person (obj) {
    this.toArray = function () {
        var result = [];

        for (var key in obj) {
            result.push(obj[key]);
        }
        
        return result;
    };
      
    this.setData = function () {
        var inputs = getAllEl('.inputCell input'),
            i = 0;

        for (var key in obj) {
            obj[key] = inputs[i].value;
            i++;
        }    
    };

    this.getData = function () {
        var textPlaces = getAllEl('.textCell p'),
            keys = this.toArray();

        for (var i = 0; i < textPlaces.length; i++) {
            textPlaces[i].innerHTML = keys[i];
        }        
    };

    return this;
}
