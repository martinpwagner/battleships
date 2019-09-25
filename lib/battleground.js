import { WrongShipParametersError } from './errors'
import { is } from '@babel/types';

export const rows = "ABCDEFGHIJ";
const rowList = rows.split('');

export function createBattleground() {
    let rowsObject = {};


    for (let i = 0; i < 10; i++) {
        rowsObject[rowList[i]] = new Array(10);
    }

    return rowsObject;
}

export function createOccupiedArea(x, y) {
    return {
        x: rowList[x],
        y,
        hit: false
    }
}

export function createShip(x, y, length, isFacedX) {
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
    }
}

/**
 * Creates a ship on a battleground
 * @param {number} x 
 * @param {number} y 
 * @param {number} length 
 * @param {boolean} isFacedX 
 * @param {Battleground} battleground
 * @throws {WrongShipParametersError} If desired ship isn't sane
 * @returns {Array} First element is new battleground, second is a handle to the ship 
 */

export function createShipOnBattleground(x, y, length, isFacedX, battleground) {
    if((isFacedX && (x + length) > 10) || (!isFacedX && (y + length) > 10)) {
        throw new WrongShipParametersError(length, x, y, isFacedX);
    }

    const ship = createShip(x, y, length, isFacedX);

    ship.occupiedAreas.forEach((area) => 
        battleground[area.x][area.y] = ship
    )

    return ship;
}