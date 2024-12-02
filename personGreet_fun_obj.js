// Create an object person with a method greet that prints a greeting message using the name property.

function greet(name,msg){
            return`${msg} ${name}`
}
let person={
    name:"Mansukh",
    age:20,
    city:"Jaipur"
}
let {name,age,city}=person

console.log(greet(name,"Good Morning!"));
