// number

let angka = 10000;

let inf = Infinity; // infinity untuk melambangkan angka terbesar di javascript
let mininf = -Infinity; // infinity untuk melambangkan angka terkecil di javascript

let str = angka.toString(); // cara 1 untunk mengubah angka menjadi string
let str2 = angka + ""; // cara 2 untunk mengubah angka menjadi string

console.log(angka.toLocaleString("id-ID")); //merubah angka menjadi bentuk currency / perhitungan uang indonesia
console.log(angka.toFixed(2)); // menampilkan jumalah angka desimal di belakang koma.
console.log(str);
console.log(str2);

console.log(angka++); // postFiix => menampilkan angka original nya dlu baru di tambah,
console.log(++angka); // preFix => menambahkan dulu baru menampilkan hasilnya.
