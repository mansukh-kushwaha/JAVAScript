// Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.

function findMax(...max){
    let a=max[0]
    for(i of max){
        if(a<i){
            a=i
        }
    }
    return a
}
console.log(findMax(20,3,40,5,65,34));
