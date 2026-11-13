export default class Ship{
    constructor(length, hits = 0, active = true){
        this.length = length;
        this.hits = hits;
        this.active = active;
    }

    getLength(){
        const length = this.length;
        return length;
    }

    hit(){
        this.hits++;
    }

    getHits(){
        const hits = this.hits;
        return hits;
    }

    isSunk(){
        if(this.hits >= this.length){
            this.active = false;
            return true; // Notify that ship has sunk
        }
        return false; // Ship is still active.
    }
}