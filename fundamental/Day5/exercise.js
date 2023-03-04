// Soal no1
// console.log('=============SOAL NO 1============');
// console.log('\n');
// console.log('Membuat Fungsi untuk Mencari nilai terendah, tertinggi, dan rata-rata dengan dan tanpa sort');
// console.log('\n');
// console.log('A. Dengan Menggunakan Fungsi Sort');
// let arr = [1,5,8,6,100,12,108,22];

// // menggunakan sort
// arr.sort(function(a,b){
//     return a - b;
// })

// let Ntinggi = arr.length - 1;
// let temprata = arr.reduce (function(a,b){
//     return a+b
// });

// let Nrata = temprata / arr.length

// console.log(`NIlai tertinggi dari elemen Array berikut   ${arr}   adalah :  ${arr[Ntinggi]}`);
// console.log(`NIlai terendah dari elemen Array berikut    ${arr}   adalah :  ${arr[0]}`);
// console.log(`NIlai rata-rata dari elemen Array berikut   ${arr}   adalah :  ${Nrata}`);

// console.log('\n');
// console.log('B. Tanpa Menggunakan Fungsi Sort');

// let tertinggi = Math.max.apply(Math, arr);
// let terendah = Math.min.apply(Math, arr);


// console.log(`NIlai tertinggi dari elemen Array berikut   ${arr}   adalah :  ${tertinggi}`);
// console.log(`NIlai terendah dari elemen Array berikut    ${arr}   adalah :  ${terendah}`);
// console.log(`NIlai rata-rata dari elemen Array berikut   ${arr}   adalah :  ${Nrata}`);
// console.log('\n');


// //Soal No 2
// console.log('=============SOAL NO 2============');
// console.log('\n');
// console.log('Membuat fungsi untuk memanipulasi elemen array dan menambahkan concatonation');
// console.log('\n');
// let arr1 =  ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu",];
// let arr2 = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu",];
// let Nr2 = arr2.toString();
// console.log(Nr2);
// let slais = Nr2.slice(36,42);
// let pop = arr2.pop();
// // console.log(arr2);
// let Nr3 = arr2.concat(" dan ", slais);
// let str = Nr3.toString();

// console.log(`memanupilasi elemen array barikut :`);
// console.log(arr1);
// console.log(`Menjadi :`);
// console.log(`1. dalam bentuk array  :`);
// console.log(Nr3);
// console.log(`1. dalam bentuk string :`);
// console.log(str);
// console.log('\n');

// // let dan = " dan ";
// let New = new Array (arr2 + ' dan ' + pop);
// New.join(',  ')
// console.log(New);
// // console.log(arr2);


//Soal No 3
// console.log('=============SOAL NO 3============');
// console.log('\n');
// console.log('Membuat fungsi mengubah teks menjadi sebuah array dengan funsi split');
// console.log('\n');

// let kata = "Salam Berasap Dari Dunia Koding";
// let hasil = kata.split(" ");

// console.log('Hasil funsi split dari text berikut :');
// console.log(kata);
// console.log('adalah sebagai berikut :');
// console.log(hasil);
// console.log('\n');


//Soal no 4
console.log('=============SOAL NO 4============');
console.log('\n');
console.log('Fungsi untuk menjumlahkan 2 buah array numerik pada elemen yang indexnya sama');
console.log('\n');

let arr4 = ["1","5","9"];
let arr4a = ["3","6","7"];
let hasil = 0

let Narr4 = arr4.toString();
let Narr4a = arr4a.toString();

    for( let i = 0; i < arr4; i++){
        hasil.push(Narr4[i] + Narr4a[i])
    }

    console.log(hasil);

// let arr5 = [arr4[0]+arr4a[0],arr4[1]+arr4a[1],arr4[2]+arr4a[2]];
// console.log(arr5);