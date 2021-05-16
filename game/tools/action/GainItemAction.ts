import {IgtAction, IgtInventory, IgtItemList, Requirement, NoRequirement} from "incremental-game-template";

export class GainItemAction extends IgtAction {
    itemId: ItemId;

    _inventory: IgtInventory;
    _itemList: IgtItemList;
    _itemQuantity: number;

    constructor(itemId: ItemId, description: string, duration: number, inventory: IgtInventory, itemList: IgtItemList, itemQuatity = 1, requirement: Requirement = new NoRequirement()) {
        super(description, duration, 0, requirement);
        this.itemId = itemId;
        this._inventory = inventory;
        this._itemList = itemList;
    }

    gainReward(): boolean {
        this._inventory.gainItem(this._itemList[this.itemId], this._itemQuantity);
        return true;
    }

}