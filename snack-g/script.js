/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

function getSumOfArrayElements(array){
    let sum = 0;
    for(let i = 0 ; i < array.lenght ; i++ ){
        const castElement = parseInt(array[i], 10);
        if( ! Number.isNaN(castElement) ){
            sum = sum + castElement;
        }
    }
    return sum;
}

const list = ['0x51232f', '2', '1', 10, 22, 33, 2];

console.log(getSumOfArrayElements(list));