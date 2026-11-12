export default class Ship{
    constructor(length, hits, active){
        this.length = length;
        this.hits = hits;
        this.active = true;
    }

    #hit(){
        this.hits++;
    }

    isSunk(){
        if(this.hits >= this.length){
            this.active = false;
        }
        this.active = true;
    }
}