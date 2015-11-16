'use strict';

function Timer () {
	return this;
}

Timer.prototype.toDouble = function (num) {
    var result = num;

    if (num < 10) {
        result = '0' + num;
    }

    return result;
};

Timer.prototype.stop = function() {
	clearInterval(this.timer);
};

Timer.prototype.start = function() {
    this.render();

    this.timer = setInterval($.proxy(function() {
        this.render();
    }, this), 1000);
};