//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà 
//tanti quanti l'altro.

const arrayElement1 = [5, 10, 12, 13];

const arrayElement2 = [5, 10];

let sum = 0;

while(arrayElement1 != arrayElement2 ){
    let number = parseInt(prompt("inserisci un numero"));
    arrayElement2.push(number);
}

console.log(arrayElement1);
console.log(arrayElement2);
