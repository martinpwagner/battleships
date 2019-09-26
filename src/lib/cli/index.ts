import * as repl from 'repl';
import { resetGame, strike, isGameOver } from '../gameLogic';

export default function runGame() {
    console.log('Welcome to Battleships!');
    console.log('Use help() command to get details');

    const replServer = repl.start({
        prompt: `battleships > `,
        useGlobal: false,
        useColors: true
    });

    resetGame();

    replServer.context.strike = (xString, y) => {
        let strikeEffect: boolean;

        try {
            strikeEffect = strike(xString, y - 1);
        } catch (error) {

            return error.message;
        }

        if(strikeEffect && isGameOver())
            return "You won! You can play again using reset()";

        return `${strikeEffect ? 'Hit!' : 'Miss!'}`;

    }

    replServer.context.reset = () => {
        resetGame();
        return "Game was reset";
    };

    replServer.context.quit = () => process.exit(0);

    replServer.context.help = () => {
        console.log("strike('A', 1) - strike the enemy ship until you win");
        console.log("reset() - play again")
        console.log("quit() - quit the game")
        return "Good luck!";
    };

}

