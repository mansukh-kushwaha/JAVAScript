// Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided, it should default to "user".

function createUserProfile(name,email,role="user"){
            return`Name=${name}\nEmail=${email}\nRole=${role}`
}

console.log(createUserProfile("Mansukh","mansukhkushwaha@gmail.com","Student"));
