import { WrongShipParametersError } from '../src/lib/errors';

describe('WrongShipParametersError', () => {
    it('can be thrown', () => {
        expect(() => {
            throw new WrongShipParametersError(5, 0, 0, true)
        }).toThrow(WrongShipParametersError);
    });

    it('has proper message', () => {
        expect(() => {
            throw new WrongShipParametersError(5, 0, 0, true)
        }).toThrow("Can't create a ship of 5 on position (0,0) when faced X");
    })

    it('has proper data', () => {
        try {
            throw new WrongShipParametersError(5, 0, 0, true)
        } catch (e) {
            expect(e.data).toEqual({
                length: 5,
                x: 0,
                y: 0,
                isFacedX: true
            })
        }
    })
})