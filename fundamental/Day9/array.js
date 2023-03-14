let arr = [2, 19, 25, 18];

arr.push(1);
arr.pop();
arr.shift();
arr.unshift(11);
let join = arr.join("");
console.log(join);

arr.length; // untuk encari panjang array
// console.log(arr.map((a, b) => (val == 11 ? "ada" : "tidak ada")));
// console.log(arr.reduce((prev, curren, idx) => val));

let ar2 = [2, 8, 6, 9, 1, 6];

let sum = 0;
for (let i = 0; i <= ar2.length; i++) {
  sum += ar2[i];
} // cara 1 mencari sum dari array ar2
console.log(sum);

sum = 0;
let i = 0;
while (i < ar2.length) {
  sum += ar2[i];
} // cara 2 mencari sum dengan while
console.log(sum);

sum = 0;
ar2.map((val) => (sum += val)); // cara 3 dengan map

console.log(ar2.reduce((prev, cur) => prev + cur)); // cara 4 dengan reduce

console.log(arr.indexOf(4)); // consepnya sma kaya di string
console.log(arr.lastIndexOf(2)); // consepnya sma kaya di string
console.log(arr.findIndex((val, idx) => val == 11)); // return index daari yang di cari
console.log(arr.find((val) => val == 11)); // return value dari apa yang di cari
console.log(arr.filter((val) => val == 11 || val == 19)); // return value dari apa yang di cari dalam entuk array
