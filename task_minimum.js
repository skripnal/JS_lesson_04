var numbers = [-5, 2, 12, -64, -3, -1, 0, 5, 64, 8, 3, 87, -45, -22, 22, 21, 7, 8, 2, -1, 0, 2, -2, 5, 9, 10, 11, -4];

function basicSort(a,b){
    return a-b;
}

function reverseSort(a,b){
    return b-a;
}

console.log(numbers.sort(basicSort));
console.log(numbers.sort(reverseSort));

function filterPositive(number){
    return number >=0;
}


function filterNegative(number){
    return number < 0;
}

var positiveArr = numbers.filter(filterPositive);
console.log("Масив позитивних чисел: " + positiveArr);

var negativeArr = numbers.filter(filterNegative);
console.log("Масив негативних чисел: " + negativeArr);