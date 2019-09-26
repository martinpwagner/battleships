import { placeAllShips } from '../src/lib/placeShip';
import { strike, isGameOver } from '../src/lib/gameLogic';
import { rowList } from '../src/lib/gameBasics';

describe('placeAllShips', () => {
    it('places all ships', () => {
        const placedShips = placeAllShips();
    
        expect(placedShips.number).toEqual(3);
        expect(placedShips.ships.length).toEqual(3);
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