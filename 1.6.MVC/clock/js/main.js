'use strict';

$(main);

function main() {
    var clockWrap = $('#clock'),
        timer = new ShortTimer(clockWrap);

    timer.start();

    clockWrap.on('click', function () {
        clockWrap.toggleClass('short-timer');
        clockWrap.toggleClass('full-timer');

        timer.stop();
        if (clockWrap.attr('class') === 'full-timer') {
            timer = new FullTimer(clockWrap);
        } else {
            timer = new ShortTimer(clockWrap);
        }
        timer.start();
    });

    clockWrap.on('contextmenu', function (e) {
        e.preventDefault();

        clockWrap.removeClass('short-timer').addClass('full-timer');

        timer.stop();
        timer = new DateTimer(clockWrap);
        timer.start();
    });
}
