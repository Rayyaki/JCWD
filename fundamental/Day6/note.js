// creating object

// cara 1 :
// let user = {};

// //  cara 2 :
// let user2 = new Object();


// Property and method
let user = {
    name: "rizki",
    greating(){
        console.log("Hello" + user[this.name]);
    }
}






// for..in loop

let person = {
    name  : 'Rizki',
    age   : 30,
}

for (let key in person){
    console.log(key);
    console.log(person[key]);
}