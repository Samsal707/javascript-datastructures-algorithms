var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


let reduced = numbers.reduce(function(previous, current, index){
    return previous + current;
});

console.log(reduced)