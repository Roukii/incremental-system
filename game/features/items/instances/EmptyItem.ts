import { AbstractItem } from "incremental-game-template";
import { ItemId } from "../ItemId";
import { ItemType } from "../ItemType";


export class EmptyItem extends AbstractItem {

    constructor() {
        super('Empty', '', ItemId.Empty, ItemType.Empty, 0);
    }
}