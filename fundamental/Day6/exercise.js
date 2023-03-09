// Soal No 1

class Student {

     constructor(name, email, age, score){
     this.name = name;
     this.email = email;
     this.score = score;
     this.age = age;
    
    
    } 


}

const student1 = new Student('Rizki', 'Rizki@gmail.com', 30, 90, );
const student2 = new Student('Afri', 'Afri@gmail.com', 27, 95, );
const student3 = new Student('Nata', 'Nata@gmail.com', 25, 85, );

// Age :

let [ars1, ars2, ars3 ] = [student1.age, student2.age, student3.age ]
let arage = [ars1, ars2, ars3]
let ageT = Math.max.apply(Math, arage);
let ageR = Math.min.apply(Math, arage);
let a = arage.reduce ((a,b) => a+b);
let ageRA = a / arage.length


// Score :

let [ars4, ars5, ars6] = [student1.score, student2.score, student3.score]
let arsc = [ars4, ars5, ars6]
console.log(arsc);
let scT = Math.max.apply(Math, arsc);
let scR = Math.min.apply(Math, arsc);
let b = arsc.reduce ((a,b) => a+b);
let scRA = b / arsc.length

// console.log('SCORE :');
// console.log(scT); 
// console.log(scR);
// console.log(scRA);
// console.log('AGE :');
// console.log(ageT); 
// console.log(ageR);
// console.log(ageRA);


class AgeScore {
    constructor(Tertinggi, Terendah, Rata2){
        this.Tertinggi = Tertinggi;
        this.Terendah = Terendah;
        this.Rata2 = Rata2;
    }

}

// function calcut (arrayS){

// let scT = Math.max.apply(Math, arsc);
// let scR = Math.min.apply(Math, arsc);

// const umur = new AgeScore(`${scT}`, `${scR}`, `${scRA}`)
// console.log(umur);
// const skor = new AgeScore(`${ageT}`, `${ageR}`, `${ageRA}`,)
// console.log(skor);

// return {umur,skor} 

// }

// calcut(umur,skor);