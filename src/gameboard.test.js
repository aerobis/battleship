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






