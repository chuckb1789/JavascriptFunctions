var person = prompt ("What's your name?", "Charlie");

var number = prompt ("Please provide your 7 digit phone number. This will not be used for SPAM", "XXXXXXXXXX");

if (isNaN(number)) {
  alert ("Uh oh! Please try again!");
} else {
  alert ("Thank You!");
}

var birthdate = prompt ("Please provide you date of birth", "MM/DD/YYYY");

if (birthdate.length = 10) {
  if (birthdate.charAt[2] == '/' && birthdate.charAt [5] == '/' ) {
    }
  alert ("Thanks!");
  }  else {
  alert ("Try again!");
  }
