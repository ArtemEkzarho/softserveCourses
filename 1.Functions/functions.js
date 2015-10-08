function getMaxNumber(first, second, third) {
	var maxNumber = first;

	for (var i = 0; i < arguments.length; i += 1) {
		if (arguments[i] > maxNumber) {
			maxNumber = arguments[i];
		}
	}

	return maxNumber;
}

function getMaxElemetFrom(arr) {
	var maxElemet = arr[0];

	for (var i = 0; i < arr.length; i += 1) {
		if (arr[i] > maxElemet) {
			maxElemet = arr[i];
		}
	}

	return maxElemet;
}

function getIndexOfMinElementFrom(arr) {
	var minElement = arr[0],
		minIndex = 0;

	for (var i = 0; i < arr.length; i += 1) {
		if(arr[i] < minElement) {
			minElement = arr[i];
			minIndex = i;
		}
	}

	return minIndex;
}

function getCopyArrayFrom(arr) {
	var newArr = [];

	for(var i = 0; i < arr.length; i += 1) {
		newArr.push(arr[i]);
	}

	return newArr;
}


// false - decreasing, true - increasing
function sortWithDiraction(arr, direction) {
	if (direction) {
		return arr.sort(function(a,b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});
	} else {
		return arr.sort(function(a,b) {
			if (a < b) {
				return 1;
			} else {
				return -1;
			}
		});
	}
}

//fixed indents
