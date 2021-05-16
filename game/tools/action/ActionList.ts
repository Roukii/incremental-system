import {IgtFeature, IgtFeatures, IgtWallet, IgtAction, SaveData} from "incremental-game-template";
import { ActionId } from "./ActionId";
import { ContinuousAction } from "./ContinuousAction";
import { GainItemAction } from "./GainItemAction";

export class ActionList extends IgtFeature {
    _features = undefined as unknown as IgtFeatures

    constructor() {
        super('action-list');
    }


    initialize(features: IgtFeatures) {
        super.initialize(features);
        this._features = features;
    }

    get rest(): IgtAction {
        return new ContinuousAction("Rest", 1);
    }

    get grabStone(): GainItemAction {
        return new GainItemAction(itemId, "Grab Stone", 3, [new ItemAmount(ItemId.IronBar)], [new ItemAmount(ItemId.MoneyPouch)], this._features.inventory, this._features.itemList)
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