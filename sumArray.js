// Create a function combineArrays that accepts an unknown number of arrays using the rest operator and returns one combined array.

function combineArrays(...b){
    c=[]
 for(i of b){
    let sum=0
    for(j of i){
        sum+=j
    }
    c.push(sum)
 }
 return c
}

console.log(combineArrays([10,20,30],[1,2,3],[4,4,4],[1,1,1,1,1]));
