import { NUM_BATTLESHIPS, NUM_DESTROYERS, BATTLESHIP_LENGTH, DESTROYER_LENGTH } from './gameBasics';
import { createBattleground, createShipOnBattleground } from './battleground';
import { getRandomCoords, getIsFacingX } from './coordsAndPosition';
import { IShipsPlaced, IShip } from './battleground.types';

export let battleground = createBattleground();

function placeShip(length: number): IShip {
    let coords = getRandomCoords();
    let facingX = getIsFacingX();
    return createShipOnBattleground(coords.x, coords.y, length, facingX, battleground);
}

export function placeShips(shipsToBePlaced: number, length: number): IShipsPlaced {
    let shipsPlaced = [];
    let numberOfShips = 0;

    while(numberOfShips < shipsToBePlaced) {
        try {
            shipsPlaced.push(placeShip(length));
            numberOfShips++;
        } catch (e) {}
    }
    
    if(numberOfShips === shipsToBePlaced)
        return {ships: shipsPlaced, number: numberOfShips};
}

export function placeBattleships(): IShipsPlaced {
    return placeShips(NUM_BATTLESHIPS, BATTLESHIP_LENGTH);
}

export function placeDestroyers(): IShipsPlaced {
    return placeShips(NUM_DESTROYERS, DESTROYER_LENGTH);
}

export function placeAllShips(): IShipsPlaced {
    battleground = createBattleground();
    const battleships = placeBattleships();
    const destroyers = placeDestroyers();

    return {
        number: battleships.number + destroyers.number,
        ships: [...destroyers.ships, ...battleships.ships]
    }
}