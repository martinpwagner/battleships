import { placeShips, placeBattleships, placeDestroyers, placeAllShips } from '../lib/placeShip';
import { battleground, strike, isGameOver } from '../lib/gameLogic';
import { rowList } from '../lib/gameBasics';

describe('placeShips', () => {
    it('can place ships', () => {
        const placedShips = placeShips(2, 5);

        expect(placedShips.number).toEqual(2);
        expect(placedShips.ships.length).toEqual(2);
        expect(battleground.shipsUp).toBeGreaterThanOrEqual(2);
    });

    it('can place destroyers', () => {
        const placedShips = placeDestroyers();

        expect(placedShips.number).toEqual(2);
        expect(placedShips.ships.length).toEqual(2);
        expect(battleground.shipsUp).toBeGreaterThanOrEqual(2);
    });

    it('can place battleships', () => {
        const placedShips = placeBattleships();

        expect(placedShips.number).toEqual(1);
        expect(placedShips.ships.length).toEqual(1);
        expect(battleground.shipsUp).toBeGreaterThanOrEqual(1);
    });
});

describe('placeAllShips', () => {
    it('places all ships', () => {
        const placedShips = placeAllShips();
    
        expect(placedShips.number).toEqual(3);
        expect(placedShips.ships.length).toEqual(3);
        expect(battleground.shipsUp).toEqual(3);
    });

    it('places all ships and bombards whole map', () => {
        const placedShips = placeAllShips();

        rowList.forEach((xString) => {
            for(let i = 0; i < 10; i++) {
                strike(xString, i);
            }
        });

        expect(placedShips.ships[0].down).toEqual(true);
        expect(placedShips.ships[1].down).toEqual(true);
        expect(placedShips.ships[2].down).toEqual(true);
        expect(isGameOver()).toEqual(true);
    });

    it('throws when a ship is bombarded 2 times in the same place', () => {
        const placedShips = placeAllShips();
        const coords = placedShips.ships[0].occupiedAreas[0];

        expect(() => strike(coords.x, coords.y)).not.toThrow();
        expect(() => strike(coords.x, coords.y)).toThrow();
    })
})