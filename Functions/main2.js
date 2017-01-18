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


var palindrome = function (str) {
  if (str === str.split('').reverse().join('')) {
    return true
    } else {
    return false
  }
}

console.log(palindrome('hannah'))
console.log(palindrome('b'))

var dashInsert = function (num) {
    var numStr = num.toString().split('');
    console.log(numStr);

    for (var i = 0; i < numStr.length-1; i++){
      console.log(numStr[i]);
    if ((numStr[i]%2 != 0) && (numStr[i+1]%2 != 0)) {
          numStr.splice(i+1, 0, "-");
          i++
          }
        }
    return numStr.join('')
  }

console.log(dashInsert(1234538))

//------------------CAESAR CIPHER BONUS-----------------------------------------

console.log('BONUS');

var caesarCipher = function (str, num) {
  if (num>-26 && num<26) {
    var convert = str.split('');
    var value = []
    var newValue =[]
    var newConvert = []
    console.log(convert)
    for (var i=0; i<convert.length; i++) {
      value.push(convert[i].charCodeAt());
    }

    console.log(value)

    for (var i=0; i<value.length; i++) {
      if(value[i] != 32 && value[i] != 90 && value[i] != 65 && value[i] != 97 && value[i] != 122) {
        newValue.push(value[i]+num);
      } else if(num>0 && value[i] === 90) {
        newValue.push(value[i]-26+num)
      } else if(num>0 && value[i] === 122) {
        newValue.push(value[i]-26+num)
      } else if(num<0 && value[i] === 65) {
        newValue.push(value[i]+26+num)
      } else if(num<0 && value[i] === 97) {
        newValue.push(value[i]+26+num)
      } else {
        newValue.push(value[i]);
      }
    };

    console.log(newValue)

    for (var i=0; i<newValue.length; i++) {
      newConvert.push(String.fromCharCode(newValue[i]));
      }
    return newConvert.join('')
  }
  else {return "NO!"};
}
console.log(caesarCipher("The Zoo is an awesome place to go", -2));
