import Ship from "./ship.js"

export default class Gameboard{
    //Ships are created with a length and a reference to the ship
    createShip(length, ref){{
        const ship = new Ship(length);
        this.recordShip(ref, ship);
        return ship;
    }}
    
    // Record each ship as a key value pair so you know whose ship it is
    // If called without any parameters, displays ship instead
    recordShip(ref = null, ship = null){
        let ships = new Map();
        if(ship != null && ref != null){
            ships.set(ship, ref);
        }
        return ships;
    }

    placeShip(ref, x, y){
        // A grid of 10x10 is assumed
        let ships = recordShip();
        let ship = ships.get(ref);
        
    }
}