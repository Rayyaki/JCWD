
// Program  untuk memunculkan hasil sebuah transaksi

class Product {
    constructor(ProductName, Price){
        this.ProductName = ProductName;
        this.Price = Price
    }

}

class Transaction {
    constructor(Total, Product){
        this.total = 0;
        this.Total = {};
    }

}


let Buku = new Product('Buku', '5000');
let Sepatu = new Product ('Sepatu', '100000');
let Tas = new Product('Tas', '50000');

let Prod = ['Buku', 'Sepatu', 'Tas'];

console.log(Prod);