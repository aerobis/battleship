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
        if(direction == 'x' && ( (x + length) <= 10) && (x >= 0) && (0 <= y <= 9) ){
            // First check for any collisions
            for(let i = x; i < length + x; i++){
                let cell = this.getCell(i, y);
                if(cell !== null){
                    return false;
                }
            }
            // If none, write
            for(let i = x; i < length + x; i++){
                this.setCell(i, y, ship);
            }

            this.addShip(ship);
            return true;
        }

        // For vertical placement.
        if(direction === 'y' && ((y + length) <= 10) && (y>= 0) && (0 <= x <= 9)){
            // Check for collisions
            for(let i = y; i < length + y; i++){
                let cell = this.getCell(x, i);
                if(cell !== null){
                    return false;
                }
            }

            // If none, write
            for(let i = y; i < length + y; i++){
                this.setCell(x, i, ship);
            }

            this.addShip(ship);
            return true;
        }

        // Return false by default if not
        return false;
    }

    receiveAttack(x, y){
        if ((x < 0 && x >= 10) || (y < 0 && y >= 10)){
            return "OOB";
        }
        let ship = this.getCell(x, y);
        // Ship is a valid Ship.
        if (typeof ship === "object" && ship !== null && !Array.isArray(ship)){
            ship.hit();
            this.setCell(x, y, "HIT"); // Add hit alongside the ship object in the grid
            // Check if ship is sunk
            if(ship.isSunk()){
                return "SUNK";
            }
            //If not sunk, return HIT
            return "HIT";
        //Repeated hits or misses
        }else if((ship == "HIT" || ship == "MISS") && (typeof ship !== "object")){
            return "REPEAT";
        //A miss
        }else if(ship == null){
            this.setCell(x, y, "MISS");
            return "MISS";
        }
    }
}