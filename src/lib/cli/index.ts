import * as repl from 'repl';
import { resetGame, strike, isGameOver } from '../gameLogic';

export default function runGame() {
    console.log('Welcome to Battleships!');
console.log('Use help() command to get details');

const replServer = repl.start({
    prompt: "battleships >",
    useGlobal: false,
    useColors: true
});

replServer.context.strike = (xString, y) => {
    let strikeEffect;

    try {
        strikeEffect = strike(xString, y - 1);
    } catch (error) {
        console.log(error.message)

        return;
    }

    console.log(`${strikeEffect ? 'Hit!' : 'Miss!'}`);

    if(strikeEffect)
        console.log(`${isGameOver() ? 'You won!' : ''}`)
}

replServer.context.reset = () => resetGame();

replServer.context.quit = () => process.exit(0);

replServer.context.help = () => {
    console.log("strike('A', 1) - strike the enemy ship until you win");
    console.log("reset() - play again")
    console.log("quit() - quit the game")
};

}

