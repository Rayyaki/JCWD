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



// add and delete

let siswa = {
    nama : 'Rayyaki',
    kelas : 'JCWD',
    
}

// cara menambahkan prpperty kedalam object

siswa.hobby = 'coding'
console.log(siswa);

siswa.age = 30
console.log(siswa);

// cara mendelete property pada object






//

let person = {
    fname: "Rizki",
    lname: "Afrianata",
    alname : function () {
        console.log( `My name is  : ${this.fname} ${this.lname}`);
    }
}

person.alname()




// for..in loop

// let person = {
//     name  : 'Rizki',
//     age   : 30,
// }

// for (let key in person){
//     console.log(key);
//     console.log(person[key]);
// }


// // 