// ////// Exercise 1

// class Karyawan {
//     constructor(nama) {
//       this.nama = nama;
//       this.jam_kerja = 0;
//     }
  
//     tambah_jam_kerja(jam) {
//       this.jam_kerja += jam;
//     }
  
//     hitung_gaji() {
//       return 0;
//     }
//   }
  
//   class KaryawanPenuhWaktu extends Karyawan {
//     hitung_gaji() {
//       if (this.jam_kerja <= 6) {
//         return this.jam_kerja * 100000;
//       } else {
//         return 6 * 100000 + (this.jam_kerja - 6) * 75000;
//       }
//     }
//   }
  
//   class KaryawanParuhWaktu extends Karyawan {
//     hitung_gaji() {
//       if (this.jam_kerja <= 6) {
//         return this.jam_kerja * 50000;
//       } else {
//         return 6 * 50000 + (this.jam_kerja - 6) * 30000;
//       }
//     }
//   }
  
//   // contoh penggunaan program
//   let karyawan1 = new KaryawanPenuhWaktu("Asep");
//   karyawan1.tambah_jam_kerja(8);
//   console.log(`Gaji ${karyawan1.nama} adalah ${karyawan1.hitung_gaji()}`);

  
  
////// Exercise 2

class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.currentPlayer = null;
    }
  
    getRandomItem() {
      const items = [
        { health: 0, power: 0 },
        { health: 10, power: 0 },
        { health: 0, power: 10 },
        { health: 10, power: 10 }
      ];
      return items[Math.floor(Math.random() * items.length)];
    }
  
    start() {
      console.log('Game dimulai!');
  
      while (this.player1.health > 0 && this.player2.health > 0) {
        // Tampilkan status pemain sebelum menembak
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Dapatkan item acak untuk setiap pemain
        const item1 = this.getRandomItem();
        const item2 = this.getRandomItem();
  
        // Tambahkan item ke pemain
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        // Tampilkan status pemain setelah pengambilan item
        console.log(`Setelah mengambil item:`);
        this.player1.showStatus();
        this.player2.showStatus();
  
        // Tentukan pemain yang akan menembak
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  
        // Pemain menembak pemain lainnya
        this.currentPlayer.hit(this.currentPlayer.power);
  
        console.log(`Pemain ${this.currentPlayer.name} menembak dengan kekuatan ${this.currentPlayer.power}`);
        console.log(`Kesehatan pemain 1: ${this.player1.health}, Kesehatan pemain 2: ${this.player2.health}`);
        console.log('=====================');
      }
  
      // Tentukan pemenang
      const winner = this.player1.health > 0 ? this.player1 : this.player2;
      console.log(`Pemenang adalah ${winner.name}`);
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    hit(power) {
      this.health -= power;
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      console.log(`Pemain ${this.name} (Kesehatan => ${this.health}, Kekuatan => ${this.power})`);
    }
  }
  
  // Contoh penggunaan:
  const player1 = new Player('A');
  const player2 = new Player('B');
  const game = new ShootingGame(player1, player2);
  game.start();