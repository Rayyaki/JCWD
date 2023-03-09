// clue :
// 



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
    constructor(nama, jabatan, umur, hour, type){
        super(nama, jabatan, umur)
        this.#hour = hour;
        this.type = type;
    }

    add (hour){
        this.hour = hour
    }

    Total () {

        let sisa = (this.hour - 6 < 0 ? 0 : this.hour);
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

k1 = new Salary()
console.log(k1.Salary.Total)






