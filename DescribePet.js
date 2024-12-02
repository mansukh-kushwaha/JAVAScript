// Write a function describePet that accepts two arguments: petName and petType. If no petType is provided, it should default to "dog".

function describePet(petName,petType="Dog"){
        return(`Pet Name is ${petName} and it is a ${petType}`);
}

console.log(describePet("Rocky"));
