import Chance from 'chance';
import { IBasicCoords } from './battleground.types';

const chance = createChance();

/**
 * Create a Mersenne Twister with seed based on Math.random()
 * @param seed {any} If you don't really wish randomness (for example: tests)
 */
export function createChance(seed: any = undefined) {
    const hasSeed = !seed ? ((Math.random() * 100) * (Math.random() * 100)): seed;
    return new Chance(hasSeed);
}

/**
 * Provides random coords
 * @returns {IBasicCoords} Random coords
 */
export function getRandomCoords(): IBasicCoords {
    const x = chance.integer({min: 0, max: 9});
    const y = chance.integer({min: 0, max: 9});

    return { x, y };
}

/**
 * Randomly selects whether we're facing X or Y
 * @returns {Boolean}
 */
export function getIsFacingX(): boolean {
    return chance.bool();
}