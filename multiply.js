// Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.

function multiply(x,y=1){
    return x*y  
}

let call=multiply(45,2)
console.log(call);
