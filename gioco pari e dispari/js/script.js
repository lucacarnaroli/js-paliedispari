// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// L’utente sceglie pari o dispari
var sceltaUtente = prompt('scegli pari o dispari');
var numUtente = parseInt(prompt('scegli un numero da 1 a 5'));
var numRandom = randomNumber(5, 1);

var sommaNum = numUtente + numRandom;
var pariDispari = oddEven(sommaNum);

// if (sommaNum % 2 == 0) {
//   var evenOdd = 'pari'
// } else {
//   var evenOdd = 'dispari';
// }

if (pariDispari == evenOdd) {
  console.log('hai vinto');
} else {
  console.log('hai perso');
}

function randomNumber (numMax, numMin){
  var result = Math.floor(Math.random()* (numMax - numMin +1))+numMin;
  return result
}

function oddEven(numero){
  if (numero % 2 == 0) {
    var evenOdd = 'pari';
  } else {
    var evenOdd = 'dispari';
  }
  return evenOdd
}
