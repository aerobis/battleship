import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
let gameboard;

beforeEach(()=>{
    gameboard = new Gameboard();
})

describe('Basic initialization tests', ()=>{
    test('no ships on initialization', ()=>{
        expect(gameboard.getShips().length).toBe(0)
    })

    test('10 rows of grids for a 10x10 grid', ()=>{
        expect(gameboard.grid.length).toBe(10);
    })

    test('10 cells per row', ()=>{
        for(let i = 0; i < gameboard.grid.length; i++){
            expect(gameboard.grid[i].length).toBe(10)
        };
    })

    test('each cell starts as null', ()=>{
        for(let i = 0; i < gameboard.grid.length; i++){
            for(let j = 0; j < gameboard.grid[i].length; j++){
                expect(gameboard.grid[i][j]).toBeNull()
            }
        };
    })
})

describe("Tests for ship placement", ()=>{
    test('a ship placement makes the coordinates on the grid change', ()=>{
        gameboard.placeShip(3, 2, 4, 'x');
        for(let i = 2; i < 5; i++){
            expect(gameboard.grid[4][i]).not.toBeNull();
        }
    })

    test('see that the grids of a ship point to the same one', ()=>{
        gameboard.placeShip(3, 4, 8, 'x');
        for(let i = 4; i < 6; i++){
            expect(gameboard.grid[8][i]).toBe(gameboard.grid[8][i + 1]);
        }
    })

    test('rejected placement returns false and grid remains unchanged', ()=>{
        const result = gameboard.placeShip(3, 8, 5, 'x'); // Since either a true or false is returned
        expect(result).toBe(false);
        //Check every grid
        for(let i = 0; i < gameboard.grid.length; i++){
            for(let j = 0; j < gameboard.grid[i].length; j++){
                expect(gameboard.grid[j][i]).toBeNull()
            }
        };
    })
})

describe('receive hit checks', ()=>{
    test('hit is returned on a successful hit', ()=>{
        gameboard.placeShip(3, 2, 4, 'x');
        expect(gameboard.receiveAttack(2, 4)).toBe("HIT");
    });

    test('miss is returned on a miss', ()=>{
        gameboard.placeShip(3, 2, 4, 'x');
        expect(gameboard.receiveAttack(1, 3)).toBe("MISS");
    });

    test('repeat attacks return repeated', ()=>{
        gameboard.placeShip(3, 2, 4, 'x');
        gameboard.receiveAttack(2, 4);
        expect(gameboard.receiveAttack(2, 4)).toBe("REPEAT");
        expect(gameboard.getShips()[0].getHits()).toBe(1)
    });

    test('repeat misses should be repeated', ()=>{
        gameboard.placeShip(3, 1, 5, 'x');
        gameboard.receiveAttack(7, 2);
        expect(gameboard.receiveAttack(7, 2)).toBe("REPEAT");
    })

    test('ship sinks after hits = length', ()=>{
        gameboard.placeShip(1, 2, 4, 'y');
        let ship = gameboard.getCell(2, 4)
        expect(gameboard.receiveAttack(2, 4)).toBe("SUNK")
        expect(ship.isSunk()).toBe(true);
    })

    test("ship isn't sunk by default", ()=>{
        gameboard.placeShip(1, 2, 4, 'y');
        let ship = gameboard.getCell(2, 4);
        expect(ship.isSunk()).toBe(false)
    })

    test("all ships aren't sunk by default", ()=>{
        gameboard.placeShip(3, 5, 2, 'y');
        expect(gameboard.allSunk()).toBe(false);
    })

    test("allSunk is true when all ships are sunk", ()=>{
        gameboard.placeShip(3, 5, 2, 'y');
        gameboard.placeShip(1, 2, 3, 'x');
        gameboard.receiveAttack(5, 2);
        gameboard.receiveAttack(5, 3);
        gameboard.receiveAttack(5, 4);
        expect(gameboard.allSunk()).toBe(false);
        gameboard.receiveAttack(2, 3);
        expect(gameboard.allSunk()).toBe(true);
    })

    test('off board returns OOB (out of bounds)',()=>{
        gameboard.placeShip(3, 2, 5, 'x');
        let cell = gameboard.getCell(2, 5);
        expect(gameboard.receiveAttack(5, 11)).toBe("OOB");
        expect(gameboard.receiveAttack(-1, 3)).toBe("OOB");
        expect(cell).toBe(gameboard.getCell(2,5));
    })
})




