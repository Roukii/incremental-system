import { ItemId } from "game/features/items/ItemId";
import { ItemList } from "game/features/items/ItemList";
import {IgtAction, IgtInventory, Requirement, NoRequirement} from "incremental-game-template";

export class GainItemAction extends IgtAction {
    itemId: ItemId;

    _inventory: IgtInventory;
    _itemList: ItemList;
    _itemQuantity: number;

    constructor(itemId: ItemId, description: string, duration: number, inventory: IgtInventory, itemList: ItemList, itemQuantity = 1, requirement: Requirement = new NoRequirement()) {
        super(description, duration, 0);
        this.itemId = itemId;
        this._itemQuantity = itemQuantity;
        this._inventory = inventory;
        this._itemList = itemList;
    }

    public gainReward(): boolean {
        console.log(this._inventory)
        this._inventory.gainItem(this._itemList[this.itemId], this._itemQuantity);
        return true;
    }

}