// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(str.charCodeAt(2));

// let n = [1, 1, 2, 3];
// let n2 = new Set(n);
// console.log(new Set(n));
// console.log(n2);

function findManyNum(arr = []) {
  let sorting = arr.sort();
  console.log(sorting);
  let hasil = [];
  let tem1 = [];
  //   let tem2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (sorting[0] == sorting[1]) {
      tem1.push(sorting[0]);
      sorting.shift(sorting[1]);
      console.log(tem1);
      //   console.log(sorting);
    }
    hasil = Math.max(Math, tem1);
  }

  return hasil;
}

console.log(findManyNum([1, 3, 5, 2, 2, 3, 2]));
