//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà 
//tanti quanti l'altro.

let arrayElement1 = [5, 10, 12, 13];

let arrayElement2 = [5, 10];



while(arrayElement2.lenght != arrayElement1.length ){   
    if(arrayElement1.lenght < arrayElement2.length){
        arrayElement1.push(0);
    }else{
        arrayElement2.push(0);
    }

}

console.log(arrayElement1);
console.log(arrayElement2);
