'use strict';

function ShortTimer (clockWrap) {
	this._template = _.template('<%=h%>:<%=m%>');
    this.clockWrap = clockWrap;
}

extend(ShortTimer, Timer);

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
