
// soal no 1 =================================
console.log('==========SOAL NO 1==============');
console.log('\n');

function Sisegi(h) {
    let value = 1
    let has = ''
    for (let i = 1; i <= h; i++){
      
        for( let j = 0; j <= i; j++){
            if (value < 10) has += '0' + value + ' ';
            else has += value + ' ';
            value++;
        }

        
    
    }
}




// soal no 2==================================================

// console.log('=================SOAL NO 2=======================');
// console.log('\n');

// function fizzbuzz(num) {

//     let v = 3;
//     let c = 5;
//     for (let i = 1; i <= num; i++) {
        
//         if ( i == v * c ){
//             console.log('Fizz-Buzz');
//         } else if ( i % 5 == 0){
//             console.log('Buzz');
//         } else if ( i % 3 == 0 ){
//             console.log('Fizz');
//         } else {
//             console.log(i);
//         }
        
//     }
//     return fizzbuzz;
// }

// console.log('Menampilkan manipulasi angka dengan kata "Fizz-Buzz"');
// console.log('\n');

// fizzbuzz(15);
// console.log('\n');


// //soal no 3============================================
// console.log('===============SOAL NO 3=================');
// console.log('\n');

// function BMI(w,h) {
    
//     let H = (w / (h * h)) * 10000;
    

//     if (H < 18.5){
//         console.log('Less Weight');
//     } else if ( H >= 18.5 && H <= 24.9){
//         console.log('Ideal');
//     } else if ( H >= 25.0 && H <= 29.9){
//         console.log('OverWeight');
//     } else if ( H >= 30.0 && H <= 39.9){
//         console.log('Very Overweight');
//     } else if ( H > 39.9){
//         console.log(' Obecity');
//     } 

//     return BMI;
// }

// console.log('Menampilkan hasil perhitungan BMI');
// console.log('\n');
// BMI(72,153);
// console.log('\n');
// // ==========================================
// console.log('==============SOAL NO 4============');
// console.log('\n');

// let arr = [1,2,3,4,5,6,7,8,9];

// const fill = arr.filter((val) => {
//  if (val % 2 == 0) return val;
// })

// console.log('Menghilangkan semua angka ganjil pada sebuah array');
// console.log('\n');
// console.log(fill);
// console.log('\n');


// //===========================================
// // Soal NO 5
// console.log('==================Soal No 5====================');
// console.log('\n');
// let str = "Hello World";
// let myarr = str.split(" ")
// console.log('Merubah string berikut :');
// console.log(str);
// console.log('Menjadi bentuk Array  :');
// console.log(myarr);
// console.log('\n');

// //==========================================