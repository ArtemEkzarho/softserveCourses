'use strict';

document.addEventListener("DOMContentLoaded", main, false);

function main () {
	console.log(toPalindrome(5));
} 

function toPalindrome (number) {
	var result = number;
	
	while (isPalindrom(result) === false) {
	  console.log(result);
	  result++;
	}

	return result;
}

function isPalindrom (number) {
	var numbers = String(number).split(''),
		halfLength = numbers.length / 2,
		centerIndex = halfLength.toFixed() - 1,
		i,
		countdown = centerIndex,
		result;

		if (numbers.length === 1) {
			result = false;
		} else {
			if (numbers.length%2 === 0) {
				for (i = 0; i < numbers.length; i++) {
					if (i > centerIndex) {
						if (numbers[i] === numbers[countdown]) {
							result = true;
						} else {
							result = false;
							break;
						}
						countdown--;
					}
				} 
			} else {
				for (i = 0; i < numbers.length; i++) {
					if (i > centerIndex) {
						countdown--;
						if (numbers[i] === numbers[countdown]) {
							result = true;
						} else {
							result = false;
							break;
						}
					}
				}
			}			
		}

	return result;	
}