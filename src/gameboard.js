import Ship from "./ship.js"

export default class Gameboard{
    // No ships on initialization
    constructor(){
        this.ships = []
        // Grid
        this.grid = [
            [null, null, null, null, null, null, null, null, null, null], 
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
        ]
    }

    getCell(x, y){
        return this.grid[y, x];
    }

    setCell(x, y, value){
        this.grid[y][x] = value;
    }

    getShips(){
        return this.ships;
    }

    placeShip(length, x, y, direction){
        const ship = new Ship(length);
        if(direction !== 'x' || direction !== 'y'){
            return 0;
        }

    }
}