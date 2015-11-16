'use strict';

function DateTimer(clockWrap) {
    this._template = _.template('<%=d%>/<%=m%>/<%=y%>');
    this.clockWrap = clockWrap;
}

extend(DateTimer, Timer);

DateTimer.prototype.render = function () {
    var date = new Date(),
        day = this.toDouble(date.getDate()),
        mounth = this.toDouble(date.getMonth() + 1),
        year = date.getFullYear(),

        output = this._template({
            d: day,
            m: mounth,
            y: year
        });

    this.clockWrap.empty()
        .append(output);
};
