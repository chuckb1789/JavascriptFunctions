//Function practice Question 1:

var getName = function(o) {
	return o.name;
};

console.log(getName({name:'Luisa', age: 25}));

//Question 2:

var totalLetter = function(words) {
  return words.join(' ').length
}

console.log(totalLetter(['javascript is awesome']));

//Question 3:

var keyValue = function (a, b) {
		var kV = {};
		kV[a] = b
		return kV
  }

console.log(keyValue('city', 'Denver', 'state', 'Colorado'));

console.log('Question 4:');
//
var negativeIndex = function (arr, i) {
  return arr[arr.length + i];
}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));

console.log('Question 5:');

var removeM = function (str) {
	var string = "";
	for (var i=0; i<str.length; i++) {
		if (str[i] != 'm') {
			string += str[i];
		}
	}
	return string
}

console.log(removeM('mello'));

//QUESTION 6

console.log('Question 6:');

var obj = {a: 10,
							b: 20,
							c: 30
							}

var array = Object.keys(obj).map(function (key) {
	return obj+' is '+obj[key]; });

console.log(array);

//QUESTION 7
console.log('QUESTION 7');

var vowels = function(letters) {
	var aaa = []
	for (var i=0; i<letters.length; i++){
		if (letters[i] === 'a') {
			aaa += letters[i]
		} else if (letters[i] === 'e') {
			aaa += letters[i]
		} else if (letters[i] === 'i') {
			aaa += letters[i]
		} else if (letters[i] === 'o') {
			aaa += letters[i]
		} else if (letters[i] === 'i') {
			aaa += letters[i]
		}
	}
	return aaa;
}

console.log(vowels('alabama'));
console.log(vowels('What evil odd ducks!'));

//QUESTION 8
console.log('QUESTION 8');

var twins = function (arr) {
	var a = [];
	var b = [];
	for (var i=1; i<arr.length; i++) {
		if (arr[i] === arr[i-1]) {
		a += arr[i];
		b += arr[i-1];
		}
	}
	return a
	return b
}
// }
//
console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']));
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));

//QUESTION 9
console.log('QUESTION 9');

var or = function (arr) {
	for(var i=0; i<arr.length; i++){
		if (arr[i] === true) {
			return true
		}
	}
	return false
}

console.log(or([false, false, true, false]));
console.log(or([false, false, false]));
console.log(or([]));

//QUESTION 10
console.log('QUESTION 10')

var unique = function (arr) {
	var strings = []
	for (var i=0; i<arr.length; i++) {
		if ( strings.indexOf(arr[i]) ==  -1) {
			strings.push(arr[i])
		}
	}
	return strings
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']));
console.log(unique(['todd', 'avery', 'maria', 'avery']));
