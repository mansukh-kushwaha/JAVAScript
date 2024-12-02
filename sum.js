// Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.

function sumNumbers(...sum){
    let s=0
    for(i of sum){
        s+=i
    }
    console.log(s);
    
}
sumNumbers(30,40,50,67,566,45,1,34)

function addNumbers(...add){
    let sum=0
    for(i of add){
        sum+=i
    }
    console.log(sum);
}
addNumbers(30,40,50,56)