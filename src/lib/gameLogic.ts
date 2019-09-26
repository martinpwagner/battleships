import { createBattleground } from './battleground';
import { IBattleground, IShip, IOccupiedArea } from './battleground.types';
import { AreaAlreadyHitError } from './errors';
import { placeAllShips } from './placeShip';

export let battleground = createBattleground();

export function resetBattleground(): IBattleground {
    return battleground = createBattleground();
}

export function resetGame() {
    placeAllShips();
}

export function strike(xString: string, y: number) {
    const maybeShip: IShip | undefined = battleground.map[xString][y];

    if(!maybeShip)
        return false;

    const occupiedAreaHit = maybeShip.occupiedAreas.find((oa: IOccupiedArea) => (oa.x == xString && oa.y == y));

    if(occupiedAreaHit.hit)
        throw new AreaAlreadyHitError(xString, y);
 
    occupiedAreaHit.hit = true;
    maybeShip.hits++;

    if(maybeShip.hits === maybeShip.length) {
        battleground.shipsDown++;
        battleground.shipsUp--;
        maybeShip.down = true;
    }

    return true;
}

export function isGameOver() {
    return (battleground.ships.length === battleground.shipsDown)
}