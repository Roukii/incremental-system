import { AbstractItem } from "incremental-game-template";
import { ItemId } from "../../ItemId";
import { ItemType } from "../../ItemType";

export class AbstractEquipment extends AbstractItem {
    constructor(name: string, description: string, itemId: ItemId, itemType: ItemType) {
        super(name, description, itemId, itemType);
    }

    equip(): Boolean {
        return true
    }
}