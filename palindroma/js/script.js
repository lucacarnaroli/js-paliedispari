var parola = prompt('inserisci una parola');
var pali = parola.indexOf('', 1)&('', 2);
var pali2 = parola.lastIndexOf('', 1)&('', 2);

if (pali === pali2) {
  console.log('palindroma');
} else {
  console.log('no');
}

// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
