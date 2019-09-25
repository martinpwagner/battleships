import { IBasicShipData } from "./battleground.types";

export class WrongShipParametersError extends Error {
    data = {} as IBasicShipData;

    constructor(length: number, x: number, y: number, isFacedX: boolean) {
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