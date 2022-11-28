const listNumbers = [];
let sum = 0;


// FACCIO UN CICLO PER POPOLARE L'ARRAY FINO A 50 ELEMENTI
while (sum <= 50){
    let number = parseInt(prompt("inserisci un numero minore di 50"));
    sum += number;
    listNumbers.push(number);
}
    

console.log(sum);
console.log(listNumbers);