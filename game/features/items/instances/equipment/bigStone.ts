import { AbstractItem } from "incremental-game-template";
import { ItemId } from "../../ItemId";
import { ItemType } from "../../ItemType";
import { AbstractWeapon } from "./abstractWeapon";

export class BigStone extends AbstractWeapon {
    constructor() {
        super('BigStone', "Now that's too much", ItemId.BigStone, ItemType.Equipment,1, 0.8, 25);
    }
}