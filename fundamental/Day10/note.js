let palindom = "race car";
const arralpha = "abcdefghijklmnopqrstuvwxyz".split("");
palindom = palindom.split("");

console.log(arralpha);
console.log(palindom);

palindom = palindom.filter((letter) => {
  return arralpha.includes(letter);
});

palindom = palindom.join("");

// =================================================================================

// fungsi untuk membandingkan apakah dua uah kata yang bebeda memiliki huruf2 yang sama

function anagram2(s = "", t = "") {
  if (s.length != t.length) {
    return console.log(false);
  } else {
    for (const letter of t) {
      if (!s.includes(letter)) {
        return console.log(false);
      }
      s.replace(letter, "");
    }
    return console.log(true);
  }
}

anagram2("saya", "ayas");
anagram2("balik", "kibal");
anagram2("cara", "raac");

// ================================================

// linear search

function linearsearch(arr, x) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

console.log(linearsearch([1, 2, 5, 6, 10], 10));

// ==================================================

// bubble sort

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

console.log(bubble([5, 9, 5, 8, 2, 6, 1, 12]));

// =====================================================

// selection sort 1

function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([20, 2, 23, 19, 18, 6, 4, 7, 39, 45, 28]));

// =========================================================
