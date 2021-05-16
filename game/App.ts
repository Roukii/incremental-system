import {IgtSettings, IgtWallet, IgtInventory} from "incremental-game-template";
import { CharacterInfo } from "./CharacterInfo";
import { Equipments } from "./features/equipment/Equipments";
import { ItemList } from "./features/items/ItemList";
import { Skills } from "./features/skill/Skills";
import {IncrementalGod} from "./IncrementalGod";
import { ActionList } from "./tools/action/ActionList";
import { ActionQueue } from "./tools/action/ActionQueue";
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
                wallet: new IgtWallet([CurrencyType.Exp, CurrencyType.Idea, CurrencyType.Stone]),
                characterInfo: new CharacterInfo(),
                inventory: new IgtInventory(),
                itemList: new ItemList(),
                skills: new Skills(),
                actions: new ActionList(),
                actionsQueue: new ActionQueue(),
                equipments: new Equipments(),
                // Add your own features here.  
            }
        );
    }
}