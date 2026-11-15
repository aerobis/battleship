    import {Player, ComputerPlayer} from './player.js'
    import Gameboard from "./gameboard.js";
    let player;

    beforeEach(()=>{
        player = new Player();
    })

    describe('Human player test suite', ()=>{
        test('player has a gameboard', ()=>{
            expect(player.gameboard).toBeInstanceOf(Gameboard);
        })

        test('two players get separate boards', ()=>{
            let playerOne = new Player();
            let playerTwo = new Player();

            expect(playerOne.gameboard).not.toBe(playerTwo.gameboard);
        })
    })

    describe('Computer player test suite', ()=>{
        test('makes 100 unique on-board moves, then none', ()=>{
            const computer = new ComputerPlayer();
            const seen = new Set();
            for(let i = 0; i < 100; i++){
                const result = computer.chooseMove();
                const x = result[0];
                const y = result[1];

                expect(x).toBeGreaterThanOrEqual(0);
                expect(x).toBeLessThanOrEqual(9);
                expect(y).toBeGreaterThanOrEqual(0);
                expect(y).toBeLessThanOrEqual(9);

                seen.add(`${x},${y}`);
            }
            expect(seen.size).toBe(100);
            expect(computer.chooseMove()).toBeNull()
        })

        test('computer player also has a gameboard', ()=>{
            const computer = new ComputerPlayer();
            expect(computer.gameboard).toBeInstanceOf(Gameboard);
        })
    })