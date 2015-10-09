'use strict';

document.addEventListener("DOMContentLoaded", function(){
    var date = new Date(),
    	month = date.getMonth() + 1,  
    	days = date.getDate(),
    	year = date.getFullYear(),
    	hours = date.getHours(),
    	minutes = date.getMinutes(),
    	seconds = date.getSeconds(),
        clock = document.getElementById('clock'),
        secondsWrap = document.getElementById('secondsWrap'),
        dateWrap = document.getElementById('dateWrap'),
        clockWrap = document.getElementById('clockWrap');

    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = days;
    document.getElementById('year').innerHTML = year;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    function changeTimeStatus () {
        var seconds = secondsWrap.className,
        	clock = clockWrap.className;

  		if (clock === 'show') {
  			if (seconds === 'hide') {
	            secondsWrap.className = 'show';
	        } else {
	            secondsWrap.className = 'hide';
	        }
  		} else {
  			dateWrap.className = 'hide';
        	secondsWrap.className = 'hide';
        	clockWrap.className = 'show';
  		}
    } 

    function changeToDate () {
        dateWrap.className = 'show';
        clockWrap.className = 'hide';
    }

   	clock.addEventListener('click', changeTimeStatus, false);
    clock.addEventListener('contextmenu', changeToDate, true);

}, false);

