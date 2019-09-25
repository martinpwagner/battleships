export type IBasicCoords = { x: number; y: number };
/**
 * Provides random coords
 * @returns {IBasicCoords} Random coords
 */
export function getRandomCoords(): IBasicCoords {
    const x = Math.round(Math.random() * 10);
    const y = Math.round(Math.random() * 10);

    return { x, y };
}

/**
 * Randomly selects whether we're facing X or Y
 * @returns {Boolean}
 */
export function getIsFacingX(): boolean {
    return !!Math.round(Math.random());
}