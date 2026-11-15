import Gameboard from "./gameboard.js";

export class Player{
    constructor(identifier){
        this.identifier = identifier;
        this.gameboard = new Gameboard();
    }
}

export class ComputerPlayer extends Player{
    constructor(identifier){
        super(identifier);
        this.moves = [];
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                this.moves.push([i, j]);
            }
        }
    }

    chooseMove(){
        // When all 100 possible moves have been used
        if(this.moves.length === 0){
            return null;
        }
        const index = Math.floor(Math.random() * this.moves.length);
        const move = this.moves.splice(index, 1)[0];
        return move;
    }
}