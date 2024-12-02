// Create a function introduce that takes three positional arguments: firstName, lastName, and age, and returns a sentence introducing the person.

function introduce(firstName,lastName,age){
        console.log("Hello My name is",firstName,lastName,"and my age is",age);
        
}

introduce("Mansukh","Kushwaha",20)


// Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".


function displayInfo(name,age,city="Unknown"){
    console.log("Hello My name is",name,",my age is",age,".I live in",city);
    
}

displayInfo("Mansukh",20,"Jaipur")