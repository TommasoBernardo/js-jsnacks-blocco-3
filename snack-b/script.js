// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



const number = parseInt(prompt("inserisci un numero compresto tra 1 e 10"));
while((number > 11) || (number < 1) ){
    console.log("ripeti l'operazione");
}

console.log(number);