'use strict';

function ShortTimer (clockWrap) {
	this._template = _.template('<%=h%>:<%=m%>');
    this.clockWrap = clockWrap;
}

ShortTimer.prototype.render = function () {
    var date = new Date(),
        hours = this.toDouble(date.getHours()),
        min = this.toDouble(date.getMinutes()),
       
        output = this._template({
            h: hours,
            m: min
        });

    this.clockWrap.empty()
        .append(output);
};

ShortTimer.prototype.toDouble = function (num) {
    var result = num;

    if (num < 10) {
        result = '0' + num;
    }

    return result;
};

ShortTimer.prototype.stop = function() {
	clearInterval(this.timer);
};

ShortTimer.prototype.start = function() {
    this.render();

    this.timer = setInterval($.proxy(function() {
        this.render();
    }, this), 1000);
};