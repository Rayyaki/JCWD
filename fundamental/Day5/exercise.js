// // Soal no1
console.log('=============SOAL NO 1============');
console.log('\n');
console.log('Membuat Fungsi untuk Mencari nilai terendah, tertinggi, dan rata-rata dengan dan tanpa sort');
console.log('\n');
console.log('A. Dengan Menggunakan Fungsi Sort');

let arr = [1,5,8,6,100,12,108,22,800];

// menggunakan sort

function minMax(arr) {
    arr.sort(function(a,b){
        return a - b;
    })
    let Ntinggi = arr.length - 1;
    let temprata = arr.reduce((a,b)=> a+b) // Menggunakan arrow function

    // let temprata = arr.reduce (function(a,b){         // Menggunakan function biasa
    //     return a+b
    // });
    
    let Nrata = temprata / arr.length
    
    console.log(`NIlai tertinggi dari elemen Array berikut   ${arr}   adalah :  ${arr[Ntinggi]}`);
    console.log(`NIlai terendah dari elemen Array berikut    ${arr}   adalah :  ${arr[0]}`);
    console.log(`NIlai rata-rata dari elemen Array berikut   ${arr}   adalah :  ${Nrata}`);
    
    console.log('\n');
    console.log('B. Tanpa Menggunakan Fungsi Sort');
    
    let tertinggi = Math.max.apply(Math, arr);
    let terendah = Math.min.apply(Math, arr);
    
    
    console.log(`NIlai tertinggi dari elemen Array berikut   ${arr}   adalah :  ${tertinggi}`);
    console.log(`NIlai terendah dari elemen Array berikut    ${arr}   adalah :  ${terendah}`);
    console.log(`NIlai rata-rata dari elemen Array berikut   ${arr}   adalah :  ${Nrata}`);
    console.log('\n');    
}
minMax(arr)


// //Soal No 2
console.log('=============SOAL NO 2============');
console.log('\n');
console.log('Membuat fungsi untuk memanipulasi elemen array dan menambahkan concatonation');
console.log('\n');

let arr1 =  ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];


function ExerNo2(arr1) {
    let arr2 = [...arr1];
    let pop = arr2.pop();
    let Nr3 = arr2 + " dan " + pop;

    console.log(`memanupilasi elemen array barikut :`);
    console.log(arr1);
    console.log(`Menjadi string dan menambah penghubung di antaranya :`);
    console.log(Nr3);
    console.log('\n');
}

ExerNo2 (arr1)



// Soal No 3
console.log('=============SOAL NO 3============');
console.log('\n');
console.log('Membuat fungsi mengubah teks menjadi sebuah array dengan funsi split');
console.log('\n');

let kata = "Salam Berasap Dari Dunia Koding";

function ExerNo3(kata) {

let hasil = kata.split(" ");

console.log('Hasil funsi split dari text berikut :');
console.log(kata);
console.log('adalah sebagai berikut :');
console.log(hasil);
console.log('\n');

};

ExerNo3(kata)


//Soal no 4
console.log('=============SOAL NO 4============');
console.log('\n');
console.log('Fungsi untuk menjumlahkan setiap elemen yang indexnya sama pada 2 buah array numerik');
console.log('\n');

let arr4 =  [1,2,3,9,15];
let arr4a = [4,5,6,5,19];

function ExerNo4(arr4, arr4a) {

    let hasilarr = arr4.map((value,index) => value + arr4a[index]);

console.log("Hasil penjumlahan setiap elemen dari array berikut :");
console.log(arr4);
console.log("dan");
console.log(arr4a);
console.log("adalah :");
console.log(hasilarr);
console.log('\n');

}

ExerNo4(arr4, arr4a)


// //Soal No 5
console.log('=============SOAL NO 5============');
console.log('\n');
console.log('Fungsi untuk menambahkan elemen baru yang belum ada pada sebuah array');
console.log('\n');

let arr5 = ["Rayyaki", "Rayyasi", "Rayyagi", "Rayyala",];
let adarr5 = "Rayyaki";

function Exer5(arr5, adarr5) {
    
    console.log("Array Awal");
    console.log(arr5);
    console.log("Elemen yang di tambahkan");
    console.log(adarr5);
    console.log("Result :");

     if (arr5.includes(adarr5)){
        console.log("Addition is canceled, because the element you input already exists");
    } else {
        console.log("Addition was Successful");
        arr5.push(adarr5);
    }

console.log(arr5);

}

Exer5(arr5, adarr5)
console.log('\n');




// //Soal No 6
console.log('=============SOAL NO 6============');
console.log('\n');
console.log('Fungsi untuk menghapus elemen angka ganjil pada sebuah array dan hanya menampilkan angka genap');
console.log('\n');


let arr6 = [];
let Gnp = [];

function gangen(awal, akhir) {
    
    for ( i = awal; i <= akhir; i++){
        arr6.push(i)
         if (i % 2 == 0){
            Gnp.push(i)
         } 
    }
    
    console.log("Array awal :");
    console.log(arr6);
    console.log("Hasil setelah mengeleminasi Angka Ganjil  :");
    console.log(Gnp);
    console.log('\n');
}

gangen(0,100)
  

