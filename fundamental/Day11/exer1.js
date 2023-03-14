// ======= Soal No 1 =======
// Membuat funsi untunk menghitung colom dalam pada exel.
// cara 1
function numberColomExel(n) {
  let has = 0;
  for (i = 0; i < n.length; i++) {
    let Ncode = n.charCodeAt(i) - 64;
    has = has * 26 + Ncode;
  }
  return has;
}
console.log("cara 1");
console.log(numberColomExel("AC"));

// cara 2 :

let arrAlpa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let arrAlpaN = arrAlpa.split("");

function convertColToNum(col = "") {
  let up = col.toUpperCase();
  let colSplit = up.split("");
  let result = 0;
  if (col.length == 1) {
    result = arrAlpaN.indexOf(col) + 1;
  } else if (col.length == 2) {
    result =
      (arrAlpaN.indexOf(colSplit[0]) + 1) * 26 +
      (arrAlpaN.indexOf(colSplit[1]) + 1);
  } else if (col.length == 3) {
    result =
      (arrAlpaN.indexOf(colSplit[0]) + 1) * 26 * 26 +
      (arrAlpaN.indexOf(colSplit[1]) + 1) * 26 +
      (arrAlpaN.indexOf(colSplit[2]) + 1);
  }
  return result;
}
console.log("cara 2");
console.log(convertColToNum("ac"));

// cara 3:

let getIn = (col) =>
  col.split("").reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);

console.log("cara 3");
console.log(getIn("ac"));

// prev * 26 + parseInt(next, 36) - 9, 0;
//z,z
//z,

// ======= Soal No 2 =======
// Membuat fungsi untuk mendapatkan single number di dalam array

// function findSingleOne(arr = []) {
//   let uniq = [];
//   for (let i = 0; i < arr.length; i++) {
//     let cek = arr.filter((val) => val == arr[i]);
//     if (cek.length < 2) {
//       uniq.push(cek);
//     }
//   }
//   return uniq.join(",");
// }

// console.log(findSingleOne([1, 5, 5, 3, 6, 5]));
// console.log(findSingleOne([5, 5, 5, 5, 7, 2, 2]));

// ======= Soal No 4 =======
// Menghitung jumlah cara kombinasi langkah untuk mendaki ke puncak tangga (n). dengan maximal hanya bisa 2 anaktangga persetiap langkah.

// cara 1 :
// let n1 = 0;
// let n2 = 1;
// function kemungkinan(n) {
//   let result4 = 0;
//   for (let i = 0; i < n; i++) {
//     n3 = n1 + n2;
//     result4 = n3;
//     n1 = n2;
//     n2 = n3;
//   }
//   return result4;
// }
// console.log(kemungkinan(7));

// =================================
