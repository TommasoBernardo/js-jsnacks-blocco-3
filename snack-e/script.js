const  listLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

const listNumbers = [1, 2, 3, 4, 5,6];

const  newList = [];

for( let i = 0 ; i < listLetters.length ; i++){
    newList.push(listLetters[i], listNumbers[i]);
}

console.log(newList);