import { createBattleground, createOccupiedArea, createShip, createShipOnBattleground } from '../lib/battleground';
import { WrongShipParametersError } from '../lib/errors';

describe('createBattleground', () => {
    let battleground;

    beforeEach(() => {
        battleground = createBattleground();
    });

    it('creates a new battleground without throwing', () =>
        expect(() => createBattleground()).not.toThrow()
    );

    it('has map with keys corresponding to letters', () => {
        expect(battleground.map['A']).toBeDefined();
    });

    it('has array of ships', () => {
        expect(battleground.ships).toEqual([]);
    });

    it('has numbers of ships up and down', () => {
        expect(battleground.shipsUp).toEqual(0);
        expect(battleground.shipsDown).toEqual(0);
    })
})

describe('createShip', () => {
    it('creates a new ship', () => {
        const ship = createShip(0, 0, 5, true);

        expect(ship.occupiedAreas).toBeDefined();
        expect(ship.occupiedAreas).toEqual([
            createOccupiedArea(0, 0),
            createOccupiedArea(1, 0),
            createOccupiedArea(2, 0),
            createOccupiedArea(3, 0),
            createOccupiedArea(4, 0)
        ]);
        expect(ship.hits).toEqual(0);
        expect(ship.length).toEqual(5);
    });
});

describe('createShipOnBattleground', () => {
    let battleground;

    beforeEach(() => {
        battleground = createBattleground();
    });

    it('creates a new ship on battleground', () => {
        expect(() => createShipOnBattleground(0, 0, 5, true, battleground)).not.toThrow();
    });

    it('creates a new ship on battleground and returns handle to the ship', () => {
        const ship = createShipOnBattleground(0, 0, 5, true, battleground);
        expect(ship).toBeDefined();
        expect(battleground.map[ship.occupiedAreas[0].x][ship.occupiedAreas[0].y]).toEqual(ship);

        expect(battleground.ships).toContainEqual(ship);
        expect(battleground.shipsUp).toEqual(1);
    });

    it('throws when a ship is impossible to place on map', () => expect(() => 
        createShipOnBattleground(9, 9, 5, false, battleground)
    ).toThrow(WrongShipParametersError));
})