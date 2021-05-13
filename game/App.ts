import {IgtSettings, IgtWallet} from "incremental-game-template";
import {IncrementalGod} from "./incrementalGod";
import { CurrencyType } from "./wallet/CurrencyType";

export class App {
    static inProduction: boolean = (process.env.NODE_ENV === "production");
    static game: IncrementalGod;

    static start(): void {
        this.game = this.getDefaultGame();
        this.game.initialize();
        this.game.load();
        this.game.start();
    }

    public static getDefaultGame(): IncrementalGod {
        return new IncrementalGod(
            {
                settings: new IgtSettings(),
                wallet: new IgtWallet([CurrencyType.Exp, CurrencyType.Idea]),
                // Add your own features here.
            }
        );
    }
}