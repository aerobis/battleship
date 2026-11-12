import Ship from "./ship.js";

test('ship has 0 hits when initialized', ()=>{
    const ship = new Ship(3);
    expect(ship.getHits()).toBe(0);
})

test('hit increases hit counter', () => {
    const ship = new Ship(3);
    ship.hit();
    expect(ship.getHits()).toBe(1);
})

test('ship is not sunk when initialized', ()=>{
    const ship = new Ship(3);
    expect(ship.isSunk()).toBe(false);
})

test('ship sinks when hits >= length', ()=>{
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})

test('ship does not sink when hits < length', ()=>{
    const ship = new Ship(3);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
})

