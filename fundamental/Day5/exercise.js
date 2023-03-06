// // Soal no1
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
// let arr1 =  ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
// let arr2 = [...arr1];
// let Nr2 = arr2.toString();
// let pop = arr2.pop();
// let slais = Nr2.slice(36,42);
// let Nr3 = arr2 + " dan " + slais;


// console.log(`memanupilasi elemen array barikut :`);
// console.log(arr1);
// console.log(`Menjadi array dan menambah penghubung di antaranya :`);
// console.log(Nr3);
// console.log('\n');



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
// console.log('=============SOAL NO 4============');
// console.log('\n');
// console.log('Fungsi untuk menjumlahkan setiap elemen yang indexnya sama pada 2 buah array numerik');
// console.log('\n');

// let arr4 =  [1,2,3,9,15];
// let arr4a = [4,5,6,5,19];

// let hasilarr = arr4.map((value,index) => value + arr4a[index]);

// console.log("Hasil penjumlahan setiap elemen dari array berikut :");
// console.log(arr4);
// console.log("dan");
// console.log(arr4a);
// console.log("adalah :");
// console.log(hasilarr);
// console.log('\n');




// //Soal No 5
// console.log('=============SOAL NO 5============');
// console.log('\n');
// console.log('Fungsi untuk menambahkan elemen baru yang belum ada pada sebuah array');
// console.log('\n');

// let arr5 = ["Rayyaki", "Rayyasi", "Rayyagi", "Rayyala",];
// let adarr5 = "Rayyana";

// console.log("Array Awal");
// console.log(arr5);
// console.log("Elemen yang di tambahkan");
// console.log(adarr5);
// console.log("Result :");

//      if (arr5.includes(adarr5)){
//         console.log("Addition is canceled, because the element you input already exists");
//     } else {
//         console.log("Addition was Successful");
//         arr5.push(adarr5);
//     }


// console.log(arr5);




// //Soal No 6
// console.log('=============SOAL NO 6============');
// console.log('\n');
// console.log('Fungsi untuk menghapus elemen angka ganjil pada sebuah array dan hanya menampilkan angka genap');
// console.log('\n');


// let arr6 = [1,8,6,5,7,9,13,19,22];

// let Narr6 = arr6.filter((val) =>{
//       if ( val % 2 == 0 ) return val
// })

// console.log("Array awal :");
// console.log(arr6);
// console.log("Hasil Eleminasi Angka Ganjil  :");
// console.log(Narr6);
// console.log('\n');