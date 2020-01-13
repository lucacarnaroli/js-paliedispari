// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var pariDispari = prompt('scegli pari o dispari');
console.log(pariDispari);

var num = parseInt(prompt('scegli un numero da 1 a 5'));
console.log(num);
var random = Math.floor(Math.random()* 5)+ 1;
console.log(random);

// senza funzione
// var somma = random + num;
// console.log(somma);
//
// if (somma % 2 == 0) {
//   console.log('pari hai vinto');
// } else {
//   console.log('dispari hai perso');
// }
var somma = numPariDispari(random, num);
console.log(somma);
// con funzione
function numPariDispari(random, num) {
  if (sommaNum % 2 == 0) {
    console.log('pari hai vinto');
  } else {
    console.log('dispari hai perso');
  }
  var sommaNum = random + num;
  return sommaNum;
}
