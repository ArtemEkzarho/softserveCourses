'use strict'

var ajax = (function () {
    function sendAjaxRequest (method, url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        xhr.send();

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    callback(this);
                } else {
                    console.log('Request failed.  Returned status of ' + this.status);
                }
            } 
        });
    }

    return {
        send: sendAjaxRequest
    }
}());