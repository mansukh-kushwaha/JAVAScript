// Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator.

function makeCoffee(type,...ing){
    let sum=""
    for(i of ing){
        sum+=i
    }
    console.log("Your Coffee is",type,"that contain:",sum,"as Ingredients"); 
}

makeCoffee("Essperso","Milk ","Sugar ","Cream")