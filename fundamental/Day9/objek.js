let object1 = {
  nama: "lala",
  kelas: "JCWD",

  pulang() {
    return "gaskueen";
  },
};

console.log(object1.nama);
console.log(object1.kelas);
object1.umur = "23";
console.log(object1.umur);
console.log(object1.pulang());
console.log(object1["pulang"]());

let ent = Object.entries(object1); //return Array [[keys, val], [key, val], ...]
console.log(ent);

let result = [];
for (let i = 0; i < ent.length; i++) {
  result.push([ent[i][1], ent[i][0]]);
}

console.log(result);

let key = Object.keys(object1);
console.log(key);
