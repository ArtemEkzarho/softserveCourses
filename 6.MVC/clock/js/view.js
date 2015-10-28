'use strict';

function View(clockWrap) {
    this.addClock = function(state) {
        var date = new Date,
            hours = toDouble(date.getHours()),
            minutes = toDouble(date.getMinutes()),
            seconds = toDouble(date.getSeconds()),
            month = toDouble(date.getMonth() + 1),
            day = toDouble(date.getDate()),
            year = date.getFullYear();

           if (state === 'time') {
               clockWrap.className = 'time';
               clockWrap.innerHTML = hours + ':' + minutes;
           } else if (state === 'extendedTime') {
               clockWrap.className = 'extendedTime';
               clockWrap.innerHTML = hours + ':' + minutes + ':' + seconds;
           } else {
               clockWrap.className = 'date';
               clockWrap.innerHTML = day + '/' + month + '/' + year;
           }
    }

    function toDouble (number) {
        var str = String(number); 
        if (str.length === 1) {
            str = '0' + str;
        }

        return str;
    }

    return this;
}
