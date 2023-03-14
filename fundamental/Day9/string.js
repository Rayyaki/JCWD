let str = new String("abc");
let str2 = "pisang pisang goreng";

console.log(str);
console.log(str2);
console.log(str2.charAt(1)); //untuk mencari karakter keberapa didalam string, contoh karakter 1
console.log(str2.length); // untuk menghitung jumlah karakter didalam sebuah string termasuk spasi
console.log(str2.includes("pisang")); //untuk mengecek kata atau karakter di dalam kupulan string, hasilnya true or false
console.log(str2.indexOf("goreng"));
// untuk mencari index dari sebuah string berdasarkan karakter awal yang string yang mau di cari
// dan juga ngecek apakah yang ingin dicari ada didalam kumpulan string (jika tdk ada hasilya (-1))
console.log(str2.lastIndexOf("pisang")); //mencri nilai index terakhir dari apa yang dicri
console.log(str2.slice(0, 6)); // mengambil krakter dari indek ke 0 sebanyak 5 karakter
console.log(str2.toUpperCase()); // membuat string huruf besar semua
console.log(str2.toLowerCase()); // membuat string huruf kecil semua
console.log(str2.replace("pisang", "ayam")); // mengubah satu kata dari pisang jadi ayam
console.log(str2.replace(/pisang/g, "ayam")); // mengubah seluruh kata pisang jadi ayam
console.log(`'hallo' "guys" ${"`juga`"}`);

//split
