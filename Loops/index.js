console.log ('Example');
//Example:
for (var i = 0; i < 5; i++) {
  console.log (i);
}

console.log ('Question1');
//Question 1:
for (var i = 0; i <= 5; i++) {
  console.log (i*100);
}

console.log ('Question2');
//Question 2:
for (var i = 1; i <= 7; i++) {
  var num;
  if (i === 1) {
    console.log (i);
    num = i;
  } else {
    num = num * 2;
    console.log (num);
  }
}

console.log ('Question3');
//Question 3:
for (var i = 1; i <= 9; i++) {
  var num;
  if (i === 1 || i === 2 || i === 3) {
    num = 1;
    console.log (num);
  } else if (i === 4 || i === 5 || i === 6 ) {
    num = 2;
    console.log (num);
  } else {
    num = 3;
    console.log (num);
  }
 }
console.log ('Question4');
//Question 4:
for (var i = 0; i <= 5; i++) {
  console.log (i * 2);
}

//Question 5
console.log ('Question5');

for (var i = 1; i <= 5; i++) {
  console.log (i * 3);
}

//Question 6
console.log ('Question6');

for (var i = 9; i >=0; i--) {
  console.log (i);
}

//Question 7 (find alternative way with nested loops)
console.log ('Question7');

for (var i = 0; i <=3; i++) {
  if (i === 0 || i === 1 || i === 2 || i === 3) {
    num = "0 1 2 3"
  }
  console.log (num);
}
