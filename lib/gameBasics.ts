import { IShip } from "./battleground.types";

/**
 * @constant
 * @type {number} Number of destroyers on map
 */
export const NUM_DESTROYERS: number = 2;

/**
 * @constant
 * @type {number} Number of battleships on map
 */
export const NUM_BATTLESHIPS: number = 1;

/**
 * @constant
 * @type {number} How long is a battleship
 */
export const BATTLESHIP_LENGTH: number = 5;

/**
 * @constant
 * @type {number} How long is a destroyer
 */
export const DESTROYER_LENGTH: number = 4;

/**
 * @constant
 * @type {string} Possible ABC... rows 
 */
export const rows: string = "ABCDEFGHIJ";

/**
 * @constant
 * @type {string[]} Row chars
 */
export const rowList: string[] = rows.split('');

export const placedShips: Array<IShip> = [];
export const placedDestroyers: Array<IShip> = [];
export const placedBattleships: Array<IShip> = [];