// Continuare a chiedere all'utente un numero tra 1 e 10 fino a quando l'utente non inserisce il valore corretto



let number;
while((number > 10) || (number < 1) ){
    number = parseInt(prompt("inserisci il numero corretto"))
}

console.log(number);