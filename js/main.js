var lenght = 16;
var lastName = "Johnson";

var cars = ["Saab", "Volvo", "BMW"];

var person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "ul. preslav",
        number: 21,
    },
    pets: ["cat", "dog", "fish"],
}

var person2 = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "ul. preslav",
        number: 21,
    },
    pets: ["cat", "fish"],
}

function getPersonPets(person){
   person.pets.forEach(function(pet){
       console.log(pet);
   })
}

function checkPersonForDog(){
    var hasDog = false;
    if(person.pets.indexOf("dog") !== -1){
        hasDog = true;
    }

    return hasDog;
}

/*var dogCheckInterval = setInterval(function(){
    var hasDog = checkPersonForDog(person2);
    console.log('hasDog');
}, 3000);
*/
