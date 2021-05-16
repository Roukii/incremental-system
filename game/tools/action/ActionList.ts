import { Features } from "game/Features";
import { ItemId } from "game/features/items/ItemId";
import { CurrencyType } from "game/wallet/CurrencyType";
import {IgtFeature, IgtWallet, IgtAction, SaveData, ItemAmount, Currency,} from "incremental-game-template";
import { ActionId } from "./ActionId";
import { ContinuousAction } from "./ContinuousAction";
import { GainItemAction } from "./GainItemAction";

export class ActionList extends IgtFeature {
    _features = undefined as unknown as Features
    _grabStone : GainItemAction

    constructor() {
        super('action-list');
    }


    initialize(features: Features) {
        super.initialize(features);
        this._features = features;
    }

    get rest(): IgtAction {
        return new ContinuousAction("Rest", 1);
    }

    get grabStone(): GainItemAction {
        if (this._grabStone?.isStarted === undefined)
        {
            console.log("create grab stone");
            this._grabStone = new GainItemAction(ItemId.Stone, "Grab Stone", 3, this._features.inventory, this._features.itemList);
        }
        return this._grabStone
    }

    // Facilities
    // get furnace(): SkillAction[] {
    //     return [
    //         this.smeltIron,
    //     ]
    // }


    load(): void {
        // Empty
    }

    save(): SaveData {
        return {}
    }
}