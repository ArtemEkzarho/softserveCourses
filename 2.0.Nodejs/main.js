'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        var xhr = new XMLHttpRequest(),
            h1 = document.querySelector('h1');

        xhr.open('GET', '/correct', true);

        xhr.send();

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    h1.innerHTML = this.responseText;
                }
            }
        });
    }, false);
}, false);
