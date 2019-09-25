import { createChance, getRandomCoords, getIsFacingX } from '../lib/coordsAndPosition'

describe('getRandomCoords', () => {
    const chanceInstance = createChance("testenv");
    let initialCoords;
    let initialIsFacingX;
    
    beforeEach(() => {
        initialCoords = {
            x: chanceInstance.integer({min: 0, max: 9}),
            y: chanceInstance.integer({min: 0, max: 9})
        };
        initialIsFacingX = chanceInstance.bool({likelihood: 50});
    });

    it('should output random coords', () => {
        let coords = [getRandomCoords(), getRandomCoords(), getRandomCoords()];

        expect(coords).not.toContain(initialCoords);
    })

    it('should sometimes return false or true when facing X', () => {
        let isFacingX = [getIsFacingX(), getIsFacingX(), getIsFacingX(), getIsFacingX(), getIsFacingX()];

        expect(isFacingX).toContain(initialIsFacingX);
        expect(isFacingX).toContain(!initialIsFacingX);
    })
})