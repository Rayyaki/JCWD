// object...

// declare object

// cara 1 :

let person = {
    nama : "Rizki",
    age : 30
}

let arrperson = Object.keys(person);
console.log(arrperson);

arrperson.map((val) => console.log(person[val]))
// console.log(arrperson);


// ================================================

// getter / setter

let person1 = {
    nama : "Rizki",
    age : 30,

    get person1() {
        return `${this.nama} ${this.lokasi}`;
    },

}


// person1.lokasi = "tembilahan";
// console.log(person1);