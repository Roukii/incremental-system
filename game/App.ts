import {IgtSettings, IgtWallet} from "incremental-game-template";
import {incrementalGod} from "./incrementalGod";
import { CurrencyType } from "./wallet/CurrencyType";

export class App {
    static game: incrementalGod;

    static start(): void {
        this.game = this.getDefaultGame();
        this.game.initialize();
        this.game.load();
        this.game.start();
    }

    public static getDefaultGame(): incrementalGod {
        return new incrementalGod(
            {
                settings: new IgtSettings(),
                wallet: new IgtWallet([CurrencyType.Exp, CurrencyType.Idea]),
                // Add your own features here.
            }
        );
    }
}