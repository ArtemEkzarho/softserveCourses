'use strict';

document.addEventListener("DOMContentLoaded", main, false);

function main () {
	console.log(toPalindrome(12321));
} 

function toPalindrome (number) {
	var numbers = String(number).split(''),
		halfLength = numbers.length / 2,
		centerIndex = halfLength.toFixed() - 1,
		countdown = centerIndex,
		result = [],
		i,
		newNumber;

	if (numbers.length === 1) {
		result = 11;
	} else {
		if (numbers.length%2 === 0) {
			for (i = 0; i < numbers.length; i++) {
				if (i > centerIndex) {
					if (i === centerIndex + 1) {
						if (numbers[i + 1] > numbers[i]) {
							result.push(+numbers[i - 1] + 1);
						} else {
							result.push(+numbers[i - 1]);
						}
						continue;
					}

					countdown--;
					result.push(+numbers[countdown]);

				} else if (i === centerIndex) {
					if (numbers[i + 1] > numbers[i]) {
						result.push(+numbers[i] + 1);
					} else {
						result.push(+numbers[i]);
					}
				} else {
					result.push(+numbers[i]);
				}
			}

			result = result.join('');
		} else {
			for (i = 0; i < numbers.length; i++) {
				if (i > centerIndex) {
					countdown--;
					result.push(+numbers[countdown]);
				} else {
					result.push(+numbers[i]);
				}
			}

			result = result.join('');
		}
	}

	return result;
}