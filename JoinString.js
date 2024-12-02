// Write a function joinStrings that accepts an unknown number of strings using the rest operator and returns them concatenated into one string

function joinStrings(...strings){
    let sum=""
    for(i of strings){
        sum+=i
    }
    return sum
}

console.log(joinStrings("Hello ","My name is Mansukh "," I'm in Regex Software Services"));
