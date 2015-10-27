'use strict';

function Person (obj) {
    var data = obj;

    this.toArray = function () {
        var result = [],
            key;

        for (key in data) {
            result.push(data[key]);
        }
        
        return result;
    };
      
    this.setData = function () {
        var inputs = getAllEl('.inputCell input'),
            i = 0,
            key;

        for (var key in data) {
            data[key] = inputs[i].value;
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
