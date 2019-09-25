import { createBattleground, createOccupiedArea, createShip, createShipOnBattleground } from '../lib/battleground';

describe('createBattleground', () => {
    it('creates a new battleground without throwing', () =>
        expect(() => createBattleground()).not.toThrow()
    );

    it('has keys corresponding to letters', () => {
        const battleground = createBattleground();

        expect(battleground['A']).toBeDefined();
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
    })

    it('creates a new ship on battleground and returns handle to the ship', () => {
        const ship = createShipOnBattleground(0, 0, 5, true, battleground);
        expect(ship).toBeDefined();
        expect(battleground[ship.occupiedAreas[0].x][ship.occupiedAreas[0].y]).toEqual(ship);
    })
})