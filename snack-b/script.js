// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



let number = parseInt(prompt("inserisci un numero compresto tra 1 e 10"));
while((number > 10) || (number < 1) ){
    number = parseInt(prompt("errore riprova!"))
}

console.log(number);