function hitungHasilPertandingan(arr) {
  let totalPertandingan = arr[0];
  let totalPoin = arr[1];

  // Hitung jumlah kemenangan
  let kemenangan = Math.floor(totalPoin / 3);

  // Hitung jumlah seri
  let sisaPoin = totalPoin % 3;
  let seri = Math.min(sisaPoin, totalPertandingan - kemenangan);

  // Hitung jumlah kekalahan
  let kekalahan = totalPertandingan - kemenangan - seri;

  return console.log([kemenangan, seri, kekalahan]);
}

// Contoh penggunaan fungsi

hitungHasilPertandingan([10, 25]);
// console.log(hasilPertandingan.join(" "));

//============================================================================

function filterUpLow(k) {
  // let kalimat = "Contoh Kalimat";
  let jumlahHurufKecil = 0;
  let jumlahHurufBesar = 0;

  for (let i = 0; i < k.length; i++) {
    if (k[i] >= "a" && k[i] <= "z") {
      jumlahHurufKecil++;
    } else if (k[i] >= "A" && k[i] <= "Z") {
      jumlahHurufBesar++;
    }
  }
  // console.log("Jumlah huruf kecil: " + jumlahHurufKecil);
  // console.log("Jumlah huruf besar: " + jumlahHurufBesar);
  return console.log([jumlahHurufKecil, jumlahHurufBesar]);
}

filterUpLow("Latihan Hidup");

//=========================================================================

function cariVocal(w) {
  let vokal = 0;

  for (let i = 0; i <= w.length; i++) {
    if (
      w[i] == "a" ||
      w[i] == "i" ||
      w[i] == "u" ||
      w[i] == "e" ||
      w[i] == "o" ||
      w[i] == "A" ||
      w[i] == "I" ||
      w[i] == "U" ||
      w[i] == "E" ||
      w[i] == "O"
    )
      vokal++;
  }

  return console.log(vokal);
}

cariVocal("cinta mati");

//=======================================================================

function hitunngLeng(arr) {
  let jmlLeng = arr.length;

  return console.log(jmlLeng);
}

hitunngLeng([1, 5, 8, 56, 23, 15]);
