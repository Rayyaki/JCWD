// let f1 = () => {
//     // function expresion (callback)
// }

// let f1 = (() => )
//   // function expresion (arrow)

// function f2() {
//     // return... function declaration
// }

function recursive(n, sum = 0) {
  sum += n;
  if (n == 1) {
    return sum;
  }
  return recursive(n - 1, sum);
}

console.log(recursive(10));
