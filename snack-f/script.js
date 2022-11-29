/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(min , max){
    if(min === max){
        return max;
    }

    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}
