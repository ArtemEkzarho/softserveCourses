'use strict';

function FullTimer(clockWrap) {
    this._template = _.template('<%=h%>:<%=m%>:<%=s%>');
    this.clockWrap = clockWrap;
}

FullTimer.prototype.render = function () {
    var date = new Date(),
        hours = this.toDouble(date.getHours()),
        min = this.toDouble(date.getMinutes()),
        sec = this.toDouble(date.getSeconds()),

        output = this._template({
            h: hours,
            m: min,
            s: sec
        });

    this.clockWrap.empty()
        .append(output);
};

FullTimer.prototype.toDouble = function (num) {
    var result = num;

    if (num < 10) {
        result = '0' + num;
    }

    return result;
};

FullTimer.prototype.stop = function() {
    clearInterval(this.timer);
};

FullTimer.prototype.start = function() {
    this.render();

    this.timer = setInterval($.proxy(function() {
        this.render();
    }, this), 1000);
};