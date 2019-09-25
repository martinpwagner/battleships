import { WrongShipParametersError } from './errors';
import { IBattlegroundMap, IOccupiedArea, IShip, IBattleground } from './battleground.types';
import { rowList } from './gameBasics';

export function createBattlegroundMap(): IBattlegroundMap {
    let rowsObject = {};

    for (let i = 0; i < 10; i++) {
        rowsObject[rowList[i]] = new Array(10);
    }

    return rowsObject;
}

export function createBattleground(): IBattleground {
    return {
        map: createBattlegroundMap(),
        ships: [],
        shipsDown: 0,
        shipsUp: 0
    }
}

export function createOccupiedArea(x: number, y: number): IOccupiedArea {
    return {
        x: rowList[x],
        y,
        hit: false
    }
}

export function createShip(x: number, y: number, length: number, isFacedX: boolean): IShip {
    let occupiedAreas = new Array(length);

    if(isFacedX) {
        for(let i = 0; i < (length); i++) {
            occupiedAreas[i] = createOccupiedArea(x + i, y);
        }
    } else {
        for(let i = 0; i < (length); i++) {
            occupiedAreas[i] = createOccupiedArea(x, y + i);
        }
    }

    return {
        length,
        occupiedAreas,
        hits: 0,
        down: false
    } as IShip;
}

/**
 * Creates a ship on a battleground
 * @param {number} x 
 * @param {number} y 
 * @param {number} length 
 * @param {boolean} isFacedX 
 * @param {IBattleground} battleground
 * @throws {WrongShipParametersError} If desired ship isn't sane
 * @returns {IShip} First element is new battleground, second is a handle to the ship 
 */

export function createShipOnBattleground(x: number, y: number, length: number, isFacedX: boolean, battleground: IBattleground): IShip {
    if((isFacedX && (x + length) > 10) || (!isFacedX && (y + length) > 10)) {
        throw new WrongShipParametersError(length, x, y, isFacedX);
    }

    const ship = createShip(x, y, length, isFacedX);

    ship.occupiedAreas.forEach((area) => 
        battleground.map[area.x][area.y] = ship
    )
    
    battleground.ships.push(ship);
    battleground.shipsUp++;

    return ship;
}