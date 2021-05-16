import { IgtFeature, SaveData, IgtFeatures, EmptyItem, IgtItemList, AbstractItem, } from "incremental-game-template";
import { Stone } from "./instances/consumable/stone";
import { BigStone } from "./instances/equipment/bigStone";

export class ItemList extends IgtItemList {
    _features = undefined as unknown as IgtFeatures

    constructor() {
        super('item-list');
    }

    initialize(features: IgtFeatures) {
        super.initialize(features);
        this._features = features;
    }

    getItem(id: string): AbstractItem {
        throw new Error("Method not implemented.");
    }

    get empty(): EmptyItem {
        return new EmptyItem();
    }

    get stone(): Stone {
        return new Stone();
    }

    get bigStone(): BigStone {
        return new BigStone();
    }

    load(): void {
        // Empty
    }

    save(): SaveData {
        return {}
    }
}