export class WrongShipParametersError extends Error {
    constructor(length, x, y, isFacedX) {
        super(`Can't create a ship of ${length} on position (${x},${y}) when faced ${isFacedX ? 'X' : 'Y'}!`);

        this.data = {
            length,
            x,
            y,
            isFacedX
        };

        Error.captureStackTrace(this, this.constructor);
    }
}