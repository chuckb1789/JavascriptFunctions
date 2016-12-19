// 1.
var tripleFive = function () {
    for (var i=0; i<3; i++) {
    console.log ('Five!');
    }
};

// 2.
var lastLetter = function (str) {
  return str [str.length-1];
};

console.log( lastLetter('hello'));
console.log( lastLetter('island'));

// 3.
var square = function (sqr) {
  return sqr * sqr;
};

console.log (square (3));
console.log (square (5));

// 4.
var negate = function (num) {
  return -1 * num;
}

console.log (negate (5));
console.log (negate (-8));
// 5.
var toArray = function (a,b,c) {
  return [a,b,c];
}

console.log (toArray (1, 4, 5));
console.log (toArray (8, 9, 10));
// 6.
 var startsWithA = function (wit) {
   return wit[0] === 'A';
 }

 console.log (startsWithA ('Aardvark') === true, 'startsWithA');
 console.log (startsWithA ('bear') === true, 'startsWithA');

 // 7.
var excite = function (exclaim) {
return exclaim+"!!!";
}

console.log (excite ("yes"));
console.log (excite ("go"));

// 8.
var sun = function (str) {
  return str.indexOf('sun') >= 0;
}

console.log( sun('sundries') === true, 'sun' );
console.log( sun('asunder') === true, 'sun' );
console.log( sun('catapult') === false, 'sun' );

// 9.
var tiny = function (number) {
  {if (number > 0 && number < 1)
  return "true";
  }
}

console.log (tiny(.3));
console.log (tiny(15) === 'false');
console.log (tiny(-5) === 'false');

// 10.
var getSeconds = function(timespan) {
	var minutesString = timespan.substring (0, 2);
	var secondsString = timespan.substring (3, 5);
	var minutes = parseInt(minutesString);
	var seconds = parseInt(secondsString);
	return (minutes * 60) + seconds;
}

console.log( getSeconds('01:30'));
console.log( getSeconds('10:25'));
