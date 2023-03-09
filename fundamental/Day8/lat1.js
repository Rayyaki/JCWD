// Membuat program menghitung jumlah gaji


class Employee {
    constructor(nama, jabatan, umur){
        this.nama = nama;
        this.jabatan = jabatan;
        this.umur = umur;
    }
}

class salary extends Employee{
    #hour   
    constructor(nama, jabatan,  type, umur, hour){
        super(nama, jabatan, umur)
        this.#hour = hour;
        this.type = type;
    }

    add (hour){
        this.hour = hour
    }

    Total () {

        let sisa = (this.hour - 6 < 0 ? 0 : this.hour - 6);
        let wh = (this.hour - 6 > 0 ? 6 : this.hour);

        let base = 0;
        let ot = 0;

        if (this.type == 'PartTime'){
            base = 50000
            ot   = 30000
        } else {
            base = 100000
            ot   = 75000
        }

        return (base * wh) + (sisa * ot)

    }

}

k1 = new salary('Rizki', 'Teknisi IT', 'PartTime' );
k1.add(12);
k2 = new salary('Afri', 'Teknisi Enginaring', 'Fulltime' );
k2.add(12);
// console.log();
console.log(` Gaji abang ${k1.nama} adalah ${k1.Total()}`);
console.log(` Gaji abang ${k2.nama} adalah ${k2.Total()}`);
