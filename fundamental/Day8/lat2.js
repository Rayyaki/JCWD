// Membuat  sebuah program shooting game


class Player {
    constructor(name){
            this.name = name;
            this.health = 100;
            this.power = 10;
            this.current = null;
    }

    hit(player){
        player.health -= this.power;
    }

    useItem(obj){
        this.power += obj.power;
        this.health += obj.health;
    }

    show(){
        return (`Player ${this.name}, (Health ==> ${this.health}, Power ==> ${this.power})`)
    }
}


class Shooting {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        // this.current = null;
    }

    getItem (){
       let random = Math.floor(Math.random()*4)
    if ( random == 0) {
        return {health : 0, power : 0}
    } else if ( random == 1) {
        return { health : 10, power : 0 }
    } else if ( random == 2) {
        return { health : 0, power : 10}
    } else {
        return { health : 10, power : 10}
    }
    }

    start (){
        console.log("Game On");
        while (this.player1.health > 0 && this.player2.health > 0){
        console.log(this.player1.show());
        console.log(this.player2.show());

        console.log("Mengambil Item");
        
        this.player1.useItem(this.getItem());
        this.player2.useItem(this.getItem());

        console.log(this.player1.show());
        console.log(this.player2.show());
        
        this.player1.hit(this.player2);
        this.player2.hit(this.player1);
        // this.current = this.current === this.player1 ? this.player2 : this.player1;
        
            if (this.player1.health <= 0){
                console.log(`Player ${this.player2.name} WINNER`);
            } else if (this.player2.health <= 0){
                console.log(`Player ${this.player1.name} WINNER`);
            } else {
                console.log(`This Game Is SERI`);
            }
        
    
        }
    }

}    

let P1 = new Player ('Rizki')
let P2 = new Player ('Afri')
let game1 = new Shooting (P1, P2)
game1.start();