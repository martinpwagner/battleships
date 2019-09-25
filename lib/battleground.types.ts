export type IBasicShipData = {
    length: number;
    x: number;
    y: number;
    isFacedX: boolean;
};

export type IBasicCoords = { x: number; y: number };

export type IOccupiedArea = { x: string, y: number, hit: boolean };
export type IShip = { length: number; occupiedAreas: IOccupiedArea[]; hits: number; down: boolean; };
export type IBattlegroundMap = { 
    [x: string]: 
    { [y: number]: IShip}; 
};

export type IBattleground = {
    map: IBattlegroundMap,
    ships: Array<IShip>,
    shipsUp: number,
    shipsDown: number
}

export type IShipsPlaced = {
    ships: Array<IShip>,
    number: number
}