'use strict';

function FullTimer(clockWrap) {
    this._template = _.template('<%=h%>:<%=m%>:<%=s%>');
    this.clockWrap = clockWrap;
}

extend(FullTimer, Timer);

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
