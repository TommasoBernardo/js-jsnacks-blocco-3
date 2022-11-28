//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà 
//tanti quanti l'altro.

let arrayElement1 = [5, 10, 12, 13];

let arrayElement2 = [5, 10];

let sum = 0;

while(arrayElement2.lenght != arrayElement1.length ){   
    let number = parseInt(prompt("inserisci un numero"));
    arrayElement2.push(number);

    arrayElement1.push(number); 
}

console.log(arrayElement1);
console.log(arrayElement2);
