import { GuessMyNumber, config as GMNConfig } from './_GuessMyNumber.js';
import { NumberGuesser, config as NGConfig } from './_NumberGuesser.js';
import { CoinGame, config as CGConfig } from './_CoinGame.js';
import { MathGame, config as MConfig } from './_MathGame.js';


(() => {
    document.querySelectorAll(`[data-js-${GMNConfig.type}=${GMNConfig.name}]`).forEach((el) => {
        GuessMyNumber(el);
    });

    document.querySelectorAll(`[data-js-${NGConfig.type}=${NGConfig.name}]`).forEach((el) => {
        NumberGuesser(el);
    });

    document.querySelectorAll(`[data-js-${CGConfig.type}=${CGConfig.name}]`).forEach((el) => {
        CoinGame(el);
    });

    document.querySelectorAll(`[data-js-${MConfig.type}=${MConfig.name}]`).forEach((el) => {
        MathGame(el);
    });
})();


