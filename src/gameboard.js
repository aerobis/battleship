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
        return this.grid[y][x];
    }

    setCell(x, y, value){
        this.grid[y][x] = value;
    }

    addShip(ship){
        this.ships.push(ship);
    }

    getShips(){
        return this.ships;
    }

    // X pertains to horizontal placement, y to vertical
    placeShip(length, x, y, direction){
        const ship = new Ship(length);

        // Check if direction provided is correct
        if(direction !== 'x' && direction !== 'y'){
            return false;
        }

        // For horizontal placement. Grid is [0-9]. 
        if(direction == 'x' && ( (x + length) <= 10) && (x >= 0) ){
            // First check for any collisions
            for(let i = x; i < length + x; i++){
                let cell = this.getCell(i, y);
                if(cell !== null){
                    return false;
                }
            }
            // If none, write
            for(let i = x; i < length + x; i++){
                let cell = this.getCell(i, y)
                this.setCell(i, y, ship);
            }

            this.addShip(ship);
            return true;
        }

        // For vertical placement.
        if(direction === 'y' && ((y + length) <= 10) && (y>= 0) ){
            // Check for collisions
            for(let i = y; i < length + y; i++){
                let cell = this.getCell(x, i);
                if(cell !== null){
                    return false;
                }
            }

            // If none, write
            for(let i = y; i < length + y; i++){
                let cell = this.getCell(x, i);
                this.setCell(x, i, ship);
            }

            this.addShip(ship);
            return true;
        }

        // Return false by default if not
        return false;
    }
}