/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 *
 *
 */

// const array = [1,33,55,64,33,22,10,44];
 // funzione che crei un nuovo elemento <p> </p>
 // restituirlo a chi invoca la funzione
 //
 // ciclo per ogni elemento dell'array
 // se l'elemento è un numero pari, crei nuovo elemento e lo aggiungo al div verde
 // se l'elemento è un numero dispari, creo  nuovo elemento e lo aggiungo al div rosso


const numbers = [1,33,55,64,33,22,10,44];

function newElementP(number){
    newP = document.createElement('p');
    newP.innerText = number;
    return newP;
}



const pari = document.getElementById('red');
const dispari = document.getElementById('green');

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        pari.appendChild(newElementP(numbers[i]));
    }else{
        dispari.appendChild(newElementP(numbers[i]));
    }
}