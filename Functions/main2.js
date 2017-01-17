var firstReverse = function (str) {
  var split = str.split('');
  var reverse = split.reverse();
  var join = reverse.join('');
  return join
}

console.log(firstReverse('hello'));

var swapCase = function (str) {
  var first = str[0].toLowerCase();
  var rest = '';
  for (var i=1; i<str.length; i++) {
    rest += str[i];
  }
  console.log(first);
  var restOf = rest.toUpperCase();
  console.log(rest);
  return first + restOf
}


console.log(swapCase("Hello World"));
