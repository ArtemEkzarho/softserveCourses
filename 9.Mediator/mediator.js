'use strict';

function Mediator () {
    var channels = {};

    this.subsribe = function (channel, handler) {
        channels[channel] = handler;
    };

    this.publish = function (channel, data) {
        var key;

        for (key in channels) {
            if (key === channel) {
                channels[key](data);
            }
        }
    };
}