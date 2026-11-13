import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
let gameboard;

beforeEach(()=>{
    gameboard = new Gameboard();
})

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
            expect(gameboard.grid[i][j]).toBe(null);
        }
    };
})





