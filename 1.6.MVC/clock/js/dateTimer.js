'use strict';

function DateTimer(clockWrap) {
    this._template = _.template('<%=d%>/<%=m%>/<%=y%>');
    this.clockWrap = clockWrap;
}

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

DateTimer.prototype.toDouble = function (num) {
    var result = num;

    if (num < 10) {
        result = '0' + num;
    }

    return result;
};

DateTimer.prototype.stop = function() {
    clearInterval(this.timer);
};

DateTimer.prototype.start = function() {
    this.render();

    this.timer = setInterval($.proxy(function() {
        this.render();
    }, this), 1000);
};