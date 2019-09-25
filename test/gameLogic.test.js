import { placeShips, placeBattleships, placeDestroyers, placeAllShips, battleground } from '../lib/gameLogic';

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
    })
})