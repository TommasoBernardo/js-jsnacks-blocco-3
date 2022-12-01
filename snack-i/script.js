/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */


const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const randomNumber = [];

function numbersRandom(min , max){
    const numberRandomGenerated = Math.floor(Math.random()* (max - min + 1) - min);

    return numberRandomGenerated;
}

const searchNumbers = 10;

for ( let i = 0; i == searchNumbers ; i++){
    let check = numbersRandom(1, searchNumbers)
}